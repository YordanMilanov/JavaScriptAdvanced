function deleteByEmail() {
    //select input field and read value
     const value = document.querySelector('input[name="email"]').value;
     console.log('deleting', value)

    //repeat for every table row
    const rows = document.querySelectorAll('tbody tr');

    // -- select second column
    // -- compare text content with input value
    // -- if they are equal - remove current row
    let found = false;
    for(let row of rows) {
        if(row.children[1].textContent == value) {
            const parent = row.parentElement;
            parent.removeChild(row);
            found = true;
        }
    }

    // display result
    if(found){
        document.getElementById('result').textContent = "Deleted.";
    } else {
        document.getElementById('result').textContent = "Not found.";
    }
}