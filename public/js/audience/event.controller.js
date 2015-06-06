angular.module('ifocus.audience')

    .controller('AudienceEventCtrl', function() {
        var vm = this;

        vm.overviewDistribution = {
            labels: ['product price', 'product gallery', 'product comment', 'product detail'],
            data: [135, 70, 150, 170]
        };

        vm.clickDistribution = {
            labels: ['product price', 'product gallery', 'product comment', 'product detail'],
            data:[45, 30, 60, 70]
        };

        vm.mouseDistribution = {
            labels: ['product price', 'product gallery', 'product comment', 'product detail'],
            data:[50, 20, 30, 60]
        };

        vm.scrollDistribution = {
            labels: ['product price', 'product gallery', 'product comment', 'product detail'],
            data:[40, 20, 60, 40]
        };

        vm.getHotPagesBySemantics = function(semantic) {
            console.log(semantic);
            return [
                {url:'http://shjtig.en.made-in-china.com/product/QoMmbBauYwpY/China-Fleetguard-Element-Fuel-Filter-Ff5332.html', dup: 40},
                {url:'http://shjtig.en.made-in-china.com/product/QoMmbBauYwpY/China-Fleetguard-Element-Fuel-Filter-Ff5335.html', dup: 30},
                {url:'http://shjtig.en.made-in-china.com/product/QoMmbBauYwpY/China-Fleetguard-Element-Fuel-Filter-Ff5132.html', dup: 22},
                {url:'http://shjtig.en.made-in-china.com/product/QoMmbBauYwpY/China-Fleetguard-Element-Fuel-Filter-Ff5333.html', dup: 11},
                {url:'http://shjtig.en.made-in-china.com/product/QoMmbBauYwpY/China-Fleetguard-Element-Fuel-Filter-Ff5332.html', dup: 8}
            ];
        };

        // todo: semantics为两级联动下拉列表

        vm.hotPages = vm.getHotPagesBySemantics('oil');
    });