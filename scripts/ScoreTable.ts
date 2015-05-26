/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, For} from 'angular2/angular2'; 
import {Rateable} from 'rateable';

@Component({
	selector : 'scores'
})
@View({
	templateUrl : 'views/scores.html',
	directives: [For]
})
export class ScoreTable{
	ratings : Array<Rateable>;
	constructor(){
        this.ratings = [
            new Rateable("test" , 10),
            new Rateable("test" , 10),
            new Rateable("test" , 10),
            new Rateable("test" , 10),
            new Rateable("test" , 10)
        ]
	}
    
    addScore(title: string,newScore : number){
        this.ratings.push(new Rateable(title, newScore));
    }
}