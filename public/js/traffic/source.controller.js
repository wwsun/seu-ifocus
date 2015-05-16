angular.module('ifocus.traffic', [])

    .controller('TrafficSourceCtrl', function() {

        var vm = this;


        vm.languageDistribution = {
            labels: ['Chinese', 'English', 'Japanese', 'Russian', 'Others'],
            data: [600, 900, 300, 400, 100]
        };

        vm.websiteDistribution = {
            labels: ['Search Engine', 'Direct', 'Others' ],
            data: [400, 300, 100]
        };

        vm.countryDistribution = {
            labels: ['China','Russia','Japan','India', 'Others'],
            data: [500, 300, 400, 100, 200]
        };

    });