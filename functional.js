(function() {

  var startDate = new Date(1901, 0, 1);
  var endDate   = new Date(2000, 11, 31);

  var buildDateRange = function(startDate, endDate) {
    var dates = [];
    var d;

    for(d = startDate; d < endDate; d.setDate(new Date(d.getDate()+1))) {
      var saveThis = new Date(d);
      dates.push(saveThis);
    }

    return dates;
  };

  var from1901To2000 = buildDateRange(startDate, endDate);

  var sundaysOnly = from1901To2000.filter(function(date) {
    return date.getDay() === 0;
  });

  var firstOfMonth = function(date) {
    return new Date(date.setDate(1));
  };

  var tomorrow = function(date) {
    var t = new Date(date.setDate(date + 1));
    console.log(t);
  };

  var sundaysOnTheFirst = sundaysOnly.filter(function(date) {
    return date.getTime() == firstOfMonth(date).getTime();
  });

  console.log(sundaysOnTheFirst.length);

}())

