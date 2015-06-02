angular.module('ifocus.audience')
    .factory('AudienceService', ['$http', 'baseUrl', function ($http, baseUrl) {

        return {
            getDistributionByCountry: function(country) {
                return $http.get(baseUrl + 'customer/geo/distribution/' + country);
            },

            getCountriesGeoDetail: function() {
                return $http.get(baseUrl + 'customer/geo/detail');
            },

            getDevicesDistribution: function() {
                return $http.get(baseUrl + 'customer/devices');
            },

            getBrowsersDistribution: function() {
                return $http.get(baseUrl + 'customer/browsers');
            },

            getLandingPagesByCategory: function(category) {
                return $http.get(baseUrl + 'customer/landing/pages/' + category);
            },

            getHotpagesByCategory: function(category) {
                return $http.get(baseUrl + 'customer/heatmap/hotpages/' + category);
            },

            // user behavior
            getHotAreasByUrl: function(url) {
                return $http.get(baseUrl + 'customer/heatmap/distribution/overall/' + url);
            },

            getHotAreasByUrlAndEventType: function(url, eventType) {
                return $http.get(baseUrl + 'customer/heatmap/distribution/' + eventType + '/' + url);
            }
        };
    }]);