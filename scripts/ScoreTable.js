if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var rateable_1 = require('rateable');
var ScoreTable = (function () {
    function ScoreTable() {
        this.ratings = [
            new rateable_1.Rateable("test", 10),
            new rateable_1.Rateable("test", 10),
            new rateable_1.Rateable("test", 10),
            new rateable_1.Rateable("test", 10),
            new rateable_1.Rateable("test", 10)
        ];
    }
    ScoreTable.prototype.addScore = function (title, newScore) {
        this.ratings.push(new rateable_1.Rateable(title, newScore));
    };
    ScoreTable = __decorate([
        angular2_1.Component({
            selector: 'scores'
        }),
        angular2_1.View({
            templateUrl: 'views/scores.html',
            directives: [angular2_1.For]
        })
    ], ScoreTable);
    return ScoreTable;
})();
exports.ScoreTable = ScoreTable;
