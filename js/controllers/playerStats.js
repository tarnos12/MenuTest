"use strict";
testApp.controller('PlayerStats', ['$scope', '$http', function ($scope, $http) {
    $http.get('stats/stats.json').success(function (data) {
        $scope.stats = data;
    });
    $scope.orderByStrength = 'Strength';
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
