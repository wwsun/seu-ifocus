angular.module('ifocus.audience')
    .factory('AudienceService', ['$http', 'baseUrl', function ($http, baseUrl) {

        return {

            getCategoryList: function () {

                // todo: get category list from server
                return $http.get(baseUrl + '');
            },

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
            },

            //Add heatmap by semantics
            getHeatmapBySemantics: function() {
                return $http.get(baseUrl + 'customer/heatmap/semantics');
            },

            //Add hotpages by semantics
            getHotpagesBySemantics: function(semantic) {
                return $http.get(baseUrl + 'customer/heatmap/hotpagesbyse/' + semantic);
            },

            //Add hotpages of click
            getHotpagesOfClick: function() {
                return $http.get(baseUrl + 'customer/heatmap/hotpagesbyev/click');
            },

            //Add hotpages of mousemove
            getHotpagesOfMousemove: function() {
                return $http.get(baseUrl + 'customer/heatmap/hotpagesbyev/mousemove');
            },

            //Add hotpages of scroll
            getHotpagesOfScroll: function() {
                return $http.get(baseUrl + 'customer/heatmap/hotpagesbyev/scroll');
            },

            //Add Overall Distribution
            getOverallDistribution: function(url) {
                return $http.get(baseUrl + 'customer/heatmap/distribution/overall/' + url);
            },

            //Add Click Distribution
            getClickDistribution: function(url) {
                return $http.get(baseUrl + 'customer/heatmap/distribution/click/' + url);
            },

            //Add Mousemove Distribution
            getMousemoveDistribution: function(url) {
                return $http.get(baseUrl + 'customer/heatmap/distribution/mousemove/' + url);
            },

            //Add Scroll Distribution
            getScrollDistribution: function(url) {
                return $http.get(baseUrl + 'customer/heatmap/distribution/scroll/' + url);
            },

            //Add Form Change Distribution
            getFormChange: function() {
                return $http.get(baseUrl + 'customer/form/nums/change');
            },

            //Add Form Empty Distribution
            getFormEmpty: function() {
                return $http.get(baseUrl + 'customer/form/nums/empty');
            },

            //Add Form Average Time Distribution
            getFormAvgTimeCost: function() {
                return $http.get(baseUrl + 'customer/form/avgtime/cost');
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