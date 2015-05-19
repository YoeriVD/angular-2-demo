if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular_1 = require('angular2/angular');
var MyAppComponent = (function () {
    function MyAppComponent() {
        this.name = 'Alice';
    }
    MyAppComponent = __decorate([
        angular_1.Component({
            selector: 'my-app'
        }),
        angular_1.View({
            templateUrl: 'views/app.html'
        })
    ], MyAppComponent);
    return MyAppComponent;
})();
angular_1.bootstrap(MyAppComponent);
//# sourceMappingURL=app.js.map