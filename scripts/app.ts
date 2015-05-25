/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';
import {ScoreTable} from 'scoretable';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'views/app.html',
    directives: [ScoreTable]
})
export class MyAppComponent {
    name: string;
    constructor() {
        this.name = 'Alice';
    }
}
