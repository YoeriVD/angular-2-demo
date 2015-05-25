export class Rateable{
	max : number;
	min : number;
    actual: number;
    title: string;
	
	constructor(title : string, actual : number, min: number = 0, max : number = 10){
		this.actual = actual;
		this.min = min;
        this.max = max;
        this.title = title;
	}
}