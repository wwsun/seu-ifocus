angular.module('ifocus.audience')

    .controller('AudienceLandingCtrl', ['AudienceService', 'StatusService', function (AudienceService, StatusService) {
        var vm = this;

        StatusService.getMainLandingCategories()
            .success(function (data) {

                var landing = {labels: [], series: ['main landing categories'], data: []}; // pie

                var i,
                    n;

                for (i = 0, n = data.length; i < n; i++) {
                    landing.labels.push(data[i].name);
                    landing.data.push(data[i].dup);
                }

                vm.landingCategories = landing;
                vm.landingCategoryList = data;

            });


        vm.getLandingResultByCategory = function (categoryName) {

            AudienceService.getLandingPagesByCategory(categoryName)
                .success(function (data) {
                    // todo: no data from service
                    vm.selectedLandingPages = data;
                });
        };

    }]);