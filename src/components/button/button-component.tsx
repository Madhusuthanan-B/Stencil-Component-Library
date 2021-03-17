import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'core-btn',
    styleUrl: 'button-component.scss',
    shadow: true
})
export class ButtonComponent {
    @Prop() color: string;
    private btnClass: string;
    private colorClassMapper = {
        'primary': 'primary',
        'secondary': 'secondary',
        'error': 'danger',
        'warn': 'warning',
        'info': 'info'
    };

    componentWillLoad() {
        this.btnClass = `btn btn-${this.colorClassMapper[this.color]}`;
    }

    render() {
        return <button type="button" class={this.btnClass}>
            <slot></slot>
        </button>;
    }

}
