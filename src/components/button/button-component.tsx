import { Component, h } from '@stencil/core';

@Component({
    tag: 'core-btn',
    styleUrl: 'button-component.scss',
    shadow: true
})
export class ButtonComponent {

    render() {
        return <button type="button" class="btn btn-primary">Primary</button>;
    }

}
