angular.module('ifocus.traffic')

    .controller('TrafficConversionCtrl', function() {

        var vm = this;

        vm.inquiryTrends = {
            labels: [0,2,4,6,8,10,12,14,16,18,20,22,24],
            series: ['Inquiry Rate'],
            data: [[20,30,40,50,30,20,60,20,20,10,20,50,10]]
        };

        vm.inquiryNumbers = {
            total: 5630,
            inquiry: 300,
            rate: 5.4
        };

    });