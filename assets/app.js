document.addEventListener("DOMContentLoaded", function() {
  function openPopup() {
    var modal = document.getElementById("popupModal");
    if (modal) {
      modal.style.display = "block";
      var countDownDate = (/* @__PURE__ */ new Date("Jan 5, 2030 15:37:25")).getTime();
      var x = setInterval(function() {
        var now = (/* @__PURE__ */ new Date()).getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1e3 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
        var minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
        var seconds = Math.floor(distance % (1e3 * 60) / 1e3);
        document.getElementById("countdownTimer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdownTimer").innerHTML = "EXPIRED";
        }
      }, 1e3);
    }
  }
  function closePopup() {
    var modal = document.getElementById("popupModal");
    modal.style.display = "none";
  }
  function isCollectionsPage() {
    return window.location.pathname === "/collections";
  }
  var popupDisplayed = sessionStorage.getItem("popupDisplayed");
  if (!popupDisplayed && isCollectionsPage()) {
    openPopup();
    sessionStorage.setItem("popupDisplayed", true);
  }
  document.querySelector(".close").addEventListener("click", function() {
    closePopup();
  });
  window.addEventListener("click", function(event) {
    var modal = document.getElementById("popupModal");
    if (event.target == modal) {
      closePopup();
    }
  });
});
