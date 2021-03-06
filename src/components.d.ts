/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IDropDownOption } from "./components/drop-down/drop-down.model";
import { IListGroupOption } from "./components/list-group/list-group.model";
import { INavBarOption } from "./components/nav-bar/nav-bar.model";
export namespace Components {
    interface CoreBtn {
        "color": string;
        "size": string;
        "type": string;
    }
    interface CoreCard {
        "header": string;
        "subheader": string;
    }
    interface CoreDropDown {
        "color": string;
        "componentId": string;
        "label": string;
        "options": IDropDownOption[] | string;
        "size": string;
    }
    interface CoreListGroup {
        "options": IListGroupOption[] | string;
    }
    interface CoreNavBar {
        "header": string;
        "options": INavBarOption[] | string;
    }
    interface CoreSpinner {
        "color": string;
        "type": string;
    }
}
declare global {
    interface HTMLCoreBtnElement extends Components.CoreBtn, HTMLStencilElement {
    }
    var HTMLCoreBtnElement: {
        prototype: HTMLCoreBtnElement;
        new (): HTMLCoreBtnElement;
    };
    interface HTMLCoreCardElement extends Components.CoreCard, HTMLStencilElement {
    }
    var HTMLCoreCardElement: {
        prototype: HTMLCoreCardElement;
        new (): HTMLCoreCardElement;
    };
    interface HTMLCoreDropDownElement extends Components.CoreDropDown, HTMLStencilElement {
    }
    var HTMLCoreDropDownElement: {
        prototype: HTMLCoreDropDownElement;
        new (): HTMLCoreDropDownElement;
    };
    interface HTMLCoreListGroupElement extends Components.CoreListGroup, HTMLStencilElement {
    }
    var HTMLCoreListGroupElement: {
        prototype: HTMLCoreListGroupElement;
        new (): HTMLCoreListGroupElement;
    };
    interface HTMLCoreNavBarElement extends Components.CoreNavBar, HTMLStencilElement {
    }
    var HTMLCoreNavBarElement: {
        prototype: HTMLCoreNavBarElement;
        new (): HTMLCoreNavBarElement;
    };
    interface HTMLCoreSpinnerElement extends Components.CoreSpinner, HTMLStencilElement {
    }
    var HTMLCoreSpinnerElement: {
        prototype: HTMLCoreSpinnerElement;
        new (): HTMLCoreSpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "core-btn": HTMLCoreBtnElement;
        "core-card": HTMLCoreCardElement;
        "core-drop-down": HTMLCoreDropDownElement;
        "core-list-group": HTMLCoreListGroupElement;
        "core-nav-bar": HTMLCoreNavBarElement;
        "core-spinner": HTMLCoreSpinnerElement;
    }
}
declare namespace LocalJSX {
    interface CoreBtn {
        "color"?: string;
        "size"?: string;
        "type"?: string;
    }
    interface CoreCard {
        "header"?: string;
        "subheader"?: string;
    }
    interface CoreDropDown {
        "color"?: string;
        "componentId"?: string;
        "label"?: string;
        "onCoreOptionSelected"?: (event: CustomEvent<IDropDownOption>) => void;
        "options"?: IDropDownOption[] | string;
        "size"?: string;
    }
    interface CoreListGroup {
        "onCoreListOptionSelected"?: (event: CustomEvent<IListGroupOption>) => void;
        "options"?: IListGroupOption[] | string;
    }
    interface CoreNavBar {
        "header"?: string;
        "onCoreNavItemSelected"?: (event: CustomEvent<INavBarOption>) => void;
        "options"?: INavBarOption[] | string;
    }
    interface CoreSpinner {
        "color"?: string;
        "type"?: string;
    }
    interface IntrinsicElements {
        "core-btn": CoreBtn;
        "core-card": CoreCard;
        "core-drop-down": CoreDropDown;
        "core-list-group": CoreListGroup;
        "core-nav-bar": CoreNavBar;
        "core-spinner": CoreSpinner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "core-btn": LocalJSX.CoreBtn & JSXBase.HTMLAttributes<HTMLCoreBtnElement>;
            "core-card": LocalJSX.CoreCard & JSXBase.HTMLAttributes<HTMLCoreCardElement>;
            "core-drop-down": LocalJSX.CoreDropDown & JSXBase.HTMLAttributes<HTMLCoreDropDownElement>;
            "core-list-group": LocalJSX.CoreListGroup & JSXBase.HTMLAttributes<HTMLCoreListGroupElement>;
            "core-nav-bar": LocalJSX.CoreNavBar & JSXBase.HTMLAttributes<HTMLCoreNavBarElement>;
            "core-spinner": LocalJSX.CoreSpinner & JSXBase.HTMLAttributes<HTMLCoreSpinnerElement>;
        }
    }
}
