/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, For} from 'angular2/angular2'; 
import {Rateable} from 'rateable';

@Component({
	selector : 'scores',
	//injectables: [RatingsService]
})
@View({
	templateUrl : 'views/scores.html',
	directives: [For]
})
export class ScoreTable{
	ratings : Array<Rateable>;
	constructor(){//ratingsService : RatingsService){
        this.ratings = [
            new Rateable("test" , 10)
        ]//ratingsService.ratings;
	}
}
class RatingsService {
    ratings: Array<Rateable>;
    constructor() {
        this.ratings = [
            new Rateable('the food', 6),
            new Rateable('the session', 7),
            new Rateable('the drinks', 3),
            new Rateable('the location', 8),
            new Rateable('the audience', 9),
        ];
    }
}
