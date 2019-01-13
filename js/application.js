$(document).ready(function () {
  $('tr:odd').css("background-color", "#e8e8e8");

  $('tbody tr').each(function (ind, el) {
    var item = $(el).children('.item').text();

    var price = parseFloat($(el).children('.price').text());
    var quantity = parseFloat($(el).children('.quantity').text());
		var cost = price * quantity;
    console.log(cost)
  })


});
