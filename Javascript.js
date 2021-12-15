
// Slideshow början
var slideIndex = 1;
showSlides(slideIndex);

// Nästa/förra funktion
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Bild visning
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Om n är större än slide längd ska slideindexet vara lika med 1
  if (n > slides.length) {slideIndex = 1}

  // om 1 är större än n ska slideindexet vara lika med slide längd
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  //Displayar för punkterna, och active är med för att bakgrund färgen ändras med den
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// Slideshow slut

//Dropdown
// När man klickar på knappen togglar den mellan att vara gömd till att visas
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Stänger när man klickar utanför
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}