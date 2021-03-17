import { Component, h, Prop } from '@stencil/core';
import { colorClassMapper } from '../../utils/utils';

@Component({
    tag: 'core-spinner',
    styleUrl: 'spinner-component.scss',
    shadow: true
})
export class SpinnerComponent {

    @Prop() type = 'border';
    @Prop() color = '';

    private class: string;

    componentWillLoad() {
        this.class = `spinner-${this.type} text-${colorClassMapper[this.color]}`;
    }

    render() {
        return <div class={this.class} role="status">
            <span class="sr-only">Loading...</span>
        </div>;
    }
}