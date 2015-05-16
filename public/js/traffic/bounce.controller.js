angular.module('ifocus.traffic')

    .controller('TrafficBounceCtrl', function() {

        var vm = this;

        vm.trafficBounceTrends = {
            labels: [-6, -5, -4, -3, -2, -1, 0],
            series: ['bounce rate'],
            data: [[50, 60, 20, 30, 50, 40, 80]]

        };

        vm.trafficBounceNumbers = {
            firstVisitBounceRate: 60,
            homepageBouneRate: 55,
            searchPageBounceRate: 33
        };

        // 主要的跳出点
        vm.mainBouncePages = [
            {url:'http://made-in-china.com', dup: 21},
            {url:'http://made-in-china.com/cate', dup: 20},
            {url:'http://made-in-china.com/prod', dup: 18}
        ];

        // 跳出点的语义（类别）分布
        vm.mainBounceCategory = {
            labels: ['Homepage', 'Insite Search', 'Product', 'Check In', 'List', 'S4', 'S5'],
            data:[[55, 30, 20, 15, 15, 14, 13]]
        };

    });