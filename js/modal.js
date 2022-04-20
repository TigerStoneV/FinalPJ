function Action_Slide(index) {
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById(`myBtn${index}`);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    //BackGround Body Tag Overflow hidden because auto is not pretty
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  };
}
