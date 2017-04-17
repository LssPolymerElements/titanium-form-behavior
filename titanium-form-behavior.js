var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TitaniumFormBehavior = (function (_super) {
    __extends(TitaniumFormBehavior, _super);
    function TitaniumFormBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitaniumFormBehavior.prototype.scrollToError = function (selector) {
        var inputs = Polymer.dom(this.root).querySelectorAll(selector);
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            if (input.invalid) {
                input.scrollIntoView(false);
                break;
            }
        }
    };
    TitaniumFormBehavior.prototype.paperDropdownEnterPressed = function () {
        var focusedElement = Polymer.dom(this.root).querySelector("[focused]");
        if (focusedElement) {
            return focusedElement.nodeName === "PAPER-DROPDOWN-MENU";
        }
        return false;
    };
    TitaniumFormBehavior.prototype.scrollToTop = function (selector) {
        var inputs = Polymer.dom(this.root).querySelectorAll(selector);
        if (inputs.length > 0) {
            inputs[0].scrollIntoView(false);
        }
    };
    return TitaniumFormBehavior;
}(polymer.Base));
TitaniumFormBehavior = __decorate([
    component("titanium-form-behavior")
], TitaniumFormBehavior);
TitaniumFormBehavior.register();
//# sourceMappingURL=titanium-form-behavior.js.map