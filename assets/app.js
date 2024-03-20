document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll(".shopify-section");
  elements.forEach(function(el) {
    if (el.id.includes("__video_banner_") && !el.classList.contains("section")) {
      el.classList.add("section");
    }
  });
  new fullpage("#fullpage", {
    licenseKey: "gplv3-license",
    fitToSection: true,
    autoScrolling: true,
    scrollOverflow: false,
    scrollingSpeed: 1e3,
    onLeave: function(origin, destination, direction) {
      var colors = ["black", "white", "black", "black", "white"];
      var header_heading = document.querySelector(".header__heading-link .h2");
      if (header_heading) {
        header_heading.style.color = colors[destination.index];
      }
      var header_heading_spans = document.querySelectorAll(".header__inline-menu .list-menu .header__menu-item span");
      header_heading_spans.forEach(function(span) {
        span.style.color = colors[destination.index];
      });
      var header_heading_svgs = document.querySelectorAll(".header__inline-menu .list-menu .header__menu-item svg");
      header_heading_svgs.forEach(function(svg) {
        svg.style.color = colors[destination.index];
      });
      var locationSpan = document.querySelector(".header__icons .disclosure__button span");
      if (locationSpan) {
        locationSpan.style.color = colors[destination.index];
      }
      var locationSvg = document.querySelector(".header__icons .disclosure__button svg");
      if (locationSvg) {
        locationSvg.style.color = colors[destination.index];
      }
      var iconSearch = document.querySelector(".header__icons .header__search svg");
      if (iconSearch) {
        iconSearch.style.color = colors[destination.index];
      }
    },
    afterRender: function() {
      console.log("fullPage.js has rendered the page");
    },
    afterResize: function(width, height) {
    }
  });
});
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
