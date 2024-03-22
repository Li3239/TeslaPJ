// initialize menu item colors 
var colors = ['black', 'white', 'white', 'black', 'white'];

/*
**  Initialize fullpage.js function
*/
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
                // set texter, Logo, icons color for menu
                setHeaderColors(colors[destination.index]);
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

/*
** change Megamenu elements(texter, Logo, icons) color
** 1. megamenu is opened : because the menu background color is white 
**                         need to set menu elements color to be black(specially for element with white color)
** 2. megamenu is closed : reset the menu elements to their proper colors 
**                        (obtained from the currently active section in fullpage)
*/
document.addEventListener('click', function(event) {
    // mega menu
    var megaMenu = document.querySelector('body.index_cover sticky-header');
    var isOpen = megaMenu.classList.contains('menu-background-white');

    // elements which can open mega drop down menu content
    var headerItems = document.querySelectorAll('body.index_cover .header__menu-item');
    var targetInMegaMenu = Array.from(headerItems).some(function(item) {
        return item.contains(event.target);
    });

    // get fullpage current section index for resetting active color
    var currentSectionIndex = fullpage_api.getActiveSection().index();

    // console.log(`=================================`);
    // console.log(`current scroll section index = ${currentSectionIndex}, color=${colors[currentSectionIndex]}`);
    // console.log(`Is target in mega menu? = ${targetInMegaMenu}`);
    // console.log(`isOpen=${isOpen}`);
    
    if (targetInMegaMenu) {
        if (isOpen) {
            // clicked outside of menu/mega menu
            // set back the color of the active fullpage section
            console.log(`now reset color to color=${colors[currentSectionIndex]}`);
            setHeaderColors(colors[currentSectionIndex]);
        } else {
            console.log(`set color to color=black`);
            // Mega menu will be shown
            setHeaderColors('black');
        }
    } else {
        console.log(`check in else : isOpen=${isOpen}`);
        if (!isOpen) {
            // clicked outside of menu/mega menu
            // set back the color of the active fullpage section
            console.log(`[not in megamenu]now reset color to color=${colors[currentSectionIndex]}`);
            setHeaderColors(colors[currentSectionIndex]);
        }
    }
});

/*
** set color for menu item
**  texter, Logo, icons
** @param: color
*/
function setHeaderColors(color) {
    // Logo
    var logo = document.querySelector('.header__heading-logo-wrapper img');
    if(logo) { 
        logo.style.color = color;
        if(color === 'white') {
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
        span.style.color = color;
    });

    // The down arrow to the right of the menu text
    var header_heading_svgs = document.querySelectorAll('.header__inline-menu .list-menu .header__menu-item svg');
    header_heading_svgs.forEach(function(svg) {
        svg.style.color = color;
    });

    // sweden sek
    var locationSpan = document.querySelector('.header__icons .disclosure__button span');
    if(locationSpan) { 
        locationSpan.style.color = color;
    }

    // The down arrow to the right of the text "sweden sek"
    var locationSvg = document.querySelector('.header__icons .disclosure__button svg');
    if(locationSvg) { 
        locationSvg.style.color = color;
    }

    // search icon on the right top menu
    var iconSearch = document.querySelector('.header__icons .header__search svg');
    if(iconSearch) { 
        iconSearch.style.color = color;
    }

    // question icon on the right top menu
    var iconQuestion = document.querySelector('.header__icons .header__icon--question svg');
    if(iconQuestion) { 
        iconQuestion.style.color = color;
    }

    // world icon on the right top menu
    var worldQuestion = document.querySelector('.header__icons .header__icon--world svg');
    if(worldQuestion) { 
        worldQuestion.style.color = color;
    }

    // account icon on the right top menu
    var accountQuestion = document.querySelector('.header__icons .header__icon--account svg');
    if(accountQuestion) { 
        accountQuestion.style.color = color;
    }
}