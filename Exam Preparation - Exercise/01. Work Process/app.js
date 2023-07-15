function solve() {
    //the input fields
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const birth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');

    //body of the table
    const tbody = document.getElementById('tbody');

    //sum of the salaries
    const currentBudgetElement = document.getElementById('sum');

    document.getElementById('add-worker').addEventListener('click', (e) => {
        e.preventDefault();

        if(fname.value && lname.value && email.value && birth.value && position.value &&salary.value) {
              //we create the tr element to which we will add all the input fields as td elements  
            const tr = createElement('tr')

            //creating all td elements and setting them their values and at the last argument we set the parent element (tr)
                createElement('td', `${fname.value}`, tr);
                createElement('td', `${lname.value}`, tr);
                createElement('td', `${email.value}`, tr);
                createElement('td', `${birth.value}`, tr);
                createElement('td', `${position.value}`, tr);
                createElement('td', `${salary.value}`, tr);

                //creating td element to which we will add the two buttons
                const td = createElement('td', '', tr);

                //creating the fire button and setting its class to fired
                let fireBtn = createElement('button', 'Fired', td);
                fireBtn.setAttribute('class', 'fired')

                //creating the edit button and setting its class to edit
                let editBtn = createElement('button', 'Edit', td);
                editBtn.setAttribute(`class`, `edit`);

                //adding the whole created tr (table row) to the tbody element (adding it to the DOM)
                tbody.appendChild(tr);


                //now adding the salary to the budget
                //addSalary is the budget element
                const currentBudgetSum = Number(currentBudgetElement.textContent);
                currentBudgetElement.textContent = (Number(currentBudgetSum) + Number(salary.value)).toFixed(2);

                editBtn.addEventListener('click', (e) => {
                    //here we prevent the default behavior of the edit button because it is form
                    e.preventDefault();

                    //here we take the parent of the parent of the e.target(which is the edit button which triggered the event)
                    const currentTr = e.target.parentNode.parentNode;

                    //take the elements of the table row
                    const firstNameElement = currentTr.querySelector('td:nth-child(1)');
                    const secondNameElement = currentTr.querySelector('td:nth-child(2)');
                    const emailElement = currentTr.querySelector('td:nth-child(3)');
                    const birthElement = currentTr.querySelector('td:nth-child(4)');
                    const positionElement = currentTr.querySelector('td:nth-child(5)');
                    const salaryElement = currentTr.querySelector('td:nth-child(6)');

                    //set the input fields values from the table fields
                    fname.value = firstNameElement.textContent;
                    lname.value = secondNameElement.textContent;
                    email.value = emailElement.textContent;
                    birth.value = birthElement.textContent;
                    position.value = positionElement.textContent;
                    salary.value = salaryElement.textContent;

                    //subtract the current worker salary form the budget
                    currentBudgetElement.textContent = (Number(currentBudgetElement.textContent) - Number(salaryElement.textContent)).toFixed(2);

                    //delete the current row
                    currentTr.remove();
                })

                fireBtn.addEventListener('click', (e) => {
                    //here we prevent the default behavior of the edit button because it is form
                    e.preventDefault();

                    //here we take the parent of the parent of the e.target(which is the edit button which triggered the event)
                    const currentTr = e.target.parentNode.parentNode;

                    //take the salaryElement of the current worker
                    const salaryElement = currentTr.querySelector('td:nth-child(6)');

                     //subtract the current worker salary form the budget
                     currentBudgetElement.textContent = (Number(currentBudgetElement.textContent) - Number(salaryElement.textContent)).toFixed(2);

                     //delete the row
                    currentTr.remove();
                })

                //clear the fields after successful adding;
                clearInputFields();
            }

      
    })

    function clearInputFields() {
        fname.value = '';
        lname.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';
    }

    function createElement(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;
        if(parent) {
            parent.appendChild(element);
        }
        return element;
    }
}
solve()