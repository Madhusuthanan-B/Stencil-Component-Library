import { Component, h, Prop } from '@stencil/core';
import { colorClassMapper } from '../../utils/utils';

@Component({
    tag: 'core-btn',
    styleUrl: 'button-component.scss',
    shadow: true
})
export class ButtonComponent {
    @Prop() color: string;
    private btnClass: string;

    componentWillLoad() {
        this.btnClass = `btn btn-${colorClassMapper[this.color]}`;
    }

    render() {
        return <button type="button" class={this.btnClass}>
            <slot></slot>
        </button>;
    }

}
