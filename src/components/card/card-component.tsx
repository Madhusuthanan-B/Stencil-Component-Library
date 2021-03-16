import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'core-card',
    styleUrl: 'card-component.scss',
    shadow: true
})
export class CardComponent {
    @Prop() header: string;
    @Prop() subheader: string;

    render() {
        const cardHeader = this.header ? <h5 class="card-title">{this.header}</h5> : '';
        const cardSubHeader = this.subheader ? <h6 class="card-subtitle mb-2 text-muted">{this.subheader}</h6> : '';

        return <div class="card">
            <div class="card-body">
                {cardHeader}
                {cardSubHeader}
                <slot></slot>
            </div>
        </div>;
    }
}