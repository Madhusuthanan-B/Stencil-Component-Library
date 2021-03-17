import { Component, h, Prop, Watch, State, Event, EventEmitter } from '@stencil/core';
import { IListGroupOption } from './list-group.model';

@Component({
    tag: 'core-list-group',
    styleUrl: 'list-group-component.scss',
    shadow: true
})
export class ListGroupComponent {
    @Prop() options: IListGroupOption[] | string;

    @State() private _listGroupOptions: IListGroupOption[];

    @Event({ bubbles: true, composed: true }) coreListOptionSelected: EventEmitter<IListGroupOption>;

    @Watch('options')
    optionsWatcher(newValue: IListGroupOption[] | string) {
        this._listGroupOptions = (typeof newValue === 'string') ? JSON.parse(newValue) : newValue;
    }

    componentWillLoad() {
        this.optionsWatcher(this.options);
    }

    onItemSelected(selectedItem: IListGroupOption) {
        const currentOptions = [...this._listGroupOptions];
        currentOptions.forEach((option) => option.isActive = false);
        const selectedOption = currentOptions.find((option) => option.value === selectedItem.value);
        selectedOption.isActive = true;
        this._listGroupOptions = [...currentOptions];
        this.coreListOptionSelected.emit(selectedOption as IListGroupOption);
    }

    render() {
        let listOptions;
        if (this._listGroupOptions.some((option) => option.isActive)) {
            listOptions = this._listGroupOptions ? this._listGroupOptions.map((option) => {
                const activeClass = option.isActive ? "active" : '';
                const disabledClass = option.isDisabled ? "disabled" : "";
                return <button type="button" onClick={this.onItemSelected.bind(this, option)} class={"list-group-item list-group-item-action" + ` ${activeClass} ${disabledClass}`}>{option.name}</button>;
            }) : null;
        } else {
            listOptions = this._listGroupOptions ? this._listGroupOptions.map((option, index) => {
                const activeClass = index === 0 ? "active" : '';
                const disabledClass = option.isDisabled ? "disabled" : "";
                return <button type="button" onClick={this.onItemSelected.bind(this, option)} class={"list-group-item list-group-item-action" + ` ${activeClass} ${disabledClass}`}>{option.name}</button>;
            }) : null;
        }


        return <div class="list-group">{listOptions}</div>
    }
}
