$(document).ready(function () {
  $('tr:odd').css("background-color", "#e8e8e8");

  $('tbody tr').each(function (ind, el) {
    var item = $(el).children.first.text();
    alert(item)
  })


});
