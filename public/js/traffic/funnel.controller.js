angular.module('ifocus.traffic')

    .controller('TrafficFunnelCtrl', ['TrafficService', function (TrafficService) {

        var vm = this;

        TrafficService.getConversionTargetList('2014-08-10')
            .success(function (data) {
                vm.conversionTargetList = data;
            });

        TrafficService.getConversionFunnel('2014-08-10')
            .success(function (data) {
                vm.conversionFunnel = data;
            });

    }]);