// Accesibility JS fix for Restref

$('.page-header-hero-img').attr({
  "alt": "Background",
  "aria-hidden": "true"
});

$('.party-size-picker select').attr({
  "aria-label": "How many people?"
});

$('.time-picker select').attr({
  "aria-label": "Select an hour"
});

$('.timeslot.unavailable, .dtp-button.unavailable').attr({
  "aria-hidden": "true"
}).append('<span class="hide">No available</span>');


$('input[name="firstName"]').attr({
  "aria-label": "First name"
});

$('input[name="lastName"]').attr({
  "aria-label": "Last name"
});

$('select[name="countryId"]').attr({
  "aria-label": "Country code"
});

$('input[name="phoneNumber"]').attr({
  "aria-label": "Phone number"
});

$('input[name="phoneExtension"]').attr({
  "aria-label": "Phone extension"
});

$('select[name="phoneType"]').attr({
  "aria-label": "Phone type"
});

$('input[name="email"]').attr({
  "aria-label": "Email address"
});

$('textarea[name="specialRequests"]').attr({
  "aria-label": "Sepcial requests (optional)"
});
