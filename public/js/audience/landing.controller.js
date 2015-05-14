angular.module('ifocus.audience')

    .controller('AudienceLandingCtrl', function() {
        var vm = this;

        vm.landingCategories = {
            labels: ['Car','watch','LCD','Pet','Allure', 'Supplier', 'Mobile Phone'],
            data: [[65, 59, 90, 81, 44, 120, 50]]
        };

        vm.landingPages = [
            {url:'/', dup: 1000},
            {url:'/search', dup: 900},
            {url:'/category', dup: 400},
            {url:'/product', dup: 330},
            {url:'/ad', dup: 220},
            {url:'/product1', dup: 100},
            {url:'/ad2', dup: 100},
            {url:'/ad2', dup: 10},
            {url:'/ad2', dup: 10},
            {url:'/ad2', dup: 10}
        ];

        vm.landingRefers = [
            {url:'google.com', dup: 1000},
            {url:'baidu.com', dup: 900},
            {url:'-', dup: 800},
            {url:'bing.com', dup: 400},
            {url:'yahoo.com', dup: 300}
        ];

        // add business logic
        vm.getLandingResultByRef = function(url) {

            vm.selectedRefLanding = {
                landingPages: [
                    {url:'/category', dup: 400},
                    {url:'/product', dup: 330},
                    {url:'/ad', dup: 220},
                    {url:'/product1', dup: 100},
                    {url:'/ad2', dup: 100},
                    {url:'/ad2', dup: 10}
                ],
                landingCategories: {
                    labels: ['Car','watch','LCD','Pet','Supplier', 'Mobile Phone'],
                    data: [[65, 90, 81, 44, 120, 50]]
                }
            }

        };

    });