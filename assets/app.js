var colors = ["black", "white", "white", "black", "white"];
document.addEventListener("DOMContentLoaded", function() {
  var screenWidthThreshold = 750;
  if (window.innerWidth > screenWidthThreshold) {
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
      scrollOverflow: true,
      // important!!! suitable for section which is higher then screen height
      autoHeight: true,
      // Suitable for sections with different height
      scrollingSpeed: 1e3,
      keyboardScrolling: true,
      // fixedElements: 'body.index_cover.header-wrapper, body.index_cover.announcement-bar-section',
      onLeave: function(origin, destination, direction) {
        console.log(`Leaving section ${origin.index + 1} height = ${origin.item.offsetHeight}, heading ${direction} to section ${destination.index + 1}  height = ${destination.item.offsetHeight}`);
        setHeaderColors(colors[destination.index]);
      },
      afterRender: function() {
        console.log("fullPage.js has rendered the page");
      },
      afterResize: function(width, height) {
      }
    });
  }
});
document.addEventListener("click", function(event) {
  var megaMenu = document.querySelector("body.index_cover sticky-header");
  var isOpen = megaMenu.classList.contains("menu-background-white");
  var headerItems = document.querySelectorAll("body.index_cover .header__menu-item");
  var targetInMegaMenu = Array.from(headerItems).some(function(item) {
    return item.contains(event.target);
  });
  var currentSectionIndex = fullpage_api.getActiveSection().index();
  if (targetInMegaMenu) {
    if (isOpen) {
      console.log(`now reset color to color=${colors[currentSectionIndex]}`);
      setHeaderColors(colors[currentSectionIndex]);
    } else {
      console.log(`set color to color=black`);
      setHeaderColors("black");
    }
  } else {
    console.log(`check in else : isOpen=${isOpen}`);
    if (!isOpen) {
      console.log(`[not in megamenu]now reset color to color=${colors[currentSectionIndex]}`);
      setHeaderColors(colors[currentSectionIndex]);
    }
  }
});
function setHeaderColors(color) {
  var logo = document.querySelector(".header__heading-logo-wrapper img");
  if (logo) {
    logo.style.color = color;
    if (color === "white") {
      logo.src = "//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_2.png?v=1711091451&width=600";
      logo.srcset = "//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_2.png?v=1711091451&width=90 90w,//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_2.png?v=1711091451&width=135 135w,//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_2.png?v=1711091451&width=135 180w";
    } else {
      logo.src = "//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_crop.png?v=1710930827&width=600";
      logo.srcset = "//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_crop.png?v=1710930827&width=90 90w,//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_crop.png?v=1710930827&width=135 135w, //cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_crop.png?v=1710930827&width=180 180w";
    }
  }
  var header_heading_spans = document.querySelectorAll(".header__inline-menu .list-menu .header__menu-item span");
  header_heading_spans.forEach(function(span) {
    span.style.color = color;
  });
  var header_heading_svgs = document.querySelectorAll(".header__inline-menu .list-menu .header__menu-item svg");
  header_heading_svgs.forEach(function(svg) {
    svg.style.color = color;
  });
  var locationSpan = document.querySelector(".header__icons .disclosure__button span");
  if (locationSpan) {
    locationSpan.style.color = color;
  }
  var locationSvg = document.querySelector(".header__icons .disclosure__button svg");
  if (locationSvg) {
    locationSvg.style.color = color;
  }
  var iconSearch = document.querySelector(".header__icons .header__search svg");
  if (iconSearch) {
    iconSearch.style.color = color;
  }
  var iconQuestion = document.querySelector(".header__icons .header__icon--question svg");
  if (iconQuestion) {
    iconQuestion.style.color = color;
  }
  var worldQuestion = document.querySelector(".header__icons .header__icon--world svg");
  if (worldQuestion) {
    worldQuestion.style.color = color;
  }
  var accountQuestion = document.querySelector(".header__icons .header__icon--account svg");
  if (accountQuestion) {
    accountQuestion.style.color = color;
  }
}
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
