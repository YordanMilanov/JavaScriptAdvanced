function calculator() {
    //these are DOM elements not Numbers that is why we use value below
    let field1;
    let field2;
    let result;

    return {
        init,
        add,
        subtract
    };

    

    function init(f1, f2, fr) {
        field1 = document.querySelector(f1);
        field2 = document.querySelector(f2);
        result = document.querySelector(fr);
    }

    function add() {
        result.value = Number(field1.value) + Number(field2.value);
    }

    function subtract() {
        result.value = Number(field1.value) - Number(field2.value);
    }
}




