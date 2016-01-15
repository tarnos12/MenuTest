"use strict";
testApp.controller('PlayerStats', ['$scope', '$http', function ($scope, $http) {
    $http.get('stats/stats.json').success(function (data) {
        $scope.saveList = data;
    });
    $http.get('stats/races.json').success(function (data) {
        $scope.raceList = data;
    });
    $scope.orderByStrength = 'Strength';
    $scope.player = {
        name: "",
        race: "",
        gender: "",
    };
    $scope.genderList = ['Male', 'Female']
    $scope.gameMenu = {
        loadingScreen:{
            state:true,
        },
        startMen: {
            state: true,
        },
        charSelect: {
            state: false,
            toggle: function () {
                this.state = !this.state;
                $scope.gameMenu.startMen.state = !this.state;
            }
        },
        charCreate: {
            state: false,
            toggle: function () {
                this.state = !this.state;
                $scope.gameMenu.charSelect.state = !this.state;
            }
        }
    };
}]);
$(".progress-bar").each(function () {
    var each_bar_width;
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
});
$(".progress-bar")
.on("transitionend webkitTransitionEnd",
 function (e) {
     // do something here
     console.log('Loading Completed');
     $(this).off(e);
 });