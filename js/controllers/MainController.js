app.controller('MainController', ['$scope', function($scope) {

  $scope.title = 'Projects:';

  $scope.projects = [{
    title: 'INDIGO KIDS',
    image: 'img/project1.jpg',
    //description: 'Мобильное приложение, включающее 10-мини игр под брендом "Маша и Медведь"',
    description: 'Россия, Seed, Информационные технологии, Российское право, B2C',
    country: 'Россия',
    round: 'Seed',
    segment: 'Информационные технологии',
    jurisdiction: 'Российское право',
    businessType: 'B2C'
  }, {
    title: 'Брендированные дрова GREENEX',
    image: 'img/project2.jpg',
    //description: 'Первый российский производитель брендированных дров GREENEX',
    description: 'Другие страны, Preseed, Мобильные приложения, Иное, B2B',
    country: 'Другие страны',
    round: 'Preseed',
    segment: 'Мобильные приложения',
    jurisdiction: 'Иное',
    businessType: 'B2B'
  }, {
    title: 'TakeBus',
    image: 'img/project3.jpg',
    //description: 'Сайт и мобильное приложение для продажи билетов на междугородние автобусы',
    description: 'Россия, Preseed, Информационные технологии, Иное, B2C',
    country: 'Россия',
    round: 'Preseed',
    segment: 'Информационные технологии',
    jurisdiction: 'Иное',
    businessType: 'B2C'
  }, {
    title: 'Fingooroo.ru',
    image: 'img/project4.jpg',
    //description: 'Fingooroo – Р2Р -платформа для кредитования физических лиц',
    description: 'Другие страны, Seed, Мобильные приложения, Российское право, B2B',
    country: 'Другие страны',
    round: 'Seed',
    segment: 'Мобильные приложения',
    jurisdiction: 'Российское право',
    businessType: 'B2B'
  }, {
    title: 'Demeter_corner',
    image: 'img/project5.jpg',
    //description: 'Demeter_corner-сеть корнеров по продаже монопарфюмерии Demeter Fragrance Library',
    description: 'Россия, Preseed, Электронная коммерция, Российское право, B2G',
    country: 'Россия',
    round: 'Preseed',
    segment: 'Электронная коммерция',
    jurisdiction: 'Российское право',
    businessType: 'B2G'
  }, {
    title: 'Автостеклофф',
    image: 'img/project6.jpg',
    //description: 'Fingooroo – Р2Р -платформа для кредитования физических лиц',
    description: 'Другие страны, Seed, Мобильные приложения, Российское право, B2B',
    country: 'Другие страны',
    round: 'Seed',
    segment: 'Мобильные приложения',
    jurisdiction: 'Российское право',
    businessType: 'B2B'
  }, {
    title: 'ELEMENTAREE',
    image: 'img/project7.jpg',
    //description: 'Demeter_corner-сеть корнеров по продаже монопарфюмерии Demeter Fragrance Library',
    description: 'Россия, Preseed, Электронная коммерция, Российское право, B2G',
    country: 'Россия',
    round: 'Round A',
    segment: 'Электронная коммерция',
    jurisdiction: 'Российское право',
    businessType: 'B2G'
  }];

  //filter by country

  $scope.countryIncludes = [];

  $scope.includeCountry = function(country) {
    var i = $.inArray(country, $scope.countryIncludes);
    if (i > -1) {
      $scope.countryIncludes.splice(i, 1);
    } else {
      $scope.countryIncludes.push(country);
    }
  };

  $scope.countryFilter = function(projects) {
    if ($scope.countryIncludes.length > 0) {
      if ($.inArray(projects.country, $scope.countryIncludes) < 0)
        return;
    }

    return projects;
  };

  //filter by round

  $scope.roundIncludes = [];

  $scope.includeRound = function(round) {
    var i = $.inArray(round, $scope.roundIncludes);
    if (i > -1) {
      $scope.roundIncludes.splice(i, 1);
    } else {
      $scope.roundIncludes.push(round);
    }
  };

  $scope.roundFilter = function(projects) {
    if ($scope.roundIncludes.length > 0) {
      if ($.inArray(projects.round, $scope.roundIncludes) < 0)
        return;
    }

    return projects;
  };

  //filter by segment

  $scope.segmentIncludes = [];

  $scope.includeSegment = function(segment) {
    var i = $.inArray(segment, $scope.segmentIncludes);
    if (i > -1) {
      $scope.segmentIncludes.splice(i, 1);
    } else {
      $scope.segmentIncludes.push(segment);
    }
  };

  $scope.segmentFilter = function(projects) {
    if ($scope.segmentIncludes.length > 0) {
      if ($.inArray(projects.segment, $scope.segmentIncludes) < 0)
        return;
    }

    return projects;
  };

  //filter by jurisdiction

  $scope.jurisdictionIncludes = [];

  $scope.includeJurisdiction = function(jurisdiction) {
    var i = $.inArray(jurisdiction, $scope.jurisdictionIncludes);
    if (i > -1) {
      $scope.jurisdictionIncludes.splice(i, 1);
    } else {
      $scope.jurisdictionIncludes.push(jurisdiction);
    }
  };

  $scope.jurisdictionFilter = function(projects) {
    if ($scope.jurisdictionIncludes.length > 0) {
      if ($.inArray(projects.jurisdiction, $scope.jurisdictionIncludes) < 0)
        return;
    }

    return projects;
  };

  //filter by businessType

  $scope.businessTypeIncludes = [];

  $scope.includeBusinessType = function(businessType) {
    var i = $.inArray(businessType, $scope.businessTypeIncludes);
    if (i > -1) {
      $scope.businessTypeIncludes.splice(i, 1);
    } else {
      $scope.businessTypeIncludes.push(businessType);
    }
  };

  $scope.businessTypeFilter = function(projects) {
    if ($scope.businessTypeIncludes.length > 0) {
      if ($.inArray(projects.businessType, $scope.businessTypeIncludes) < 0)
        return;
    }

    return projects;
  };

  //project counter (TODO)

  // var pluralForm = function(n, forms, options) {
  //   var result = "";
  //   if (!options || (options.neat && n !== 1)) {
  //     result += n + " ";
  //   }
  //   n = Math.abs(n);
  //   result += forms[(n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)];
  //   return result;
  // };
  //
  // msg = [projects.length].map(function(i) {
  //   return pluralForm(i, ["проект", "проекта", "проектов"]);
  // }).join('; ');
  // document.getElementById('msg').innerHTML = msg;

}]);
