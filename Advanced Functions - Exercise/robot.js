function solution () {
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let recipesEnum = {
        apple: {carbohydrate: 1, flavour: 2},
        burger:{carbohydrate: 10, fat: 7, flavour: 3},
        lemonade: {carbohydrate: 10, flavour: 20},
        eggs: {protein: 10, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    return function inputHandler(input) {
        let actionHandler = cmdOption();
        let [cmd, microelement, quantity] = input.split(' ');
        return actionHandler[cmd](microelement, quantity);
    }

    function cmdOption() {
        return {
            restock: (microelement, quantity) => {
                store[microelement] = store[microelement] + Number(quantity);
                return "Success";
            },
            prepare: (recipe, quantity) => {
                let isDone = true;
                for(let [key, defQuantity] of Object.entries(recipesEnum[recipe])){
                    let needValue = Number(quantity) * defQuantity;
                    if(store[key] < needValue) {
                        isDone = false;
                        break;
                    }
                };

            },
            report: ()=> console.log('report')
        }
    } 
}

let manager = solution();
console.log(manager ("restock flavour 50"));
//console.log (manager ("prepare lemonade 4"));