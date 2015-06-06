angular.module('ifocus.audience')

    .controller('AudienceSourceCtrl', ['AudienceService', 'StatusService', function (AudienceService, StatusService) {
        var vm = this;

        AudienceService.getDevicesDistribution()
            .success(function (data) {
                var devices = {labels: [], data: []};

                var i,
                    n;

                for (i = 0, n = data.length; i < n; i++) {
                    devices.labels.push(data[i].device);
                    devices.data.push(data[i].sum);
                }

                vm.deviceDistribution = devices;
            });

        AudienceService.getBrowsersDistribution()
            .success(function (data) {
                var browsers = {labels: [], data: []};

                var i,
                    n;

                for (i = 0, n = data.length; i < n; i++) {
                    browsers.labels.push(data[i].browser);
                    browsers.data.push(data[i].sum);
                }

                vm.browserDistribution = browsers;
            });

        StatusService.getRefererSearchEngines()
            .success(function (data) {
                var searchEngines = {labels: [], data: []};

                var i,
                    n;

                for (i = 0, n = data.length; i < n && i < 4; i++) {
                    searchEngines.labels.push(data[i].name);
                    searchEngines.data.push(data[i].dup);
                }

                vm.searchEngineDistribution = searchEngines;
                vm.referrerSources = data;
            });
    }]);