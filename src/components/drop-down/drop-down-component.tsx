import { Component, h, Prop } from '@stencil/core';
import { colorClassMapper, sizeClassMapper } from '../../utils/utils';

@Component({
    tag: 'core-drop-down',
    styleUrl: 'drop-down-component.scss',
    shadow: true
})
export class DropDownComponent {
    @Prop() id: string;
    @Prop() color: string;
    @Prop() size = '';

    private _btnClass: string;

    componentWillLoad() {
        this._btnClass = `btn btn-${colorClassMapper[this.color]} btn-${sizeClassMapper[this.size]} dropdown-toggle`;
    }

    render() {
        return <div class="dropdown">
            <button class={this._btnClass} type="button" id={this.id} aria-haspopup="true" aria-expanded="false">
                <slot></slot>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>;
    }
}