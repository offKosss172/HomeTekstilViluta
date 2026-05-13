const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyHn15k1CT0Q2h06FJqDmBxZ3NjlPxZZveTKbsXKln83W_FI4F6glDZ5PQSNz8Lp_D0Ag/exec';

function trackEvent(eventName) {
  fetch(`${SCRIPT_URL}?event=${eventName}`)
    .catch(error => console.log(error));
}

document.addEventListener('DOMContentLoaded', () => {

  trackEvent('visit');

  document.querySelectorAll('[data-track]').forEach(link => {
    link.addEventListener('click', function () {
      trackEvent(this.dataset.track);
    });
  });

});