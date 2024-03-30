// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("navbar").style.backgroundColor = "#695fff";
//   } else {
//     document.getElementById("navbar").style.backgroundColor = "4c00ff";
//   }
// }
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "#0266fd";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#4c00ff";
  }
}

// Add an event listener for when the page is loaded to set the initial color
window.addEventListener('DOMContentLoaded', function() {
  if (document.body.scrollTop <= 50 && document.documentElement.scrollTop <= 50) {
    document.getElementById("navbar").style.backgroundColor = "#4c00ff";
  }
});

