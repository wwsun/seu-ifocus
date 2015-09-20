angular.module('ifocus.jump')
  .factory('FlowJumpService', ['$http', 'baseUrl', function ($http, baseUrl) {

    return {
      fetchJumpingDataByStage : function (stage) {
        return $http.get(baseUrl + 'visitflow/path/jumpInfo/' + stage);
      }

    };

  }]);