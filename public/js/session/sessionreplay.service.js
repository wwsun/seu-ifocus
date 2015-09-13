angular.module('ifocus.session', [])

    .factory('SessionService', ['$http', 'baseUrl', function ($http, baseUrl) {

        return {
           
            getSessionSequenceByID: function () {
                return $http.get(baseUrl + 'visitflow/sequence/id/sessiontest1');
            }

        };
    }]);