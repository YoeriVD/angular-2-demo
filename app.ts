/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from "angular2/angular2";

@Component({
	selector:'my-app'
})
@View({
	templateUrl: 'views/app.html'
})
class MyAppComponent{
	name: string;
	constructor(){
		this.name = 'Alice test';
	}
}

bootstrap(MyAppComponent);