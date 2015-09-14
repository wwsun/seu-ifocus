angular.module('ifocus.jump')
  .factory('FlowJumpService', ['$http', 'baseUrl', function ($http, baseUrl) {

    return {
      fetchJumpingDataByStage : function (stage) {
        // todo:
        return $http.get(baseUrl + 'visitflow/path/stateInfo/' + stage);
      }

    };

  }]);