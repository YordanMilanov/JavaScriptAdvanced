function solve (input) {
let HeroesArray = [];
    for (const iterator of input) {
        let [name, level, items] = iterator.split(` / `);
        
        level = Number(level);
        items = items ? items.split(`, `) : [];

        HeroesArray.push({name, level, items});
    }

    console.log(JSON.stringify(HeroesArray));
};