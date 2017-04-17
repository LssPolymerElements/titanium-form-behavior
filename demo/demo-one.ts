/// <reference path="../bower_components/polymer-ts/polymer-ts.ts" />

@behavior(TitaniumFormBehavior)
@component("demo-one")
class DemoOne extends polymer.Base {
    //these are placeholder functions for typing. The behavior will override them
    scrollToError: (selector: string) => any;
    paperDropdownEnterPressed: () => boolean;
    scrollToTop: (selector: string) => void;

    @listen('scrollToTop.tap')
    scrollToTopTapped() {
        this.scrollToTop("paper-input");
    }

    @listen('submit.tap')
    formSubmitted() {
        if (this.paperDropdownEnterPressed) {
            return;
        }
        let valid = this.$.form.validate();
        if (!valid) {
            this.scrollToError("paper-input");
        }
    }

    attached() {

    }
}

DemoOne.register();