
// Metro boxes
$('ul.location-boxes>li>a').each(function(index) {
  var this_alt = $(this).find('.location-box-text>h4').text();
  $(this).find('.location-box-image>img').attr("alt", this_alt);
});

// Set background for metro 
$('ul.location-boxes > li.location-box').css('background-color', '#333');

// Hide empty images
$('img.hide').attr({
  "alt": "hidden",
  "aria-hidden": "true"
});

//Header background image
$('#hero-img').attr({
  "alt": "Page background",
  "aria-hidden": "true"
});

//Hide images inside hidden empty div
$('div:hidden').find('img').attr({
  "alt": "hidden",
  "aria-hidden": "true"
});
// TODO: add better discription


//hamburger panel empty anchors
$('a[data-target="hamburger-pane"]').append('<span class="hide">Menu</span>').attr("role", "button")

//Fix header empty anchor
//$('a.top-bar-nav-link.js-toggle-hamburger ').append( '<span style="display:none;" aria-hidden="false">Menu</span>');

//fix for empty anchors
$('a:not([href])').attr({
  "aria-role": "button",
  "role": "button"
})

// Select person and time 
$('select').eq(0).attr({
  "aria-label": "persons"
});
$('select').eq(1).attr({
  "aria-label": "hour"
});

//Right banner missing alt
right_banner = $('#RightColumnElementContainer a img');
if (typeof right_banner.attr('alt') == typeof undefined || right_banner.attr('alt') === false) {
  right_banner.attr({
    "alt": "Advertising banner"
  });
}

// --- Search results or metro 

$('.rest-row.with-image').each(function(index) {
  var this_alt = $(this).find('.rest-name').text();
  $(this).find('.rest-row-image img:not([alt])').attr("alt", this_alt);
});

$('.socialproof-message img').attr({
  "alt": "Social proof message",
  "aria-hidden": "true"
});

$('.promo-card').each(function(index) {
  var this_alt = $(this).find('.promo-card-title a').text();
  $(this).find('.promo-card-image a>img').attr("alt", this_alt);
});

$('img.hide').attr({
  "aria-hidden": "true"
});

// ------------ Restaurant profile ------

$('.page-header-hero-wrapper img:not([alt]), img.rest-image:not([alt])').attr({
  "alt": "Restaurant picture",
  "aria-hidden": "true"
})

$('.diners-choice-img').attr({
  "alt": "Restaurant Diners choice top 10",
  "aria-hidden": "true"
})

// Pagination todo add hidden class to css
$('#pagination-trigger-link').append('<span class="hide">Pagination</span>');
$('.oc-pagination-link.pagination-prev').append('<span class="hide">Previous page</span>');
$('.oc-pagination-link.pagination-next').append('<span class="hide">Next page</span>');

// Social icons
$('.info-icon-twitter.icon-twitter').append('<span class="hide">Twitter</span>');
$('.info-icon-facebook.icon-facebook').append('<span class="hide">Facebook</span>');

// Add text to map background link
$('.map-expand-link .content-block-map-img').append('<span class="hide">View larger map</span>');

// Toggle menu
$('.js-toggle-menu').append('<span class="hide">Menu</span>');

//this is an empty h4 lets fix this bug 
$('#reservation > div > hgroup > h4:empty').remove();
// Remove ONLY if is empty 

$('.gift-button img.gift-image ').attr({
  "alt": "Give a Gift"
});

// Report review
$('#report-reason:not([aria-label]').attr('aria-label', 'Tell us why you find the review inappropriate.');

$('.map-overlay-close').append('<span class="hide">Close</span>');

// Scroller links
$('.grid-scroller-arrow-right').append('<span class="hide">Right</span>');
$('.grid-scroller-arrow-left').append('<span class="hide">Left</span>');


// analytics
$(document).ready(function() {
  setTimeout(function() {
    $('img[src*="bing"], img[src*="doubleclick"], img[src*="analytics"], img[src*="yieldoptimizer"], img[src*="mathtag"]' ).attr({
      "alt": "analytics",
      "aria-hidden": "true"
    });
    
    //$(document).on('injector.done', function() {}) add this
    $('.rest-row.with-image').each(function(index) {
      var this_alt = $(this).find('.rest-name').text();
      $(this).find('.rest-row-image img:not([alt])').attr("alt", this_alt);
    });
    
    console.log("Accesibility js ready");
  }, 2000);
});
