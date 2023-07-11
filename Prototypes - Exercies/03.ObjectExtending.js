function extensibleObject() {
    const obj = {
        extend: function(template) {

            //with Object.keys(template) we take the keys of the template Object
            //parentProp represents the current key
            for (const parentProp of Object.keys(template)) {

                //here we take the template element (key:value pair) by using the parentProp(which represents the key(name) of the property)
                //template[parentProp] - return the whole property
                const templateElement = template[parentProp];

                //here we check if the property is function we assign it to the prototype of the object
                if(typeof templateElement === "function") {
                    const prototypeOf = Object.getPrototypeOf(obj)[parentProp] = templateElement;
                } 
                else {
                    obj[parentProp] = templateElement;
                }
            }
        },
    };

    return obj;
    }
    const myObj = extensibleObject();

    const template = {
        extensionMethod: function () {},
        extensionProperty: "someString",
    };

    myObj.extend(template);
    console.log(myObj);
    