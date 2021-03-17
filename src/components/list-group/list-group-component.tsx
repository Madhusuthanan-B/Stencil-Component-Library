import { Component, h, Prop, Watch, State } from '@stencil/core';
import { IListGroupOptions } from './list-group.model';

@Component({
    tag: 'core-list-group',
    styleUrl: 'list-group-component.scss',
    shadow: true
})
export class ListGroupComponent {
    @Prop() options: IListGroupOptions[] | string;

    @State() private _listGroupOptions: IListGroupOptions[];

    @Watch('options')
    optionsWatcher(newValue: IListGroupOptions[] | string) {
        this._listGroupOptions = (typeof newValue === 'string') ? JSON.parse(newValue) : newValue;
    }

    componentWillLoad() {
        this.optionsWatcher(this.options);
    }

    onItemSelected(selectedItem: IListGroupOptions) {
        const currentOptions = [...this._listGroupOptions];
        currentOptions.forEach((option) => option.isActive = false);
        const selectedOption = currentOptions.find((option) => option.value === selectedItem.value);
        selectedOption.isActive = true;
        this._listGroupOptions = [...currentOptions];
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
