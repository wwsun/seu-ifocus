angular.module('ifocus.audience')

    .controller('AudienceFormCtrl', ['AudienceService', 'StatusService', function (AudienceService, StatusService) {
        var vm = this;

        AudienceService.getFormChange()
            .success(function (data) {

                var formChange = {labels: [], series: ['Form Change'], data: []}; // pie

                var i,
                    n;

                for (i = 0, n = data.length; i < n; i++) {
                    formChange.labels.push(data[i].type);
                    formChange.data.push(data[i].nums);
                }

                vm.formChange = formChange;

            });

        AudienceService.getFormEmpty()
            .success(function (data) {

                var formEmpty = {labels: [], series: ['Form Empty'], data: []}; // pie

                var i,
                    n;

                for (i = 0, n = data.length; i < n; i++) {
                    formEmpty.labels.push(data[i].type);
                    formEmpty.data.push(data[i].nums);
                }

                vm.formEmpty = formEmpty;

            });

        AudienceService.getFormAvgTimeCost()
            .success(function (data) {

                vm.formAvgTimeCost = data; // data format

            });

    }]);