function Hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  // Add this function to close the navbar when the user clicks outside of it
  function closeNav(e) {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block" && !e.target.matches('.icon')) {
      x.style.display = "none";
    }
  }
  
  // Add this event listener to the document
  document.addEventListener('click', closeNav);
  