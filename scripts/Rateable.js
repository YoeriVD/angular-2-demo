var Rateable = (function () {
    function Rateable(title, actual, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 10; }
        this.actual = actual;
        this.min = min;
        this.max = max;
        this.title = title;
    }
    return Rateable;
})();
exports.Rateable = Rateable;
