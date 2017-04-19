@component("titanium-form-behavior")
class TitaniumFormBehavior extends polymer.Base {
    scrollToError(selector: string): void {
        var inputs: any = Polymer.dom(this.root).querySelectorAll(selector);
        for (let input of inputs) {
            if (input.invalid) {
                input.scrollIntoView(false);
                break;
            }
        }
    }

    paperDropdownEnterPressed(): boolean {
        var focusedElement = Polymer.dom(this.root).querySelector("[focused]");
        if (focusedElement) {
            return focusedElement.nodeName === "PAPER-DROPDOWN-MENU";
        }
        return false;
    }

    scrollToTop(selector: string): void {
        var inputs: any = Polymer.dom(this.root).querySelectorAll(selector);
        if (inputs.length > 0) {
            inputs[0].scrollIntoView(false);
        }
    }
}
TitaniumFormBehavior.register();