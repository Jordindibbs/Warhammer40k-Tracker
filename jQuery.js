$(document).ready(() => {
    $(".obj-chart li").on("click", (event) => {
      $(event.currentTarget).addClass("active");
      $(".obj-chart").children().removeClass("disabled");
      $(event.currentTarget).siblings().removeClass("active");
    });
  })
  