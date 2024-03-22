document.addEventListener('DOMContentLoaded', function() {

    // set minimum screen size to run fullpage.js function
    var screenWidthThreshold = 750;

    if (window.innerWidth > screenWidthThreshold) {
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
            scrollOverflow: true, // important!!! suitable for section which is higher then screen height
            autoHeight: true,     // Suitable for sections with different height
            scrollingSpeed: 1000,
            keyboardScrolling: true,
            // fixedElements: 'body.index_cover.header-wrapper, body.index_cover.announcement-bar-section',
    
            onLeave: function(origin, destination, direction) {
                console.log(`Leaving section ${origin.index + 1} height = ${origin.item.offsetHeight}, heading ${direction} to section ${destination.index + 1}  height = ${destination.item.offsetHeight}`);
                // set color array
                var colors = ['black', 'white', 'white', 'black', 'white'];

                // Logo
                var logo = document.querySelector('.header__heading-logo-wrapper img');
                if(logo) { 
                    logo.style.color = colors[destination.index];
                    if(colors[destination.index] === 'white') {
                        logo.src = "//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_2.png?v=1711091451&width=600";
                        logo.srcset = "//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_2.png?v=1711091451&width=90 90w,//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_2.png?v=1711091451&width=135 135w,//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_2.png?v=1711091451&width=135 180w";
                    } else {
                        logo.src = "//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_crop.png?v=1710930827&width=600";
                        logo.srcset = "//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_crop.png?v=1710930827&width=90 90w,//cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_crop.png?v=1710930827&width=135 135w, //cdn.shopify.com/s/files/1/0694/2647/9340/files/SherpaAdventure_crop.png?v=1710930827&width=180 180w";
                    }
                }
    
                // header menu texter: news, outlet, Men, women....
                var header_heading_spans = document.querySelectorAll('.header__inline-menu .list-menu .header__menu-item span');
                header_heading_spans.forEach(function(span) {
                    span.style.color = colors[destination.index];
                });
                
                // The down arrow to the right of the menu text
                var header_heading_svgs = document.querySelectorAll('.header__inline-menu .list-menu .header__menu-item svg');
                header_heading_svgs.forEach(function(svg) {
                    svg.style.color = colors[destination.index];
                });
    
                // sweden sek
                var locationSpan = document.querySelector('.header__icons .disclosure__button span');
                if(locationSpan) { 
                    locationSpan.style.color = colors[destination.index];
                }
    
                // The down arrow to the right of the text "sweden sek"
                var locationSvg = document.querySelector('.header__icons .disclosure__button svg');
                if(locationSvg) { 
                    locationSvg.style.color = colors[destination.index];
                }
    
                // search icon on the right top menu
                var iconSearch = document.querySelector('.header__icons .header__search svg');
                if(iconSearch) { 
                    iconSearch.style.color = colors[destination.index];
                }

                // question icon on the right top menu
                var iconQuestion = document.querySelector('.header__icons .header__icon--question svg');
                if(iconQuestion) { 
                    iconQuestion.style.color = colors[destination.index];
                }

                // world icon on the right top menu
                var worldQuestion = document.querySelector('.header__icons .header__icon--world svg');
                if(worldQuestion) { 
                    worldQuestion.style.color = colors[destination.index];
                }

                // account icon on the right top menu
                var accountQuestion = document.querySelector('.header__icons .header__icon--account svg');
                if(accountQuestion) { 
                    accountQuestion.style.color = colors[destination.index];
                }
            },
    
            afterRender: function() {
                console.log('fullPage.js has rendered the page');
            },
            
            afterResize: function(width, height) {
            }
        });

    } else {
        // when screen is less then 750 do nothing
    }

});
// document.addEventListener('DOMContentLoaded', function() {
//     // get all elements
//     var elements = document.querySelectorAll('.shopify-section');

//     // for fullpage.js, 1)parent div id=fullpage, 2)children div class=section is needed
//     elements.forEach(function(el) {
//         // check if element el's id includes '__video_banner_', and not includs class name 'section'
//         if (el.id.includes('__video_banner_') && !el.classList.contains('section')) {
//             // add 'section' class in the target elememt
//             el.classList.add('section');
//         }
//     });

//     new fullpage('#fullpage', {
//         licenseKey: 'gplv3-license',
//         fitToSection: true,
//         autoScrolling: true,
//         scrollOverflow: true, // suitable for section which is higher then screen height
//         autoHeight: true,     // Suitable for sections with different height
//         scrollingSpeed: 1000,
//         keyboardScrolling: true,
//         // fixedElements: 'body.index_cover.header-wrapper, body.index_cover.announcement-bar-section',

//         onLeave: function(origin, destination, direction) {
//             console.log(`Leaving section ${origin.index + 1} height = ${origin.item.offsetHeight}, heading ${direction} to section ${destination.index + 1}  height = ${destination.item.offsetHeight}`);

//             var colors = ['black', 'white', 'black', 'black', 'white'];

//             var header_heading = document.querySelector('.header__heading-link .h2');
//             if(header_heading) { 
//                 header_heading.style.color = colors[destination.index];
//             }

//             var header_heading_spans = document.querySelectorAll('.header__inline-menu .list-menu .header__menu-item span');
//             header_heading_spans.forEach(function(span) {
//                 span.style.color = colors[destination.index];
//             });

//             var header_heading_svgs = document.querySelectorAll('.header__inline-menu .list-menu .header__menu-item svg');
//             header_heading_svgs.forEach(function(svg) {
//                 svg.style.color = colors[destination.index];
//             });

//             var locationSpan = document.querySelector('.header__icons .disclosure__button span');
//             if(locationSpan) { 
//                 locationSpan.style.color = colors[destination.index];
//             }

//             var locationSvg = document.querySelector('.header__icons .disclosure__button svg');
//             if(locationSvg) { 
//                 locationSvg.style.color = colors[destination.index];
//             }

//             var iconSearch = document.querySelector('.header__icons .header__search svg');
//             if(iconSearch) { 
//                 iconSearch.style.color = colors[destination.index];
//             }
//         },

//         afterRender: function() {
//             console.log('fullPage.js has rendered the page');
//         },
        
//         afterResize: function(width, height) {
//         }
//     });
// });
