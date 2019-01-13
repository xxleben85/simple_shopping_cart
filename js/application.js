
var quantityCost = function() {
  $('tbody tr').each(function (ind, el) {

    var price = parseFloat($(el).find('.price').text());
    var quantity = parseInt($(el).find('.quantity input').val());
    var cost = price * quantity;

    $(el).children('.cost').html(cost);

    return cost;
  });
};

$(document).ready(function () {
  // var item = $(el).children('.item').text();
  $('tr:odd').css("background-color", "#e8e8e8");
  var total = [];

  $('.btn .remove').on('click', function(event) {
    $(this).closest('tr').remove();

  });
  quantityCost()
});
