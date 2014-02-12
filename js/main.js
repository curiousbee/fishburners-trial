(function ($, mixpanel, _gaq) {
  var active_timer;

  $(document).ready(function () {
    // Track opt-out.
    $('a.opt-out').click(function (event) {
      _gaq.push(['_trackEvent', 'Fishburners Trial', 'Opted out', 'Fishburners Trial']);
      mixpanel.track('Opted out of Fishburners trial');
    });

    // Track subscribe.
    $('#mc-embedded-subscribe').click(function (event) {
      _gaq.push(['_trackEvent', 'Newsletter', 'Subscribed', 'Fishburners Trial Newsletter']);
      mixpanel.track('Subscribed to Fishburners trial info')
    });

    // Running count of active users @ Fish.
    $.doTimeout(5000, function () {
      $.get('http://www.beeanalytics.com.au/api/web/index.php/v1/fish-active', function (data) {
        console.log("hola datevid");
        console.log(data);
      });

      // Poll every five seconds.
      return true;
    });

  });
})(jQuery, mixpanel, _gaq);
