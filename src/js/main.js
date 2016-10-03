$(document).ready(function() {

  console.log('document is ready');

  $('#calculator ul li').on('click', function() {
    var id = $(this).attr('id');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

  $('#calculator button').on('click', function() {
    console.log(total);
    console.log(income);
    console.log('length is ' + incomeLength);
    console.log('first value is ' + incomeFirst);

  });

  var income = [];
  var bonus = [];
  var investments = [];
  var allowances = [];
  var other = [];

  var incomeLength = income.length;
  var incomeFirst = income[0];

  var total = [income, bonus, investments, allowances, other];

  $('#calculator table .income').find('input, select').on('keyup change', function() {
    var amount = Number($('.income .field-input input').val());
    var frequency = Number($('.income .field-select option:selected').val());
    var annual = (amount * frequency);
    income.push(annual);
    console.log(income);
  });

  $('#calculator table .bonus').find('input, select').on('keyup change', function() {
    var amount = Number($('.bonus .field-input input').val());
    var frequency = Number($('.bonus .field-select option:selected').val());
    var annual = (amount * frequency);
    bonus.push(annual);
  });

  $('#calculator table .investments').find('input, select').on('keyup change', function() {
    var amount = Number($('.investments .field-input input').val());
    var frequency = Number($('.investments .field-select option:selected').val());
    var annual = (amount * frequency);
    investments.push(annual);
  });

  $('#calculator table .allowances').find('input, select').on('keyup change', function() {
    var amount = Number($('.allowances .field-input input').val());
    var frequency = Number($('.allowances .field-select option:selected').val());
    var annual = (amount * frequency);
    allowances.push(annual);
  });

  $('#calculator table .other').find('input, select').on('keyup change', function() {
    var amount = Number($('.other .field-input input').val());
    var frequency = Number($('.other .field-select option:selected').val());
    var annual = (amount * frequency);
    other.push(annual);
  });

});
