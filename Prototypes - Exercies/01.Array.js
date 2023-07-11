(function solution() {

    //in this cases the THIS word refers to the value 
    //of the Array.prototype which is the array it self.
    Array.prototype.last = function () {
        return this[this.length - 1];
    };


    Array.prototype.skip = function (n) {
        const results = [];
        for (let index = n; index < this.length; index++) {
            results.push(this[index]);
        }
        return results;
    };

    Array.prototype.take = function (n) {
        const results = [];
        for (let index = 0; index < n; index++) {
            results.push(this[index]);
        }
        return results;
    };
    Array.prototype.sum = function () {
        let sum = 0;
        for (let index = 0; index < this.length; index++) {
            sum += Number(this[index]);
        }

        return sum;
    };

    Array.prototype.average = function () {
        const sum = this.sum();
        return sum / this.length;
    };


})();


//tests
const arr = [1,2,3,4,5];
const number = arr.average();
console.log(number);

