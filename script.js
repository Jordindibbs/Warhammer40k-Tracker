$(document).ready(() => {
  /*Toggles score for primary Obj Player 1*/
  let theTotal = 0;
  $(".button-prime").click(function () {
    if (theTotal < 45) {
      theTotal = Number(theTotal) + Number($(this).val());
      $("span.player1prime").text(theTotal);
      $(this).toggleClass("selected");
      $(this).attr("value", $(this).val() * -1);
      $("span.player1total").text(theTotal + theTotal2 + theTotal3 + theTotal4);
    } else if (theTotal >= 45) {
      theTotal = Number(theTotal) + Number($(this).val());
      $("span.player1prime").text(theTotal);
      $(this).attr("value", $(this).val() * -1);
      $("span.player1total").text(theTotal + theTotal2 + theTotal3 + theTotal4);
    }
  });

  $("span.player1prime").text(theTotal);

  /*Toggles score for seconday Obj Player 1*/
  /*Player 1 Secondary 1 */
  let theTotal2 = 0;

  $(".player1secondary1").click(function () {
    theTotal2 = Number($(this).val());
    $("span.player1secondary").text(theTotal2 + theTotal3 + theTotal4);
    $(".player1secondary1").not(this).removeClass("selected");
    $(this).toggleClass("selected");
    $(this).attr("value", $(this).val() * 1);
    $("span.player1total").text(theTotal + theTotal2 + theTotal3 + theTotal4);
  });

  $("span.player1secondary").text(theTotal2);
  /*Player 1 Secondary 2 */
  let theTotal3 = 0;
  $(".player1secondary2").click(function () {
    theTotal3 = Number($(this).val());
    $("span.player1secondary").text(theTotal2 + theTotal3 + theTotal4);
    $(".player1secondary2").not(this).removeClass("selected");
    $(this).toggleClass("selected");
    $(this).attr("value", $(this).val() * 1);
    $("span.player1total").text(theTotal + theTotal2 + theTotal3 + theTotal4);
  });

  $("span.player1secondary").text(theTotal3);
  /*Player 1 Secondary 3 */
  let theTotal4 = 0;
  $(".player1secondary3").click(function () {
    theTotal4 = Number($(this).val());
    $("span.player1secondary").text(theTotal2 + theTotal3 + theTotal4);
    $(".player1secondary3").not(this).removeClass("selected");
    $(this).toggleClass("selected");
    $(this).attr("value", $(this).val() * 1);
    $("span.player1total").text(theTotal + theTotal2 + theTotal3 + theTotal4);
  });

  $("span.player1secondary").text(theTotal4);
  ///////////////////////////////////////////////////////////////////////////////////////////
  /*Toggles score for primary Obj Player 2*/

  let theTotal5 = 0;
  $(".button-prime2").click(function () {
    if (theTotal5 < 45) {
      theTotal5 = Number(theTotal5) + Number($(this).val());
      $("span.player2prime").text(theTotal5);
      $(this).toggleClass("selected");
      $(this).attr("value", $(this).val() * -1);
      $("span.player2total").text(
        theTotal5 + theTotal6 + theTotal7 + theTotal8
      );
    } else if (theTotal5 >= 45) {
      theTotal5 = Number(theTotal5) + Number($(this).val());
      $("span.player2prime").text(theTotal5);
      $(this).attr("value", $(this).val() * -1);
      $("span.player2total").text(
        theTotal5 + theTotal6 + theTotal7 + theTotal8
      );
    }
  });

  $("span.player2prime").text(theTotal5);

  /*Toggles score for seconday Obj Player 2*/
  /*Player 2 Secondary 1 */
  let theTotal6 = 0;

  $(".player2secondary1").click(function () {
    theTotal6 = Number($(this).val());
    $("span.player2secondary").text(theTotal6 + theTotal7 + theTotal8);
    $(".player2secondary1").not(this).removeClass("selected");
    $(this).toggleClass("selected");
    $(this).attr("value", $(this).val() * 1);
    $("span.player2total").text(theTotal5 + theTotal6 + theTotal7 + theTotal8);
  });
  $("span.player1secondary").text(theTotal6);
  /*Player 2 Secondary 2 */
  let theTotal7 = 0;
  $(".player2secondary2").click(function () {
    theTotal7 = Number($(this).val());
    $("span.player2secondary").text(theTotal6 + theTotal7 + theTotal8);
    $(".player2secondary2").not(this).removeClass("selected");
    $(this).toggleClass("selected");
    $(this).attr("value", $(this).val() * 1);
    $("span.player2total").text(theTotal5 + theTotal6 + theTotal7 + theTotal8);
  });

  $("span.player1secondary").text(theTotal7);
  /*Player 1 Secondary 3 */
  let theTotal8 = 0;
  $(".player2secondary3").click(function () {
    theTotal8 = Number($(this).val());
    $("span.player2secondary").text(theTotal6 + theTotal7 + theTotal8);
    $(".player2secondary3").not(this).removeClass("selected");
    $(this).toggleClass("selected");
    $(this).attr("value", $(this).val() * 1);
    $("span.player2total").text(theTotal5 + theTotal6 + theTotal7 + theTotal8);
  });

  $("span.player1secondary").text(theTotal8);
});
