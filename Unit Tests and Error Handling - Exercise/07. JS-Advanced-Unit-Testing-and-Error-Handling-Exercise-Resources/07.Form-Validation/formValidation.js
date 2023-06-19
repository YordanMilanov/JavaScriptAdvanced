function validate() {

    //TODO
    
    //patterns
    // const wordPattern = /

    // dictionaries
    const html = {
        companyCheck: document.getElementById("company"),
        submit: document.getElementById("submit"),
        validDiv: document.getElementById("valid"),
        companyInfo: document.getElementById("companyInfo"),
    }

    const inputFields = {
        username: document.getElementById("username"),
        email: document.getElementById("email"),
        password: document.getElementById("password"),
        confirmPassword: document.getElementById("confirm-password"),
        companyNumber: document.getElementById("companyNumber"),
    }

    // helper functions
    const checkLength = (inputValue,lowerLen,greaterLen) => inputValue.length >= lowerLen && inputValue.length <= greaterLen;
    
    const checkPassword = (inputValue,minLength,maxLength,form) => 
    checkLength(inputValue, minLength, maxLength) && 
    wordPattern.test(inputValue) && 
    inputValue === inputFields[form].value;

    const validate = {
        username: (inputValue) => checkLength(inputValue, 3, 20),
        password: (inputValue) => checkPassword(inputValue, 5, 15, "confirmPassword"),
        confirmPassword: (inputValue) => checkPassword(inputValue, 5, 15, "password"),
        email: (inputValue) => /^.*2.*\..*$/g.test(inputValue),
        companyNumber: (inputValue, isChecked) => isChecked ? inputValue >= 1000 && inputValue <= 9999 : true, 
    };

    const changeBorder = (isChecked, element) => {
        const style = isChecked ? "border: none" : "border-color: red";
        element.style = style;
    }

    //attach event listeners
    html.companyCheck.addEventListener("change", onChange)
    html.companyCheck.addEventListener("click", onClick)

    //callbacks
    function onChange(e) {
        const displayStyle = e.target.checked ? "block" : "none";
        html.companyInfo.style.display = displayStyle;
    }
    
    function onClick(e) {

        e.preventDefault();

        const isChecked = html.companyInfo.checked;
        let oneInvalid = false;

        Object.entries(inputFields).forEach(([name, valueField]) => {
            const valid = validate[name](valueField.value, isChecked);
            changeBorder(valid, inputFields[name]);

            if(!Valid) {
                oneInvalid = true;
            }
        });

        const displayStyled = oneInvalid ? "name" : "block";
        html.validDiv.style.display = displayStyled;
    }
}
