import { Component, h, Prop } from '@stencil/core';
import { styleTypeClassMapper, colorClassMapper, sizeClassMapper } from '../../utils/utils';

@Component({
    tag: 'core-btn',
    styleUrl: 'button-component.scss',
    shadow: true
})
export class ButtonComponent {
    @Prop() color: string;
    @Prop() size = '';
    @Prop() type = '';

    private btnClass: string;

    componentWillLoad() {
        const type = styleTypeClassMapper[this.type] || '';
        this.btnClass = `btn btn-${type}${colorClassMapper[this.color]} btn-${sizeClassMapper[this.size]}`;
    }

    render() {
        return <button type="button" class={this.btnClass}>
            <slot></slot>
        </button>;
    }

}
