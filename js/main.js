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

    // Animate loading countdown.
    var load_frequency = 5000;
    var animate_frequency = 500;
    var animate_perc = 0;
    var $count_chart = $('.count-chart');
    var update_chart = function (percentage) {
      $count_chart.data('easyPieChart').update(percentage);
    };
    $('.count-chart').easyPieChart({
      scaleColor: false,
      trackColor: 'rgba(255,255,255,0.3)',
      barColor: '#E7F7F5',
      lineCap: 'butt',
      lineWidth: 10,
      size: 200,
      animate: {
        duration: 400,
        enabled: true
      }
    });
    $.doTimeout(animate_frequency, function () {
      animate_perc += Math.round(load_frequency / animate_frequency);
      if (animate_perc > 100) {
        animate_perc = 100;
      }
      update_chart(animate_perc);
      return true;
    });

    // Running count of active users @ Fish.
    var $count_wrapper = $('.hero span.count');
    var update_count = function () {
      animate_perc = 0;
      update_chart(0);
      $.get('http://www.beeanalytics.com.au/api/web/index.php/v1/fish-active', function (data) {
        $count_wrapper.html(data.count);
      });
    };
    // Update on load.
    update_count();
    // Poll every five seconds.
    $.doTimeout(load_frequency, function () {
      update_count();
      return true;
    });

  });
})(jQuery, mixpanel, ga);
