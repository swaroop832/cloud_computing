var app = angular.module('app',['ngRoute']);

app.controller('MainCtrl',function($scope,$http){
    $scope.myfunction=  function () {

        $http({
            method: 'GET',
            url: "https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000&creation_year=2007"

        }).then(function (response) {

            $scope.mydata = response.data;
            $scope.mydata2007 = $scope.mydata.length

        });
        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000&creation_year=2008").then(function (response) {

            $scope.mydata1 = response.data;
            $scope.mydata2008 = $scope.mydata1.length
        });

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000&creation_year=2009").then(function (response) {

            $scope.mydata2 = response.data;
            $scope.mydata2009 = $scope.mydata2.length
        });

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000&creation_year=2010").then(function (response) {

            $scope.mydata3 = response.data;
            $scope.mydata2010 = $scope.mydata3.length
        });
        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000&creation_year=2011").then(function (response) {

            $scope.mydata4 = response.data;
            $scope.mydata2011 = $scope.mydata4.length
        });
        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000&creation_year=2012").then(function (response) {

            $scope.mydata5 = response.data;
            $scope.mydata2012 = $scope.mydata5.length
        });
    };
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawStacked);

    function drawStacked() {
        var data = google.visualization.arrayToDataTable([
            ['year', '2010 Population'],
            ['2007', $scope.mydata2007],
            ['2008', $scope.mydata2008 ],
            ['2009',$scope.mydata2009 ],
            ['2010', 26950],
            ['2011', 20990],
            ['2012', 15260]
        ]);

        var options = {
            chartArea: {width: '50%'},
            isStacked: true,
            hAxis: {
                title: 'number of records',
                minValue: 0
            }
        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }

});

app.config(['$routeProvider',function($routeProvider){
$routeProvider.
when('/', {
  template:'<h1 style="color: black ">Welcome to 311 data Visualization</h1>',
  controller:'MainCtrl'
  }).
  when('/firstPage', {
  templateUrl:'firstPage.html',
  controller:'MainCtrl'
  }).
  when('/secondPage', {
  templateUrl:'secondPage.html',
  controller:'MainCtrl'
  }).
  when('/thirdPage', {
  templateUrl:'thirdPage.html',
  controller:'MainCtrl1'
  }).
   when('/fourthPage',{
    templateUrl:'fourthpage.html',
    controller:'MainCtrl2'
}).
  otherwise( {
  redirectTo : '/errorPage'
  });
}]);
