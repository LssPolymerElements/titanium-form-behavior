@component("titanium-form-behavior")
class TitaniumFormBehavior extends polymer.Base {
    /**value parameter.*/
    @property({
        type: String,
        notify: true,
    })
    value: string;

}
TitaniumFormBehavior.register();