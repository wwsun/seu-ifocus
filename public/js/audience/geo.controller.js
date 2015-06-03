angular.module('ifocus.audience', ['chart.js'])

    .controller('AudienceGeoCtrl', ['AudienceService', 'StatusService', function (AudienceService, StatusService) {
        var vm = this;

        vm.mainCountriesTrend = {labels: [], series: [], data: []};

        StatusService.getCountriesDistribution()
            .success(function (data) {
                var countryList = {
                    labels: [],
                    series: ['user flow'],
                    data: [[]]
                };

                var i,
                    n;

                for (i = 0, n = data.length; i < n; i++) {
                    countryList.labels.push(data[i].name);
                    countryList.data[0].push(data[i].dup);

                    // display top4 countries distribution
                    if (i < 4) {
                        displayMainCountryDistribution(data[i].name);
                    }
                }

                vm.geoDistribution = countryList;
            });


        AudienceService.getCountriesGeoDetail()
            .success(function (data) {
                vm.geoDistributionDetail = data;
            });


        function displayMainCountryDistribution(country) {
            AudienceService.getDistributionByCountry(country)
                .success(function (data) {
                    vm.mainCountriesTrend.labels = data.hour;
                    vm.mainCountriesTrend.series.push(country);
                    vm.mainCountriesTrend.data.push(data.dup);
                });
        }

    }]);