
var quantityCost = function(el) {
    var price = parseFloat($(el).find('.price').text());
    var quantity = parseInt($(el).find('.quantity input').val());
    var cost = price * quantity;

    $(el).children('.cost').html(cost);

    return cost;

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
  updateList();

  $(document).on('click', '.btn.remove', function(e) {
    $(this).closest('tr').remove();
    updateList();
  });

  var timeout;
  $(document).on('input', 'tr input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateList();
    }, 300);

  });

  $('#addItem').on('submit', function(e) {
    e.preventDefault();

    var priceInput = $(this).children('#priceInput').val();
    var textInput = $(this).children('#textInput').val();

    if(!(textInput) || !(priceInput)) {
      alert('Please add Item and Price');
    } else {
      $('tbody').prepend('<tr>' + '<td class = "item">' + textInput +'</td>' + '<td class = "price">' + priceInput + '</td><td class="quantity"><input type="number" value="0" min = "0"/></td><td><button class="btn btn-danger remove">Remove</button></td><td class="cost"></td>' + '</tr>');
    };

    updateList();

    $(this).children('#priceInput').val('');
    $(this).children('#textInput').val('');
  })
  $('tbody tr:odd').css("background-color", "#e8e8e8");
});
