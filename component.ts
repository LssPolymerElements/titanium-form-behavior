@component("${{componentName}}")
class ${{componentNamePascal}} extends polymer.Base {
    /**value parameter.*/
    @property({
		type:String,
		notify: true,
	})
    value: string;

}
${{componentNamePascal}}.register();