function addItem() {
    //select input field and read its value
    const content = document.getElementById('newItemText').value;
    
    //create <li> element
    const liElement = document.createElement('li');
    //assign input value to element text content
    liElement.textContent = content;
     
    //create [Delete] anchor
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#'; 
    liElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);

    //select <ul> and append the new element
    const ulElement = document.getElementById(`items`);
    ulElement.appendChild(liElement);

    //select the input field and clear the contents (value)
    document.getElementById('newItemText').value = '';

    function onDelete(event) {
        //event <- свързва нли с евента, който се е случил на атрибута на елемента,
        //тоест натискането на бутона [delete]
        //target <- дава ни [delete] button-a като елемент.
        //parentElement <- връща ни parent-a на target-a(delete button-a)
        //remove() - премахва целия parent.
        event.target.parentElement.remove();
    }
}

