angular.module('ifocus.overviewControllers', ["chart.js"])

    .controller('OverviewCtrl', function () {

        var vm = this;

        vm.currentUser = 998;
        vm.visitTrendLabels = ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'];
        vm.series = ['Visit Trends'];

        vm.visitTrend = [
            [65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86, 22]
        ];

        vm.top20 = [
            {'url': 'www.made-in-china.com', weight: '70'},
            {'url': 'www.made-in-china.com/search', weight: '70'},
            {'url': 'www.made-in-china.com/product', weight: '50'},
            {'url': 'www.made-in-china.com/cateA', weight: '40'},
            {'url': 'www.made-in-china.com/cateB', weight: '30'},
            {'url': 'www.made-in-china.com/ad', weight: '30'},
            {'url': 'www.made-in-china.com/event', weight: '30'},
            {'url': 'www.made-in-china.com/cateC', weight: '20'},
            {'url': 'www.made-in-china.com/cateD', weight: '16'},
            {'url': 'www.made-in-china.com/cateE', weight: '14'},
            {'url': 'www.made-in-china.com/cateF', weight: '10'}
        ];

    });