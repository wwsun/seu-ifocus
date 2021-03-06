angular.module('ifocus.status')

    .factory('StatusService', ['$http', 'baseUrl', function ($http, baseUrl) {

        return {
            getSessionDistributionByDate: function (date) {
                return $http.get(baseUrl + 'overview/distribution/' + date);
            },

            getOverviewStatusNumbers: function (date) {
                return $http.get(baseUrl + 'overview/status/' + date);
            },

            //Add click distribution by date
            getClickDistributionByDate: function (date) {
                return $http.get(baseUrl + 'overview/status/clicks/' + date);
            },

            //Add throughput numbers
            getThroughputNumbers: function (date) {
                return $http.get(baseUrl + 'overview/status/thruput/' + date);
            },

            //Add status list
            getStatusList: function (date) {
                return $http.get(baseUrl + 'overview/status/list/' + date);
            },

            getRefererSearchEngines: function () {
                return $http.get(baseUrl + 'overview/sessions/sources/se');
            },

            getCountriesDistribution: function () {
                return $http.get(baseUrl + 'overview/sessions/sources/countries');
            },

            getFrequentCategories: function () {
                return $http.get(baseUrl + 'overview/sessions/frequent/categories');
            },

            getFrequentPages: function () {
                return $http.get(baseUrl + "overview/sessions/frequent/pages");
            },

            getFrequentPagesByCategory: function (category) {
                return $http.get(baseUrl + "overview/sessions/frequent/" + category);
            },

            getMainLandingCategories: function () {
                return $http.get(baseUrl + 'overview/sessions/landings/categories');
            },

            getMainDropOffCategories: function () {
                return $http.get(baseUrl + 'overview/sessions/dropoff/categories');
            }

        };
    }]);