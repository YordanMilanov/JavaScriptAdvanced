function validate() {
    //select input field
    //add change event listener
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(ev) {
        //onChange -> validate input
       const email = ev.target.value;
       const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
       //regex.test(email) <- tests if the parameter matches the regex
      if(regex.test(email)) {
        //if valid -> remove class error
        ev.target.className = '';
      } else {
        //if invalid -> add class error
        ev.target.className = 'error';
      }
    }
}