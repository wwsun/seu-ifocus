angular.module('AdminService', []).factory('graphData', ['$http', function ($http) {

    var obj = {
        flowData: []
    };

    obj.getAll = function () {
        return $http.get('data/flow.json')
            .success(function (data) {
                angular.copy(data, obj.flowData);
            })
            .error(function (data) {
                console.log(data);
            });
    };

    return obj;
}]);