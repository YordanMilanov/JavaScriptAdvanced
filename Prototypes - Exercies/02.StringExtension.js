(function solution() {
    String.prototype.ensureStart = function(str) {
        const actualStr = this.toString();
        if(!actualStr.startsWith(str)) {
            return `${str}${actualStr}`;
        }
        return actualStr;
    };

    String.prototype.isEmpty = function() {
        return this.toString().length === 0;
    };

    String.prototype.truncate = function(n) {
        const ELLIPSIS = "...";
        const strValue = this.toString();
        if(n <= 3) {
            return ELLIPSIS;
        }

        if(strValue.length <= n) {
            return strValue;
        }

        const lastIndex = strValue.substr(0, n - 2).lastIndexOf(" ");
        if(lastIndex !== -1) {
            return `${strValue.substr(0, lastIndex)}${ELLIPSIS}`
        }

        return `${strValue.substr(0, n-3)}${ELLIPSIS}`;
    }

})();

let str = "my string";
str = str.ensureStart("my");
str = str.ensureStart("hello ");
str.truncate(16);
str.truncate(14);
str.truncate(8);
str.truncate(4);
str.truncate(2);
console.log(str);
// console.log(str.isEmpty());
// console.log("".isEmpty());
