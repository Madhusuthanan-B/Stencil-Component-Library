import { Component, h, Prop, State, Watch } from '@stencil/core';
import { colorClassMapper, sizeClassMapper } from '../../utils/utils';
import { IDropDownOption } from './drop-down.model';

@Component({
    tag: 'core-drop-down',
    styleUrl: 'drop-down-component.scss',
    shadow: true
})
export class DropDownComponent {
    @Prop() componentId: string;
    @Prop() label: string;
    @Prop() color: string;
    @Prop() size = '';
    @Prop() options: IDropDownOption[] | string;

    @State() isOptionsOpen = false;
    @State() displayLabel: string;

    private _btnClass: string;
    private _dropDownOptions: IDropDownOption[];
    private _dropDownToggleClass = '';
    private _node: Element;

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
        this.displayLabel = this.label;
        this.optionsWatcher(this.options);
    }

    toggleDropDownOptions() {
        this.isOptionsOpen = !this.isOptionsOpen;
        this._dropDownToggleClass = this.isOptionsOpen ? 'show' : '';
    }

    handleClick = (e) => {
        if (this._node.contains(e.target)) {
            return;
        }
        this.closeDropDownOptions();
    }

    closeDropDownOptions() {
        if (this.isOptionsOpen) {
            this.isOptionsOpen = false;
            this._dropDownToggleClass = '';
        }

    }

    selectOption(selected) {
        this.displayLabel = selected.name;
        this.closeDropDownOptions();
    }

    render() {
        const dropDownOptions = this._dropDownOptions ? this._dropDownOptions.map((option: IDropDownOption) => {
            return <a class="dropdown-item" data-value={option.value} href="javascript:void(0)" onClick={this.selectOption.bind(this, option)}>{option.name}</a>
        }) : null;

        return <div class={"dropdown " + this._dropDownToggleClass} ref={divEl => this._node = divEl}>
            <button class={this._btnClass} type="button" id={this.componentId} aria-haspopup="true" aria-expanded="false" onClick={this.toggleDropDownOptions.bind(this)}>
                {this.displayLabel}
            </button>
            <div class={"dropdown-menu " + this._dropDownToggleClass} aria-labelledby="dropdownMenuButton">
                {dropDownOptions}
            </div>
        </div>;
    }

    componentDidLoad() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    disconnectedCallback() {
        document.removeEventListener('mousedown', this.handleClick, false);
        console.log('component removed. Cleaned up all event listeners associated');
    }
}