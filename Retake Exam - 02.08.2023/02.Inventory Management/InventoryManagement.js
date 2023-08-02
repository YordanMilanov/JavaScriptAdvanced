class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantityInput) {
        if(quantityInput <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        if(this.items.length >= this.capacity) {
            throw new Error("The inventory is already full.");
        }

       for (let index = 0; index < this.items.length; index++) {
        if(this.items[index].title == itemName) {
            this.items[index].quantity += quantityInput;
            return;
        }
       }

       this.items.push({title: itemName, quantity: quantityInput});
       return `Added ${quantityInput} ${itemName}(s) to the inventory.`
    }

    sellItem(itemName, quantityInput) {
        //negative quantity
        if(quantityInput <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        for (let index = 0; index < this.items.length; index++) {
            if(this.items[index].title == itemName) {
               //not enough stock of the item
                if(this.items[index].quantity < quantityInput) {
                    throw new Error( `Not enough ${itemName}(s) in stock.`);
                }
                //happy path
                this.items[index].quantity -= quantityInput;
                if(this.items[index].quantity === 0) {
                    this.items.splice(index, 1);
                    this.outOfStock.push(itemName);
                    return `Sold ${quantityInput} ${itemName}(s) from the inventory.`
                }
                return `Sold ${quantityInput} ${itemName}(s) from the inventory.`
            }
        }

        //items is not in the array
        throw new Error(`The item ${itemName} is not available in the inventory.`);
    }

    restockItem(itemName, quantityInput) {
        //negative quantity
        if(quantityInput <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        for(const item of this.outOfStock) {
            if(item.title === itemName) {
                this.outOfStock = this.outOfStock.filter((el) => el.title !== itemName);
                this.items.push({title: itemName, quantity: quantityInput});
                return `Restocked ${quantityInput} ${itemName}(s) in the inventory.`;
            }
        }

        for (const item of this.items) {
            if(item == itemName) {
                item.quantity += quantityInput;
                return `Restocked ${quantityInput} ${itemName}(s) in the inventory.`; 
            }
         }

        this.items.push({title: itemName, quantity: quantityInput});
        return `Restocked ${quantityInput} ${itemName}(s) in the inventory.`; 
    }

    getInventorySummary(){
        let result = ["Current Inventory:"];

        for (const item of this.items) {
           result.push(`${item.title}: ${item.quantity}`) 
        }

        if(result.length == 1) {
            return '';
        }

        return `${result.join('\n')}\nOut of Stock: ${this.outOfStock.join(', ').trim()}`;
    }
}

//Test addItem
// const manager = new InventoryManager(2);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));

//Output
// Added 10 Drill(s) to the inventory.
// Added 5 Hammer(s) to the inventory.
// Uncaught Error Error: The inventory is already full.

//Test sellItem
// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3)); 
// console.log(manager.sellItem("Paintbrush", 2));

//Output
// Added 10 Drill(s) to the inventory.
// Added 5 Hammer(s) to the inventory.
// Added 3 Chisel(s) to the inventory.
// Sold 3 Drill(s) from the inventory.
// Uncaught Error Error: The item Paintbrush is not available in the inventory.

//test restock
// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3)); 
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));

// Added 10 Drill(s) to the inventory. 
// Added 5 Hammer(s) to the inventory. 
// Added 3 Chisel(s) to the inventory. 
// Sold 3 Drill(s) from the inventory. 
// Restocked 5 Drill(s) in the inventory. 
// Restocked 1 Paintbrush(s) in the inventory.


//test getInventorySummary
// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.sellItem("Hammer", 5)); 
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));
// console.log(manager.getInventorySummary());

//output
// Added 10 Drill(s) to the inventory.
// Added 5 Hammer(s) to the inventory.
// Added 3 Chisel(s) to the inventory.
// Sold 3 Drill(s) from the inventory.
// Sold 5 Hammer(s) from the inventory.
// Restocked 5 Drill(s) in the inventory.
// Restocked 1 Paintbrush(s) in the inventory.
// Current Inventory:
// Drill: 12
// Chisel: 3
// Paintbrush: 1
// Out of Stock: Hammer

//Testing getInventorySummary
// const myManager = new InventoryManager(3);

// console.log(myManager.addItem("Hammer", 10));
// console.log(myManager.sellItem("Hammer", 10));
// console.log(myManager.restockItem("Chisel", 5));
// console.log(myManager.restockItem("Drill", 1));
// console.log(myManager.getInventorySummary());


