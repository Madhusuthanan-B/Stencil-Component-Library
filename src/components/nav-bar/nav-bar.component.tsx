import { Component, h, Prop, State, Watch } from '@stencil/core';
import { INavBarOptions } from './nav-bar.model';

@Component({
    tag: 'core-nav-bar',
    styleUrl: 'nav-bar.component.scss',
    shadow: true
})
export class NavBarComponent {
    @Prop() header: string;
    @Prop() options: INavBarOptions[] | string;

    @State() private _navBarOptions: INavBarOptions[];

    @Watch('options')
    optionsWatcher(newValue: INavBarOptions[] | string) {
        if (typeof newValue === 'string') {
            this._navBarOptions = JSON.parse(newValue);
        }
        else {
            this._navBarOptions = newValue;
        }
    }

    componentWillLoad() {
        this.optionsWatcher(this.options);
    }

    onNavItemSelected(selectedItem: INavBarOptions) {
        const currentOptions = [...this._navBarOptions];
        currentOptions.forEach((option) => option.isActive = false);
        const selectedOption = currentOptions.find((option) => option.value === selectedItem.value);
        selectedOption.isActive = true;
        this._navBarOptions = [...currentOptions];
    }

    render() {
        let navBarOptions;
        if (this._navBarOptions.some((option) => option.isActive)) {
            navBarOptions = this._navBarOptions ? this._navBarOptions.map((option) => {
                const activeClass = option.isActive ? "active" : '';
                const disabledClass = option.isDisabled ? "disabled" : "";
                return <a class={"nav-item nav-link " + activeClass + " " + disabledClass} href="javascript:void(0)" onClick={this.onNavItemSelected.bind(this, option)}>{option.name}</a>;
            }) : null;
        } else {
            navBarOptions = this._navBarOptions ? this._navBarOptions.map((option, index) => {
                const activeClass = index === 0 ? "active" : '';
                const disabledClass = option.isDisabled ? "disabled" : "";
                return <a class={"nav-item nav-link " + activeClass + " " + disabledClass} href="javascript:void(0)" onClick={this.onNavItemSelected.bind(this, option)}>{option.name}</a>;
            }) : null;
        }

        return <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">{this.header}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    {navBarOptions}
                </div>
            </div>
        </nav>;
    }
}