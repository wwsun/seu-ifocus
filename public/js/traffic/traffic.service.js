angular.module('ifocus.traffic')

    .factory('TrafficService', ['$http', 'baseUrl', function ($http, baseUrl) {
        return {
            getGroupPathByDate: function (date) {
                return $http.get(baseUrl + "visitflow/path/" + date);
            },

            getPathBySessionId: function (id) {
                return $http.get(baseUrl + "visitflow/path/id/" + id);
            },

            getSessionSequenceBySessionId: function (id) {
                return $http.get(baseUrl + "visitflow/sequence/id/" + id);
            },

            //Add conversion target list
            getConversionTargetList: function(date) {
                return $http.get(baseUrl + 'customer/targetList/' + date);
            },

            //Add Conversion funnel
            getConversionFunnel: function(date) {
                return $http.get(baseUrl + 'customer/funnel/' + date);
            }
        };
    }]);
