$(document).ready(function() {

  console.log('document is ready');

  $('#calculator ul li').on('click', function() {
    var id = $(this).attr('id');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

  var income = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    incomeTotal = 0,
    livingexpenses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    livingexpensesTotal = 0,
    insurance = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    insuranceTotal = 0,
    loans = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    loansTotal = 0,
    transport = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    transportTotal = 0,
    leisure = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    leisureTotal = 0;

  //switch from inputs to results
  $('#inputs button').on('click', function() {
    $(this).parent().removeClass('on');
    $('#results').addClass('on');
    for (i = 0; i < income.length; i++) {
      incomeTotal = incomeTotal + income[i];
    };
    for (i = 0; i < livingexpenses.length; i++) {
      livingexpensesTotal = livingexpensesTotal + livingexpenses[i];
    };
    for (i = 0; i < insurance.length; i++) {
      insuranceTotal = insuranceTotal + insurance[i];
    };
    for (i = 0; i < loans.length; i++) {
      loansTotal = loansTotal + loans[i];
    };
    for (i = 0; i < transport.length; i++) {
      transportTotal = transportTotal + transport[i];
    };
    for (i = 0; i < leisure.length; i++) {
      leisureTotal = leisureTotal + leisure[i];
    };
    var spendingTotal = livingexpensesTotal + insuranceTotal + loansTotal + transportTotal + leisureTotal;
    var netTotal = incomeTotal - spendingTotal;
    $('.incomeBar').css('width', 170 + 'px');
    $('.spendingBar').css('width', (170 * spendingTotal / incomeTotal) + 'px');
    $('.netBar').css('width', (170 * netTotal / incomeTotal) + 'px');

    $('.incomeBar').parent().find('h4').text('$' + incomeTotal);
    $('.spendingBar').parent().find('h4').text('$' + spendingTotal);
    $('.netBar').parent().find('h4').text('$' + netTotal);

  });

  //switch from results to inputs
  $('#results button').on('click', function() {
    $(this).parent().removeClass('on');
    $('#inputs').addClass('on');
    var income = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      incomeTotal = 0,
      livingexpenses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      livingexpensesTotal = 0,
      insurance = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      insuranceTotal = 0,
      loans = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      loansTotal = 0,
      transport = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      transportTotal = 0,
      leisure = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      leisureTotal = 0;
  });

  $('#calculator #income .income').find('input, select').on('keyup change', function() {
    var amount = Number($('.income .field-input input').val());
    var frequency = Number($('.income .field-select option:selected').val());
    var annual = (amount * frequency);
    income[0] = annual;
  });

  $('#calculator #income .bonus').find('input, select').on('keyup change', function() {
    var amount = Number($('.bonus .field-input input').val());
    var frequency = Number($('.bonus .field-select option:selected').val());
    var annual = (amount * frequency);
    income[1] = annual;
  });

  $('#calculator #income .investments').find('input, select').on('keyup change', function() {
    var amount = Number($('.investments .field-input input').val());
    var frequency = Number($('.investments .field-select option:selected').val());
    var annual = (amount * frequency);
    income[2] = annual;
  });

  $('#calculator #income .allowances').find('input, select').on('keyup change', function() {
    var amount = Number($('.allowances .field-input input').val());
    var frequency = Number($('.allowances .field-select option:selected').val());
    var annual = (amount * frequency);
    income[3] = annual;
  });

  $('#calculator #income .property').find('input, select').on('keyup change', function() {
    var amount = Number($('.property .field-input input').val());
    var frequency = Number($('.property .field-select option:selected').val());
    var annual = (amount * frequency);
    income[4] = annual;
  });

  $('#calculator #income .pension').find('input, select').on('keyup change', function() {
    var amount = Number($('.pension .field-input input').val());
    var frequency = Number($('.pension .field-select option:selected').val());
    var annual = (amount * frequency);
    income[5] = annual;
  });

  $('#calculator #income .other').find('input, select').on('keyup change', function() {
    var amount = Number($('.other .field-input input').val());
    var frequency = Number($('.other .field-select option:selected').val());
    var annual = (amount * frequency);
    income[6] = annual;
  });

  //LIVING EXPENSES TAB//

  $('#calculator #livingexpenses .rent').find('input, select').on('keyup change', function() {
    var amount = Number($('.rent .field-input input').val());
    var frequency = Number($('.rent .field-select option:selected').val());
    var annual = (amount * frequency);
    livingexpenses[0] = annual;
  });

  $('#calculator #livingexpenses .rates').find('input, select').on('keyup change', function() {
    var amount = Number($('.rates .field-input input').val());
    var frequency = Number($('.rates .field-select option:selected').val());
    var annual = (amount * frequency);
    livingexpenses[1] = annual;
  });

  $('#calculator #livingexpenses .utilities').find('input, select').on('keyup change', function() {
    var amount = Number($('.utilities .field-input input').val());
    var frequency = Number($('.utilities .field-select option:selected').val());
    var annual = (amount * frequency);
    livingexpenses[2] = annual;
  });

  $('#calculator #livingexpenses .phone').find('input, select').on('keyup change', function() {
    var amount = Number($('.phone .field-input input').val());
    var frequency = Number($('.phone .field-select option:selected').val());
    var annual = (amount * frequency);
    livingexpenses[3] = annual;
  });

  $('#calculator #livingexpenses .home').find('input, select').on('keyup change', function() {
    var amount = Number($('.home .field-input input').val());
    var frequency = Number($('.home .field-select option:selected').val());
    var annual = (amount * frequency);
    livingexpenses[4] = annual;
  });

  $('#calculator #livingexpenses .groceries').find('input, select').on('keyup change', function() {
    var amount = Number($('.groceries .field-input input').val());
    var frequency = Number($('.groceries .field-select option:selected').val());
    var annual = (amount * frequency);
    livingexpenses[5] = annual;
  });

  $('#calculator #livingexpenses .medical').find('input, select').on('keyup change', function() {
    var amount = Number($('.medical .field-input input').val());
    var frequency = Number($('.medical .field-select option:selected').val());
    var annual = (amount * frequency);
    livingexpenses[6] = annual;
  });

  $('#calculator #livingexpenses .clothes').find('input, select').on('keyup change', function() {
    var amount = Number($('.clothes .field-input input').val());
    var frequency = Number($('.clothes .field-select option:selected').val());
    var annual = (amount * frequency);
    livingexpenses[7] = annual;
  });

  $('#calculator #livingexpenses .education').find('input, select').on('keyup change', function() {
    var amount = Number($('.education .field-input input').val());
    var frequency = Number($('.education .field-select option:selected').val());
    var annual = (amount * frequency);
    livingexpenses[8] = annual;
  });

  $('#calculator #livingexpenses .other1').find('input, select').on('keyup change', function() {
    var amount = Number($('.other1 .field-input input').val());
    var frequency = Number($('.other1 .field-select option:selected').val());
    var annual = (amount * frequency);
    livingexpenses[9] = annual;
  });

  $('#calculator #livingexpenses .other2').find('input, select').on('keyup change', function() {
    var amount = Number($('.other2 .field-input input').val());
    var frequency = Number($('.other2 .field-select option:selected').val());
    var annual = (amount * frequency);
    livingexpenses[10] = annual;
  });

  //INSURANCE AND SUPERANNUATION//

  $('#calculator #insurance .life').find('input, select').on('keyup change', function() {
    var amount = Number($('.life .field-input input').val());
    var frequency = Number($('.life .field-select option:selected').val());
    var annual = (amount * frequency);
    insurance[0] = annual;
  });

  $('#calculator #insurance .protection').find('input, select').on('keyup change', function() {
    var amount = Number($('.protection .field-input input').val());
    var frequency = Number($('.protection .field-select option:selected').val());
    var annual = (amount * frequency);
    insurance[1] = annual;
  });

  $('#calculator #insurance .home').find('input, select').on('keyup change', function() {
    var amount = Number($('.home .field-input input').val());
    var frequency = Number($('.home .field-select option:selected').val());
    var annual = (amount * frequency);
    insurance[2] = annual;
  });

  $('#calculator #insurance .car').find('input, select').on('keyup change', function() {
    var amount = Number($('.car .field-input input').val());
    var frequency = Number($('.car .field-select option:selected').val());
    var annual = (amount * frequency);
    insurance[3] = annual;
  });

  $('#calculator #insurance .business').find('input, select').on('keyup change', function() {
    var amount = Number($('.business .field-input input').val());
    var frequency = Number($('.business .field-select option:selected').val());
    var annual = (amount * frequency);
    insurance[4] = annual;
  });

  $('#calculator #insurance .boat').find('input, select').on('keyup change', function() {
    var amount = Number($('.boat .field-input input').val());
    var frequency = Number($('.boat .field-select option:selected').val());
    var annual = (amount * frequency);
    insurance[5] = annual;
  });

  //loans section

  $('#calculator #loans .mortgage').find('input, select').on('keyup change', function() {
    var amount = Number($('.mortgage .field-input input').val());
    var frequency = Number($('.mortgage .field-select option:selected').val());
    var annual = (amount * frequency);
    loans[0] = annual;
  });

  $('#calculator #loans .personal-loan').find('input, select').on('keyup change', function() {
    var amount = Number($('.personal-loan .field-input input').val());
    var frequency = Number($('.personal-loan .field-select option:selected').val());
    var annual = (amount * frequency);
    loans[1] = annual;
  });

  $('#calculator #loans .credit-card').find('input, select').on('keyup change', function() {
    var amount = Number($('.credit-card .field-input input').val());
    var frequency = Number($('.credit-card .field-select option:selected').val());
    var annual = (amount * frequency);
    loans[2] = annual;
  });

  $('#calculator #loans .other-loan').find('input, select').on('keyup change', function() {
    var amount = Number($('.other-loan .field-input input').val());
    var frequency = Number($('.other-loan .field-select option:selected').val());
    var annual = (amount * frequency);
    loans[3] = annual;
  });

  //transport section

  $('#calculator #transport .vehicle').find('input, select').on('keyup change', function() {
    var amount = Number($('.vehicle .field-input input').val());
    var frequency = Number($('.vehicle .field-select option:selected').val());
    var annual = (amount * frequency);
    transport[0] = annual;
  });

  $('#calculator #transport .maintenance').find('input, select').on('keyup change', function() {
    var amount = Number($('.maintenance .field-input input').val());
    var frequency = Number($('.maintenance .field-select option:selected').val());
    var annual = (amount * frequency);
    transport[1] = annual;
  });

  $('#calculator #transport .petrol').find('input, select').on('keyup change', function() {
    var amount = Number($('.petrol .field-input input').val());
    var frequency = Number($('.petrol .field-select option:selected').val());
    var annual = (amount * frequency);
    transport[2] = annual;
  });

  $('#calculator #transport .parking').find('input, select').on('keyup change', function() {
    var amount = Number($('.parking .field-input input').val());
    var frequency = Number($('.parking .field-select option:selected').val());
    var annual = (amount * frequency);
    transport[3] = annual;
  });

  $('#calculator #transport .public').find('input, select').on('keyup change', function() {
    var amount = Number($('.public .field-input input').val());
    var frequency = Number($('.public .field-select option:selected').val());
    var annual = (amount * frequency);
    transport[4] = annual;
  });

  $('#calculator #transport .other3').find('input, select').on('keyup change', function() {
    var amount = Number($('.other3 .field-input input').val());
    var frequency = Number($('.other3 .field-select option:selected').val());
    var annual = (amount * frequency);
    transport[5] = annual;
  });

  //leisure section

  $('#calculator #leisure .holidays').find('input, select').on('keyup change', function() {
    var amount = Number($('.holidays .field-input input').val());
    var frequency = Number($('.holidays .field-select option:selected').val());
    var annual = (amount * frequency);
    leisure[0] = annual;
  });

  $('#calculator #leisure .restaurants').find('input, select').on('keyup change', function() {
    var amount = Number($('.restaurants .field-input input').val());
    var frequency = Number($('.restaurants .field-select option:selected').val());
    var annual = (amount * frequency);
    leisure[1] = annual;
  });

  $('#calculator #leisure .sport').find('input, select').on('keyup change', function() {
    var amount = Number($('.sport .field-input input').val());
    var frequency = Number($('.sport .field-select option:selected').val());
    var annual = (amount * frequency);
    leisure[2] = annual;
  });

  $('#calculator #leisure .allowances').find('input, select').on('keyup change', function() {
    var amount = Number($('.allowances .field-input input').val());
    var frequency = Number($('.allowances .field-select option:selected').val());
    var annual = (amount * frequency);
    leisure[3] = annual;
  });

  $('#calculator #leisure .magazines').find('input, select').on('keyup change', function() {
    var amount = Number($('.magazines .field-input input').val());
    var frequency = Number($('.magazines .field-select option:selected').val());
    var annual = (amount * frequency);
    leisure[4] = annual;
  });

  $('#calculator #leisure .gifts').find('input, select').on('keyup change', function() {
    var amount = Number($('.gifts .field-input input').val());
    var frequency = Number($('.gifts .field-select option:selected').val());
    var annual = (amount * frequency);
    leisure[5] = annual;
  });

  $('#calculator #leisure .other4').find('input, select').on('keyup change', function() {
    var amount = Number($('.other4 .field-input input').val());
    var frequency = Number($('.other4 .field-select option:selected').val());
    var annual = (amount * frequency);
    leisure[6] = annual;
  });
});;
