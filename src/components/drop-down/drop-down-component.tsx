import { Component, h, Prop, Watch } from '@stencil/core';
import { colorClassMapper, sizeClassMapper } from '../../utils/utils';
import { IDropDownOption } from './drop-down.model';

@Component({
    tag: 'core-drop-down',
    styleUrl: 'drop-down-component.scss',
    shadow: true
})
export class DropDownComponent {
    @Prop() componentId: string;
    @Prop() color: string;
    @Prop() size = '';
    @Prop() options: IDropDownOption[] | string;

    private _btnClass: string;
    private _dropDownOptions: IDropDownOption[];

    @Watch('options')
    optionsWatcher(newValue: IDropDownOption[] | string) {
        if (typeof newValue === 'string') {
            this._dropDownOptions = JSON.parse(newValue);
        }
        else {
            this._dropDownOptions = newValue;
        }
    }

    componentWillLoad() {
        this._btnClass = `btn btn-${colorClassMapper[this.color]} btn-${sizeClassMapper[this.size]} dropdown-toggle`;
        this.optionsWatcher(this.options);
    }

    render() {
        const dropDownOptions = this._dropDownOptions? this._dropDownOptions.map((option: IDropDownOption) => <a class="dropdown-item" data-value={option.value} href="#">{option.name}</a>): null;
        return <div class="dropdown">
            <button class={this._btnClass} type="button" id={this.componentId} aria-haspopup="true" aria-expanded="false">
                <slot></slot>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {dropDownOptions}
            </div>
        </div>;
    }
}