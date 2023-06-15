function notify(message) {
  //capture the elements
  const notificationDiv = document.getElementById("notification");
  notificationDiv.textContent = message;
  notificationDiv.style.display = "block";

  notificationDiv.addEventListener('click', onClick);

  //click handler
  function onClick() {
    notificationDiv.style.display = "none";
  }
}