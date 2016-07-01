(function() {
  var ComposableDate = function() {

    var buildRange = function(startDate, endDate) {
      var dates = [];
      var d;

      for(d = startDate; d < endDate; d.setDate(new Date(d.getDate()+1))) {
        var saveThis = new Date(d);
        dates.push(saveThis);
      }

      return dates;
    };

    var onlyOnSunday = function(dates) {

      var sundaysOnly = dates.filter(function(date) {
        return date.getDay() === 0;
      });

      return sundaysOnly;
    };

    var onlyOn420s = function(dates) {
      return dates.filter(function(date) {
        return date.getDate() === 19 && date.getMonth() === 3;
      });
    };

    var onlyOnTheFirst = function(dates) {

      var firstOfMonth = function(date) {
        var d = new Date(date);
        return new Date(d.setDate(1));
      };

      return dates.filter(function(date) {
        return date.getTime() == firstOfMonth(date).getTime();
      });
    };

    return {
      buildRange: buildRange,
      onlyOnTheFirst: onlyOnTheFirst,
      onlyOnSunday: onlyOnSunday,
      onlyOn420s: onlyOn420s
    };
  };

  var d = ComposableDate();

  range   = d.buildRange(new Date(1901, 0, 1), new Date(2000, 11, 31));
  sundays = d.onlyOnSunday(range);
  first   = d.onlyOnTheFirst(sundays);
  four20s = d.onlyOn420s(range);

  console.log(four20s.length);

}())

