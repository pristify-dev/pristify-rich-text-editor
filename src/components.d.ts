/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PristifyEditor {
    }
    interface PristifyEditorContent {
    }
    interface PristifyEditorHeader {
    }
    interface PristifyEditorHeaderAction {
    }
}
declare global {
    interface HTMLPristifyEditorElement extends Components.PristifyEditor, HTMLStencilElement {
    }
    var HTMLPristifyEditorElement: {
        prototype: HTMLPristifyEditorElement;
        new (): HTMLPristifyEditorElement;
    };
    interface HTMLPristifyEditorContentElement extends Components.PristifyEditorContent, HTMLStencilElement {
    }
    var HTMLPristifyEditorContentElement: {
        prototype: HTMLPristifyEditorContentElement;
        new (): HTMLPristifyEditorContentElement;
    };
    interface HTMLPristifyEditorHeaderElement extends Components.PristifyEditorHeader, HTMLStencilElement {
    }
    var HTMLPristifyEditorHeaderElement: {
        prototype: HTMLPristifyEditorHeaderElement;
        new (): HTMLPristifyEditorHeaderElement;
    };
    interface HTMLPristifyEditorHeaderActionElement extends Components.PristifyEditorHeaderAction, HTMLStencilElement {
    }
    var HTMLPristifyEditorHeaderActionElement: {
        prototype: HTMLPristifyEditorHeaderActionElement;
        new (): HTMLPristifyEditorHeaderActionElement;
    };
    interface HTMLElementTagNameMap {
        "pristify-editor": HTMLPristifyEditorElement;
        "pristify-editor-content": HTMLPristifyEditorContentElement;
        "pristify-editor-header": HTMLPristifyEditorHeaderElement;
        "pristify-editor-header-action": HTMLPristifyEditorHeaderActionElement;
    }
}
declare namespace LocalJSX {
    interface PristifyEditor {
    }
    interface PristifyEditorContent {
    }
    interface PristifyEditorHeader {
    }
    interface PristifyEditorHeaderAction {
    }
    interface IntrinsicElements {
        "pristify-editor": PristifyEditor;
        "pristify-editor-content": PristifyEditorContent;
        "pristify-editor-header": PristifyEditorHeader;
        "pristify-editor-header-action": PristifyEditorHeaderAction;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pristify-editor": LocalJSX.PristifyEditor & JSXBase.HTMLAttributes<HTMLPristifyEditorElement>;
            "pristify-editor-content": LocalJSX.PristifyEditorContent & JSXBase.HTMLAttributes<HTMLPristifyEditorContentElement>;
            "pristify-editor-header": LocalJSX.PristifyEditorHeader & JSXBase.HTMLAttributes<HTMLPristifyEditorHeaderElement>;
            "pristify-editor-header-action": LocalJSX.PristifyEditorHeaderAction & JSXBase.HTMLAttributes<HTMLPristifyEditorHeaderActionElement>;
        }
    }
}
