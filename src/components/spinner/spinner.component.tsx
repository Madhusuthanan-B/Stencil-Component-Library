import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'core-spinner',
    styleUrl: 'spinner-component.scss',
    shadow: true
})
export class SpinnerComponent {

    @Prop() type = 'border';
    @Prop() color = '';

    private class: string;
    private colorClassMapper = {
        'primary': 'primary',
        'secondary': 'secondary',
        'error': 'danger',
        'warn': 'warning',
        'info': 'info'
    };

    componentWillLoad() {
        this.class = `spinner-${this.type} text-${this.colorClassMapper[this.color]}`;
    }

    render() {
        return <div class={this.class} role="status">
            <span class="sr-only">Loading...</span>
        </div>;
    }
}