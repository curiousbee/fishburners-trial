(function ($, mixpanel) {
  $(document).ready(function () {
    // Track opt-out.
    $('a.opt-out').click(function (event) {
      mixpanel.track('Opted out of Fishburners trial');
    });

    // Track subscribe.
    $('#mc-embedded-subscribe').click(function (event) {
      mixpanel.track('Subscribed to Fishburners trial info')
    });

    // Track scrolls.
    new MixpanelScrollTracker({
      attribute: 'section',
      event: 'Scrolled to Fishburners trial info on',
      markers: [
        { position: 500, value: "What's going on?" },
        { position: 700, value: "How does it work?" },
        { position: 900, value: "Tell me more" }
      ]
    });
  });
})(jQuery, mixpanel);
