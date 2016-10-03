$(document).ready(function() {

  console.log('document is ready');
  // var budget = {}; // creates the budget object
  // budget.('.calc-tab label') = []; // makes a new array of values for every new calc-tab div

  // $('#calculator .total button').on('click', function() {
  //   console.log('clicked .total button');
  //
  //   var value = Number($('table input').val());
  //   var frequency = Number($('.value-frequency option:selected').val());
  //   console.log(value, frequency);
  //   var annual = value * frequency;
  //   $('#calculator .calc-total span').text(annual);
  //
  // });

  // var total = {};

  var salary = [];
  var bonus = [];
  var investments = [];
  var other = [];

  $('.tab-content #salary').find('input, select').on('keyup change', function() {
    // make the totals add up across unique tr
    var ammount = Number($('#salary .field-text input').val());
    var frequency = Number($('#salary .field-select option:selected').val());
    var annual = (ammount * frequency);
    $('#salary p:eq(1)').text('$' + annual);
    salary.push(annual);
    console.log(salary[1]);
  });

  $('.tab-content #bonus').find('input, select').on('keyup change', function() {
    var ammount = Number($('#bonus .field-text input').val());
    var frequency = Number($('#bonus .field-select option:selected').val());
    var annual = ammount * frequency;
    $('#bonus p:eq(1)').text('$' + annual);
    bonus.push(annual);
    console.log(bonus[1]);
  });

  $('.tab-content #investments').find('input, select').on('keyup change', function() {
    var ammount = Number($('#investments .field-text input').val());
    var frequency = Number($('#investments .field-select option:selected').val());
    var annual = ammount * frequency;
    $('#investments p:eq(1)').text('$' + annual);
    investments.push(annual);
    console.log(investments[1]);
  });

  $('.tab-content #other').find('input, select').on('keyup change', function() {
    var ammount = Number($('#other .field-text input').val());
    var frequency = Number($('#other .field-select option:selected').val());
    var annual = ammount * frequency;
    $('#other p:eq(1)').text('$' + annual);
    other.push(annual);
    console.log(other[1]);
  });

  $('#calculator nav li').on('click', function() {
    var id = $(this).attr('id');
    console.log('clicked ' + id + ' tab');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    // Shorter could be: $(this).addClass('active').siblings('li').removeClass('active');
    $('#calculator .tab-content li#' + id).addClass('active').siblings('li').removeClass('active');
  });

  // $('#lesson .sum button').on('click', function() {
  //   console.log('clicked .sum button');
  //   $('#lesson button').addClass('blue');
  //
  //   var price = Number($('input.price').val());
  //   var units = Number($('input.units').val());
  //   console.log(price, units);
  //   var total = price + units;
  //   console.log(total);
  //   $('.sum p span').text(total);
  //
  // });
  //
  // $('#lesson .multiply button').on('click', function() {
  //   console.log('clicked .multiply button');
  //   $('#lesson button').addClass('green').removeClass('red blue');
  //
  //   var price = Number($('input.price').val());
  //   var units = Number($('input.units').val());
  //   console.log(price, units);
  //   var total = price * units;
  //   console.log(total);
  //   $('.multiply p span').text(total);
  //
  // });
  //
  // $('#lesson .divide button').on('click', function() {
  //   console.log('clicked .divide button');
  //   $('#lesson button').addClass('red').removeClass('blue green');
  //
  //   var price = Number($('input.price').val());
  //   var units = Number($('input.units').val());
  //   console.log(price, units);
  //   var total = price / units;
  //   console.log(total);
  //   $('.divide p span').text(total);
  //
  // });
  //
});
