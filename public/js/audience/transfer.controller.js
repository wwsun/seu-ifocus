angular.module('ifocus.audience', ['chart.js'])

    .controller('TransferCtrl', ['AudienceService', 'StatusService', function (AudienceService, StatusService) {
        var vm = this;


        AudienceService.getTransferTargetList('2014-08-10')
            .success(function (data) {
                vm.transferTargetList = data;
            });


        

    }]);