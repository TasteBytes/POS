//Count up timer which displays seconds

$(function() {
    var timer = null,
        interval = 1000,
        value = 0;

    $("#start").click(function() {
      if (timer !== null) return;
      timer = setInterval(function () {
          $("#input").val(++value);
      }, interval);
    });

    $("#stop").click(function() {
      clearInterval(timer);
      timer = null
    });
});
