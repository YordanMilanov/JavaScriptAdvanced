function validate() {
    //capture events
    const emailInput = document.getElementById("email");
   
    //attach events
    emailInput.addEventListener('change', onChange)

    //callbacks
    function onChange(e) {

        const { target } = e;

        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        const operation = pattern.test(target.value) ? 'remove' : 'add'
        target.classList[operation]("error");
        target.classList.remove();
    }
}