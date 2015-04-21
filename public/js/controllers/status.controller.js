angular.module('ifocus.statusControllers', ['chart.js'])

    .controller('StatusCtrl', function () {

        var vm = this;

        // mock data todo: using RESTfull call
        vm.today = {
            labels: [0,2,4,6,8,10,12,14,16,18,20,22,24],
            series: ['visits'],
            data: [[20,30,40,50,30,20,60,20,20,10,20,50,10]]
        };

        // mock data todo: using RESTful call
        vm.week = {
            labels: [-6, -5, -4, -3, -2, -1, 0],
            series: ['visits'],
            data: [[500, 600, 200, 300, 500, 400, 600]]
        };

        // mock data todo: using RESTful call
        vm.interests = {
            url: [
                {name:'/', dup: 200},
                {name:'/search', dup: 100}
            ],
            type: [
                {name:'home', dup: 200},
                {name:'search', dup: 300}
            ]
        };

        // mock data todo: using RESTful call
        vm.dwellTime = {
            labels: [8, 5, 4, 2, 1, 3],
            series: ['minutes'],
            data: [10, 15, 20, 50, 10, 20] // percent
        };

        // todo: using real data
        vm.userSources = {
            source: [
                {name:'baidu.com', dup: 200},
                {name:'google.com', dup: 500},
                {name:'sogou.com', dup: 100}
            ],
            landing: [
                {name:'/', dup: 200},
                {name:'/product/a', dup: 300},
                {name:'/product/b', dup: 200}
            ]
        };

        // todo: using real data
        vm.dropoff = {
            url: [
                {name: '/', dup: 50}, // percent
                {name: '/search', dup: 30},
                {name: '/ad', dup: 20}
            ],
            type: [
                {name: 'home', dup: 60},  // percent
                {name: 'search', dup: 20},
                {name: 'product', dup: 50}
            ]
        };

        // todo: using real data
        vm.productTypeDistribution = {
            labels: ['Car','watch','LCD','Pet','Allure'],
            data: [[65, 59, 90, 81, 44]]
        };

        // todo: using real data
        vm.frequentPages = [
            {name: '/', dup: 50}, // percent
            {name: '/search', dup: 30},
            {name: '/ad', dup: 20}
        ];

        // todo: using real data
        vm.geoDistribution = {
            labels: ['China', 'India', 'USA', 'Taiwan', 'Hongkong', 'Japan'],
            series: ['user flow'],
            data: [[200, 500, 320, 100, 120, 300]]
        };


        vm.interestsType = 'type'; // set default display type
        vm.sourceType = 'source';
        vm.dropoffType = 'type';

        vm.setDisplayType = function(type) {
            if (type==='type' || type==='url') {
                vm.interestsType = type;
            }
        };

        vm.setDropOffType = function (type) {
            if (type==='type' || type==='url') {
                vm.dropoffType = type;
            }
        };

        vm.setSourceType = function(type) {
            if (type==='source' || type==='landing') {
                vm.sourceType = type;
            }
        };

    });