(function ($, mixpanel, ga) {
  var active_timer;

  $(document).ready(function () {
    // Track opt-out.
    $('a.opt-out').click(function (event) {
      ga.push(['_trackEvent', 'Fishburners Trial', 'Opted out', 'Fishburners Trial']);
      mixpanel.track('Opted out of Fishburners trial');
    });

    // Track subscribe.
    $('#mc-embedded-subscribe').click(function (event) {
      ga.push(['_trackEvent', 'Newsletter', 'Subscribed', 'Fishburners Trial Newsletter']);
      mixpanel.track('Subscribed to Fishburners trial info')
    });

    // Running count of active users @ Fish.
    var $count_wrapper = $('.hero span.count');
    var update_count = function () {
      $.get('http://www.beeanalytics.com.au/api/web/index.php/v1/fish-active', function (data) {
        $count_wrapper.html(data.count);
      });
    };
    // Update on load.
    update_count();
    // Poll every five seconds.
    $.doTimeout(5000, function () {
      update_count();
      return true;
    });

  });
})(jQuery, mixpanel, ga);
