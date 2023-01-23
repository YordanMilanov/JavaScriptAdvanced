function solution() {

    let manager = function (input) {
        let inputArray = input.split(' ');
        let command = inputArray[0];

        let protein = 0;
        let carbohydrate = 0;
        let fat = 0;
        let flavour = 0;

        let apple = {
            carbohydrate: 1,
            flavour: 2,
        }


        let lemonade = {
            carbohydrate: 10,
            flavour: 20,
        }

        let burger = {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        }

        let eggs = {
            protein: 5,
            fat: 1,
            flavour: 3,
        }

        let turkey = {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,

        }

        let restock = function (inputArray) {
            let quantity = Number(inputArray[2]);
            let microelement = inputArray[1];
            if (microelement == "protein") {
                protein += quantity;
            } else if (microelement == "carbohydrate") {
                carbohydrate += quantity;
            } else if (microelement == "fat") {
                fat += quantity;
            } else if (microelement == "flavour") {
                flavour += quantity;
            }
            return "Success";
        }

        let prepare = function (inputArray) {
            let quantity = Number(inputArray[2]);
            let recipe = inputArray[1];

            if (recipe == "apple") {
                cook(apple);
            } else if (recipe == "lemonade") {
                cook(lemonade);
            } else if (recipe == "burger") {
                cook(burger);
            } else if (recipe == "eggs") {
                cook(eggs);
            } else if (recipe == "turkey") {
                cook(turkey);
            }
        }

        let cook = function (product) {

            //check quantity
            let checkQuantity = function () {
                let neededProduct = 'Success';
                let output = `Error: not enough ${neededProduct} in stock`

                if (product.protein < protein) {
                    neededProduct = 'protein';
                } else if (product.carbohydrate < carbohydrate) {
                    neededProduct = 'carbohydrate';
                } else if (product.fat < fat) {
                    neededProduct = 'fat';
                } else if (product.flavour < flavour) {
                    neededProduct = 'flavour';
                }

                if (neededProduct == 'Success') {
                    return neededProduct;
                } else {
                    return output;
                }
            }

            checkQuantity();

            //cook it
            if (checkQuantity == 'Success') {
                protein -= this.protein;
                carbohydrate -= this.carbohydrate;
                fat -= this.fat;
                flavour -= this.flavour;
                return checkQuantity;
            } else {
                return checkQuantity;
            }
        }

        //report
        let report = function () {
            return `protein=${protein} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`
        }

        let returnFunction = undefined;

         if (command == 'report') {
            returnFunction = report(inputArray);
        } else if (command == 'prepare') {
            returnFunction = prepare(inputArray);
        } else if (command == 'restock') {
            returnFunction = restock(inputArray);
        }

        return returnFunction;
    }

return manager;
}
let manager = solution();

console.log(manager ("restock flavour 50"));
console.log (manager ("prepare lemonade 4"));
