document.addEventListener('DOMContentLoaded', function() {
    // get all elements
    var elements = document.querySelectorAll('.shopify-section');

    // for fullpage.js, 1)parent div id=fullpage, 2)children div class=section is needed
    elements.forEach(function(el) {
        // check if element el's id includes '__video_banner_', and not includs class name 'section'
        if (el.id.includes('__video_banner_') && !el.classList.contains('section')) {
            // add 'section' class in the target elememt
            el.classList.add('section');
        }
    });

    new fullpage('#fullpage', {
        licenseKey: 'gplv3-license',
        fitToSection: true,
        autoScrolling: true,
        scrollOverflow: false,
        scrollingSpeed: 1000,

        onLeave: function(origin, destination, direction) {
            var colors = ['black', 'white', 'black', 'black', 'white'];

            var header_heading = document.querySelector('.header__heading-link .h2');
            if(header_heading) { 
                header_heading.style.color = colors[destination.index];
            }

            var header_heading_spans = document.querySelectorAll('.header__inline-menu .list-menu .header__menu-item span');
            header_heading_spans.forEach(function(span) {
                span.style.color = colors[destination.index];
            });

            var header_heading_svgs = document.querySelectorAll('.header__inline-menu .list-menu .header__menu-item svg');
            header_heading_svgs.forEach(function(svg) {
                svg.style.color = colors[destination.index];
            });

            var locationSpan = document.querySelector('.header__icons .disclosure__button span');
            if(locationSpan) { 
                locationSpan.style.color = colors[destination.index];
            }

            var locationSvg = document.querySelector('.header__icons .disclosure__button svg');
            if(locationSvg) { 
                locationSvg.style.color = colors[destination.index];
            }

            var iconSearch = document.querySelector('.header__icons .header__search svg');
            if(iconSearch) { 
                iconSearch.style.color = colors[destination.index];
            }

        },

        afterRender: function() {
            console.log('fullPage.js has rendered the page');
        },

        afterResize: function(width, height) {
        }
    });
});
