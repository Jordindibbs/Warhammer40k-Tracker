/*
let buttonToggle = {
  let buttons = $("button");
  buttons.click(function () {
    buttons.css("background-color", "#d6dbe2");
    $(this).css("background-color", "#466995");
  })
}
*/

var total = 0;
$("radio[name=button1],[name=button2],[name=button3]").on("click", function () {
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
});

/*
const buttons = document.getElementById("button1");
let player1Score = 0;
function updateNumber() {}
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    player1Score += 15;
    $("#costs").val(player1Score);
  }
});
*/
