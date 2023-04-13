$document.ready(function () {
  var total = 0;
  $("button[name=button1],[name=button2],[name=button3]").on(
    "click",
    function () {
      var self = $(this);
      var gValue = Number(self.val());
      if (self.hasClass("add")) {
        total += gValue;
        self.removeClass("add").addClass("sub");
      } else {
        total -= gValue;
        self.removeClass("sub").addClass("add");
      }

      $("#costs").val(total);
    }
  );
});
