angular.module('ifocus.sessionServices', [])

    .factory('sessionPathData', ['$http', function ($http) {

        var obj = {
            flowData: []
        };

        obj.getAll = function () {
            return $http.get('data/graph4.json')
                .success(function (data) {
                    angular.copy(data, obj.flowData);
                })
                .error(function (data) {
                    console.log(data);
                });
        };

        return obj;
    }])

    .factory('singleReplayData',['$http', function ($http) {

        var obj = {
            pathData: []
        };

        $http.get('data/single.json').success(function(data) {
            angular.copy(data, obj.pathData);
        }).error(function(data) {
            console.log(data);
        });

        return obj;
    }]);