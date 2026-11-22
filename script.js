$(document).ready(function () {
  $("#suggest").on("submit", function (e) {
    e.preventDefault();
    var name = $("#name").val().trim();
    $("#feedback").text("Thanks, " + name + "! We got your suggestion.");
    this.reset();
  });

  $("#inquiry").on("submit", function (e) {
    e.preventDefault();
    var sender = $("#sender").val().trim();
    $("#reply").text("Message sent! We'll reply soon, " + sender + ".");
    this.reset();
  });

  var current = 0;

  function calculate() {
    var count = parseInt($("#amount").val(), 10);
    if (isNaN(count) || count < 1) {
      count = 1;
    }
    $("#amount").val(count);
    $("#total").text("$" + (current * count).toFixed(2));
  }

  $(".buy").on("click", function () {
    current = parseFloat($(this).data("price"));
    $("#item").text($(this).data("name"));
    $("#cost").text("$" + current.toFixed(2));
    $("#amount").val(1);
    $("#receipt").text("");
    calculate();
    $("#checkout").addClass("open");
  });

  $("#amount").on("input", calculate);

  $("#confirm").on("click", function () {
    var qty = $("#amount").val();
    var product = $("#item").text();
    var sum = $("#total").text();
    $("#receipt").text("Order confirmed for " + qty + "x " + product + " (" + sum + ").");
  });

  $("#cancel").on("click", function () {
    $("#checkout").removeClass("open");
  });

  $("#checkout").on("click", function (e) {
    if (e.target === this) {
      $(this).removeClass("open");
    }
  });

  $(".thumb").on("click", function () {
    $("#heading").text($(this).data("title"));
    $("#summary").text($(this).data("desc"));
    $("#viewer").addClass("open");
  });

  $("#exit").on("click", function () {
    $("#viewer").removeClass("open");
  });

  $("#viewer").on("click", function (e) {
    if (e.target === this) {
      $(this).removeClass("open");
    }
  });
});