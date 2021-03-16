import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'core-btn',
    styleUrl: 'button-component.scss',
    shadow: true
})
export class ButtonComponent {
    @Prop() type: string;
    private btnClass: string;
    private btnTypeClassMapper = {
        'primary': 'btn-primary',
        'secondary': 'btn-secondary',
        'error': 'btn-danger',
        'warn': 'btn-warning',
        'info': 'btn-info'
    };

    componentWillLoad() {
        this.btnClass = this.btnTypeClassMapper[this.type];
    }

    render() {
        return <button type="button" class={'btn ' + this.btnClass}>
            <slot></slot>
        </button>;
    }

}
