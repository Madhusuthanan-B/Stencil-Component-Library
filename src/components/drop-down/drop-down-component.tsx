import { Component, h, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';
import { colorClassMapper, sizeClassMapper } from '../../utils/utils';
import { IDropDownOption } from './drop-down.model';

@Component({
    tag: 'core-drop-down',
    styleUrl: 'drop-down-component.scss',
    shadow: true
})
export class DropDownComponent {
    @Prop() componentId: string;
    @Prop({ mutable: true, reflect: true }) label: string;
    @Prop() color: string;
    @Prop() size = '';
    @Prop() options: IDropDownOption[] | string;

    @State() isOptionsOpen = false;

    @Event({ bubbles: true, composed: true }) coreOptionSelected: EventEmitter<IDropDownOption>;

    private _btnClass: string;
    private _dropDownOptions: IDropDownOption[];
    private _dropDownToggleClass = '';

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

    toggleDropDownOptions() {
        this.isOptionsOpen = !this.isOptionsOpen;
        this._dropDownToggleClass = this.isOptionsOpen ? 'show' : '';
    }

    handleClick = () => {
        // Auto close drop down on clicking outside. Bit buggy
        // if (this._node.contains(e.target)) {
        //     return;
        // }
        // this.closeDropDownOptions();
    }

    closeDropDownOptions() {
        if (this.isOptionsOpen) {
            this.isOptionsOpen = false;
            this._dropDownToggleClass = '';
        }

    }

    selectOption(selected) {
        this.label = selected.name;
        this.coreOptionSelected.emit(selected as IDropDownOption);
        this.closeDropDownOptions();
    }

    render() {
        const dropDownOptions = this._dropDownOptions ? this._dropDownOptions.map((option: IDropDownOption) => {
            return <a class="dropdown-item" data-value={option.value} href="javascript:void(0)" onClick={this.selectOption.bind(this, option)}>{option.name}</a>
        }) : null;

        return <div class={"dropdown " + this._dropDownToggleClass}>
            <button class={this._btnClass} type="button" id={this.componentId} aria-haspopup="true" aria-expanded="false" onClick={this.toggleDropDownOptions.bind(this)}>
                {this.label}
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