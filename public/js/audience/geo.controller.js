angular.module('ifocus.audience', ['chart.js'])

    .constant('baseUrl', 'http://223.3.66.57:8088/vislog-restful/api/')
    .controller('AudienceGeoCtrl', function($http, baseUrl) {
        var vm = this;

        vm.geoDistribution = {
            labels: ['China', 'India', 'USA', 'Taiwan', 'Hongkong', 'Japan', 'Japan', 'c4', 'c5', 'c6', 'c7'],
            series: ['user flow'],
            data: [[200, 500, 320, 100, 120, 300, 400, 300, 200, 100, 300]]
        };

        vm.mainCountriesTrend = {
            labels: ['-6', '-5', '-4', '-3', '-2', '-1', '0'],
            series: ['China', 'Japan', 'India'],
            data: [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90],
                [30, 20, 80, 99, 26, 17, 30]
            ]
        };

        vm.geoDistributionDetail = [
            //{name:'China', sessions: 300, bounce: '30%', pages:4, avgduration: 3, goal:0},
            //{name:'India', sessions: 220, bounce: '30%', pages:4, avgduration: 3, goal:0},
            //{name:'USA', sessions: 330, bounce: '30%', pages:4, avgduration: 3, goal:0},
            //{name:'Taiwan', sessions: 340, bounce: '30%', pages:4, avgduration: 3, goal:0},
            //{name:'Hongkong', sessions: 320, bounce: '30%', pages:4, avgduration: 3, goal:0},
            //{name:'Japan', sessions: 310, bounce: '30%', pages:4, avgduration: 3, goal:0},
            //{name:'c4', sessions: 100, bounce: '30%', pages:4, avgduration: 3, goal:0},
            //{name:'c5', sessions: 200, bounce: '30%', pages:4, avgduration: 3, goal:0},
            //{name:'c6', sessions: 300, bounce: '30%', pages:4, avgduration: 3, goal:0},
            //{name:'c7', sessions: 300, bounce: '30%', pages:4, avgduration: 3, goal:0},
            //{name:'c8', sessions: 300, bounce: '30%', pages:4, avgduration: 3, goal:0}
        ];

        // todo: C
        vm.getCountryDistribution = function () {
            $http.jsonp(baseUrl + 'sessions/overview/sources/countries').success(function (data) {
                //console.log(data);
                vm.geoDistributionDetail = data;
            });
        };


        vm.getCountryDistribution();
    });