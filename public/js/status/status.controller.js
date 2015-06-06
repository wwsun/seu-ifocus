angular.module('ifocus.status', ['chart.js'])

    .controller('StatusCtrl', ['StatusService', function (StatusService) {

        var vm = this;

        StatusService.getOverviewStatusNumbers('2014-08-10')
            .success(function (data) {
                vm.statusNumbers = data; // data format
            });

        // one day session distribution
        StatusService.getSessionDistributionByDate('2014-08-10')
            .success(function (data) {
                vm.today = {
                    labels: data.hour,
                    series: ['visits'],
                    data: [data.dup]
                };
            });

        // geo distribution of user flow
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
                }

                vm.geoDistribution = countryList;
            });

        StatusService.getFrequentPages()
            .success(function (data) {
                vm.frequentPages = data;
            });

        StatusService.getFrequentCategories()
            .success(function (data) {
                var interestedCategories = {labels: [], series: ['interested categories'], data: [[]]};

                var i,
                    n;
                for (i = 0, n = data.length; i < n; i++) {
                    interestedCategories.labels.push(data[i].name);
                    interestedCategories.data[0].push(data[i].dup);
                }
                vm.interests = interestedCategories;
            });

        StatusService.getRefererSearchEngines()
            .success(function (data) {
                var contribution = {labels: [], series: ['search engine contribution'], data: []}; // pie

                var i,
                    n;

                for (i = 0, n = data.length; i < n; i++) {
                    contribution.labels.push(data[i].name);
                    contribution.data.push(data[i].dup);
                }

                vm.seContribution = contribution;
            });

        StatusService.getMainLandingCategories()
            .success(function (data) {

                var landing = {labels: [], series: ['main landing categories'], data: []}; // pie

                var i,
                    n;

                for (i = 0, n = data.length; i < n; i++) {
                    landing.labels.push(data[i].name);
                    landing.data.push(data[i].dup);
                }

                vm.mainLanding = landing;

            });

        StatusService.getMainDropOffCategories()
            .success(function (data) {
                var dropoff = {labels: [], series: ['main dropoff categories'], data: [[]]}; // pie

                var i,
                    n;

                for (i = 0, n = data.length; i < 7 && i < n; i++) {
                    dropoff.labels.push(data[i].name);
                    dropoff.data[0].push(data[i].dup);
                }

                vm.dropoff = dropoff;
            });

        // todo: using RESTful call to get week data
        vm.week = {
            labels: [-6, -5, -4, -3, -2, -1, 0],
            series: ['visits'],
            data: [[500, 600, 200, 300, 500, 400, 600]]
        };

        // todo: using RESTful call to get dwell data
        vm.dwellTime = {
            labels: [8, 5, 4, 2, 1, 3],
            series: ['minutes'],
            data: [10, 15, 20, 50, 10, 20] // percent
        };

        // todo: using real data to get product type distribution data
        vm.productTypeDistribution = {
            labels: ['Car', 'watch', 'LCD', 'Pet', 'Allure'],
            data: [[65, 59, 90, 81, 44]]
        };

        //vm.interestsType = 'type'; // set default display type
        //vm.sourceType = 'source';
        //vm.dropoffType = 'type';

        //vm.setDisplayType = function (type) {
        //    if (type === 'type' || type === 'url') {
        //        vm.interestsType = type;
        //    }
        //};
        //
        //vm.setDropOffType = function (type) {
        //    if (type === 'type' || type === 'url') {
        //        vm.dropoffType = type;
        //    }
        //};
        //
        //vm.setSourceType = function (type) {
        //    if (type === 'source' || type === 'landing') {
        //        vm.sourceType = type;
        //    }
        //};

    }]);