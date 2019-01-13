
var quantityCost = function(el) {
    var price = parseFloat($(el).find('.price').text());
    var quantity = parseInt($(el).find('.quantity input').val());
    var cost = price * quantity;

    $(el).children('.cost').html(cost);



    return cost;

};

var inputCalculation = function() {
  var inputPrice = parseFloat($(el).find('textInput').val());
  var inputQuantity = parseFloat($(el).find('.priceInput').val());

  var inputCost = inputPrice * inputQuantity;
};

var updateList = function() {
  var total = [];

  $('tbody tr').each(function(ind, el) {
    var totalCost = quantityCost(el);
      total.push(totalCost)
    });

    total = total.reduce(function(a,b) {
      return a + b;
    });
  $('#total').html(total);

};

$(document).ready(function () {
  $('tr:odd').css("background-color", "#e8e8e8");

  updateList();

  $(document).on('click', '.btn#remove', function(event) {
    $(this).closest('tr').remove();
    updateList();
  });

  var timeout;
  $(document).on('input', 'tr input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateList();
    }, 500);
  });
});
