function solve() {
    const nameInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');
    const list = document.getElementById('list');

    //1. create mail process
    //add listener to add to list button
    //add listener to reset button
    document.getElementById('add').addEventListener('click', createMail); // this is the add button
    document.getElementById('reset').addEventListener('click', onReset);

    // - read input fields
    // - validate all fields are entered
    // - create mail element
    // - add event listener to send button
    // - add event listener to delete button
    // - clear input fields if created

    function createMail(event) {
        event.preventDefault();
        const name = nameInput.value;
        const title = titleInput.value;
        const message = messageInput.value;

        //take the values from the input fields


        //check if there is any empty
        if(name == '' || title == '' || message == '') {
            return;
        }

        const element = document.createElement('li');
        element.innerHTML = `<h4>Title: ${title}</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`
        //if everything is filled then add the message to the message element
        list.appendChild(element);

        //after successful adding reset the input fields
        resetInput();
    }

    //2. send mail process
    // - read data from closure
    // - create

    function resetInput() {
        nameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }

    function onReset(event) {
        event.preventDefault();
        resetInput();
    }
}
solve()