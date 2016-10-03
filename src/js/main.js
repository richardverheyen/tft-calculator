$(document).ready(function() {

  console.log('document is ready');

  $('#calculator ul li').on('click', function() {
    var id = $(this).attr('id');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

  var total = {};

  $('#calculator #income .income').find('input, select').on('keyup change', function() {
    var amount = Number($('.income .field-input input').val());
    var frequency = Number($('.income .field-select option:selected').val());
    var annual = (amount * frequency);
    total.income = annual;
    console.log(total);
  });

  $('#calculator #income .bonus').find('input, select').on('keyup change', function() {
    var amount = Number($('.bonus .field-input input').val());
    var frequency = Number($('.bonus .field-select option:selected').val());
    var annual = (amount * frequency);
    total.bonus = annual;
    console.log(total);
  });

  $('#calculator #income .investments').find('input, select').on('keyup change', function() {
    var amount = Number($('.investments .field-input input').val());
    var frequency = Number($('.investments .field-select option:selected').val());
    var annual = (amount * frequency);
    total.investments = annual;
  });

  $('#calculator #income .allowances').find('input, select').on('keyup change', function() {
    var amount = Number($('.allowances .field-input input').val());
    var frequency = Number($('.allowances .field-select option:selected').val());
    var annual = (amount * frequency);
    total.allowances = annual;
    console.log(total);
  });

  $('#calculator #income .other').find('input, select').on('keyup change', function() {
    var amount = Number($('.other .field-input input').val());
    var frequency = Number($('.other .field-select option:selected').val());
    var annual = (amount * frequency);
    total.other = annual;
    console.log(total);
  });

  //LIVING EXPENSES TAB//

  $('#calculator #living-expenses .income').find('input, select').on('keyup change', function() {
    var amount = Number($('.income .field-input input').val());
    var frequency = Number($('.income .field-select option:selected').val());
    var annual = (amount * frequency);
    total.income = annual;
    console.log(total);
  });

  $('#calculator #living-expenses .bonus').find('input, select').on('keyup change', function() {
    var amount = Number($('.bonus .field-input input').val());
    var frequency = Number($('.bonus .field-select option:selected').val());
    var annual = (amount * frequency);
    total.bonus = annual;
    console.log(total);
  });

  $('#calculator #living-expenses .investments').find('input, select').on('keyup change', function() {
    var amount = Number($('.investments .field-input input').val());
    var frequency = Number($('.investments .field-select option:selected').val());
    var annual = (amount * frequency);
    total.investments = annual;
  });

  $('#calculator #living-expenses .allowances').find('input, select').on('keyup change', function() {
    var amount = Number($('.allowances .field-input input').val());
    var frequency = Number($('.allowances .field-select option:selected').val());
    var annual = (amount * frequency);
    total.allowances = annual;
    console.log(total);
  });

  $('#calculator #living-expenses .other').find('input, select').on('keyup change', function() {
    var amount = Number($('.other .field-input input').val());
    var frequency = Number($('.other .field-select option:selected').val());
    var annual = (amount * frequency);
    total.other = annual;
    console.log(total);
  });

  //INSURANCE AND SUPERANNUATION//

  $('#calculator #insurance .income').find('input, select').on('keyup change', function() {
    var amount = Number($('.income .field-input input').val());
    var frequency = Number($('.income .field-select option:selected').val());
    var annual = (amount * frequency);
    total.income = annual;
    console.log(total);
  });

  $('#calculator #insurance .bonus').find('input, select').on('keyup change', function() {
    var amount = Number($('.bonus .field-input input').val());
    var frequency = Number($('.bonus .field-select option:selected').val());
    var annual = (amount * frequency);
    total.bonus = annual;
    console.log(total);
  });

  $('#calculator #insurance .investments').find('input, select').on('keyup change', function() {
    var amount = Number($('.investments .field-input input').val());
    var frequency = Number($('.investments .field-select option:selected').val());
    var annual = (amount * frequency);
    total.investments = annual;
  });

  $('#calculator #insurance .allowances').find('input, select').on('keyup change', function() {
    var amount = Number($('.allowances .field-input input').val());
    var frequency = Number($('.allowances .field-select option:selected').val());
    var annual = (amount * frequency);
    total.allowances = annual;
    console.log(total);
  });

  $('#calculator #insurance .other').find('input, select').on('keyup change', function() {
    var amount = Number($('.other .field-input input').val());
    var frequency = Number($('.other .field-select option:selected').val());
    var annual = (amount * frequency);
    total.other = annual;
    console.log(total);
  });

  $('#calculator button').on('click', function() {
    console.log(total);
  });

});
