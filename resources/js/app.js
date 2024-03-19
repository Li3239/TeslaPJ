import './init-fullpage';

/* $(document).ready(function() {
$('#my-responsive-carousell').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});
 */

    document.addEventListener('DOMContentLoaded', function() {
        // Function to display the popup modal
        function openPopup() {
            var modal = document.getElementById("popupModal");
            if (modal) { // Kontrollera om modal existerar
                modal.style.display = "block";
    
                // Set the date for the countdown timer
                var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
    
                // Update the countdown timer every 1 second
                var x = setInterval(function() {
                    var now = new Date().getTime();
                    var distance = countDownDate - now;
    
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
                    document.getElementById("countdownTimer").innerHTML = days + "d " + hours + "h " +
                        minutes + "m " + seconds + "s ";
    
                    if (distance < 0) {
                        clearInterval(x);
                        document.getElementById("countdownTimer").innerHTML = "EXPIRED";
                    }
                }, 1000);
            }
        }
    
        // Function to close the popup modal
        function closePopup() {
            var modal = document.getElementById("popupModal");
            modal.style.display = "none";
        }
    
        // Function to check if the current page is the "Collections" page
        function isCollectionsPage() {
            return window.location.pathname === "/collections";
        }
    
        // Kontrollera om popupen redan har visats
        var popupDisplayed = sessionStorage.getItem('popupDisplayed');
        if (!popupDisplayed && isCollectionsPage()) {
            // Visa popupen om den inte har visats och användaren är på "Collections" sidan
            openPopup();
            // Ange sessionvariabeln för att indikera att popupen har visats
            sessionStorage.setItem('popupDisplayed', true);
        }
    
        // Event listener för att stänga popupen
        document.querySelector(".close").addEventListener("click", function() {
            closePopup();
        });
    
        // Event listener för att stänga popupen när användaren klickar utanför modalen
        window.addEventListener("click", function(event) {
            var modal = document.getElementById("popupModal");
            if (event.target == modal) {
                closePopup();
            }
        });
    
    });
    
