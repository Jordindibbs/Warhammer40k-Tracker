$(document).ready(() => {
  /*Toggles score for primary Obj Player 1*/
  let theTotal = 0;
  let theTotal2 = 0;
  $(".button-prime").click(function () {
    if (theTotal < 45) {
      theTotal = Number(theTotal) + Number($(this).val());
      $("span.player1prime").text(theTotal);
      $(this).toggleClass("selected");
      $(this).attr("value", $(this).val() * -1);
      $("span.player1total").text(theTotal + theTotal2);
    } else if (theTotal >= 45) {
      theTotal = Number(theTotal) + Number($(this).val());
      $("span.player1prime").text(theTotal);
      $(this).attr("value", $(this).val() * -1);
      $("span.player1total").text(theTotal + theTotal2);
    }
  });

  $("span.player1prime").text(theTotal);

  /*Toggles score for seconday Obj Player 1*/

  $(".small_btn").click(function () {
    if (theTotal2 < 45) {
      theTotal2 = Number($(this).val());
      $("span.player1secondary").text(theTotal2);
      $(".small_btn").not(this).removeClass("selected");
      $(this).toggleClass("selected");
      $(this).attr("value", $(this).val() * 0);

      $("span.player1total").text(theTotal + theTotal2);
    }
  });

  $("span.player1secondary").text(theTotal2);

  /**/

  /*Toggles score for primary Obj Player 2*/

  let theTotal3 = 0;
  $(".button-prime2").click(function () {
    if (theTotal3 < 45) {
      theTotal3 = Number(theTotal3) + Number($(this).val());
      $("span.player2prime").text(theTotal3);
      $(this).toggleClass("selected");
      $(this).attr("value", $(this).val() * -1);
      $("span.player2total").text(theTotal3 + theTotal4);
    } else if (theTotal3 >= 45) {
      theTotal3 = Number(theTotal3) + Number($(this).val());
      $("span.player2prime").text(theTotal3);
      $(this).attr("value", $(this).val() * -1);
      $("span.player2total").text(theTotal3 + theTotal4);
    }
  });

  $("span.player2prime").text(theTotal3);

  /*Toggles score for seconday Obj Player 2*/
  let theTotal4 = 0;
  $(".small_btn2").click(function () {
    if (theTotal2 < 45) {
      theTotal4 = Number(theTotal4) + Number($(this).val());
      $("span.player2secondary").text(theTotal4);
      $(this).toggleClass("selected");
      $(this).attr("value", $(this).val() * -1);
      $("span.player2total").text(theTotal3 + theTotal4);
    }
  });

  $("span.player2secondary").text(theTotal2);
});
