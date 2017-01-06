// Where we store all the calculated values
var totals = {};

$(document).ready(function() {

  // Animate open clicked pane
  $('#calculator ul li').on('click', function() {
    var id = $(this).attr('id');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

  // All the actions to fire when user clicks "CALCULATE"
  $('#inputs button').on('click', function() {
    sum('income');
    sum('livingExpenses');
    sum('insurance');
    sum('loans');
    sum('transport');
    sum('leisure');
    calculateTotal();
    bakePies();
    // resetData();
  });

  function sum(sectionId) {
    totals[sectionId] = 0;
    $('#' + sectionId + ' tr').not('.label').each(function() {

      // TODO: fix issue where user entering string can break app

      var amount = Number($(this).find('input').val());
      var frequency = Number($(this).find('option:selected').val());
      var total = Math.round(100 * amount * frequency) / 100;
      total = total < 0 ? 0 : total; // Prevent any values from being below zero
      totals[sectionId] = totals[sectionId] + total;
    });
  }

  function calculateTotal() {

    // TODO: Round and displayed totals to 2 decimals

    totals.spending = 0;
    $.each(totals, function(key, value) {
      if (key !== 'income' && key !== 'spending' && key !== 'net') {
        totals.spending += totals[key];
      }
    });
    totals.net = totals.income - totals.spending;
  }

  function bakePies() {

    // Hide the inputs page
    $('#inputs').removeClass('on');

    // Show the results page
    $('#results').addClass('on');

    // Generate the bar graph section of results
    $('.bar.income').css('width', 170 + 'px');
    $('.bar.spending').css('width', (170 * totals.spending / totals.income) + 'px');
    $('.bar.net').css('width', (170 * totals.net / totals.income) + 'px');

    // Add numerical values to the bar graphs
    $('.bar.income').parent().find('h4').text('$' + totals.income);
    $('.bar.spending').parent().find('h4').text('$' + totals.spending);
    $('.bar.net').parent().find('h4').text('$' + totals.net);

    var startDegrees = 0;
    $.each(totals, function(key, value) {
      // TODO: Remove this ugly hack
      if (key !== 'income' && key !== 'spending' && key !== 'net') {

        var segmentDegrees = 360 * totals[key] / totals.spending;
        var labelPosition = segmentDegrees / 2;
        if (segmentDegrees >= 180) {
          $('#pie-chart .' + key).addClass('big');
        }
        //hide numerical values on tiny pie slices
        if (segmentDegrees <= 37) {
          $('.pie.' + key + ' .label').css('display', 'none');
        }
        $('.pie.' + key).css('transform', 'rotate(' + startDegrees + 'deg)');
        $('.pie.' + key + ' .slice').css('transform', 'rotate(' + segmentDegrees + 'deg)');
        $('.pie.' + key + ' .label').html('<h4>$' + totals[key] + '</h4>');
        $('.pie.' + key + ' .label').css('transform', 'rotate(' + labelPosition + 'deg)');
        $('.pie.' + key + ' h4').css('transform', 'rotate(-' + (labelPosition + startDegrees) + 'deg)');
        startDegrees += segmentDegrees;
      }
    });
  }

  function resetData() {
    totals = {};
    // TODO: reset the graphs
    // TODO: bring user first screen
    // TODO: reset classes in pie chart
  }

  //switch from results to inputs
  $('#results button').on('click', function() {
    $(this).parent().removeClass('on');
    $('#inputs').addClass('on');
  });
});
