angular.module('ifocus.audience')

    .controller('AudienceSourceCtrl', function() {
        var vm = this;

        vm.deviceDistribution = {
            labels: ['Desktop', 'Tablet', 'Mobile'],
            data:[500, 320, 100]
        };

        vm.browserDistribution = {
            labels: ['IE', 'Chrome', 'Firefox', 'Safari'],
            data:[50, 30, 5, 15]
        };

        vm.searchEngineDistribution = {
            labels: ['Google', 'Baidu', 'Bing', 'Yahoo'],
            data:[50, 10, 15, 25]
        };

        vm.refererList = [
            {url:'http://google.com',date:'2013-14-122',target:'/'},
            {url:'http://google.com',date:'2013-14-122',target:'/search'},
            {url:'http://baidu.com',date:'2013-14-122',target:'/ad'},
            {url:'http://google.com',date:'2013-14-122',target:'/product'},
            {url:'http://bing.com',date:'2013-14-122',target:'/search'},
            {url:'http://foourl.com',date:'2013-14-122',target:'/'},
            {url:'http://google.com',date:'2013-14-122',target:'/comp'},
            {url:'http://webapp.com',date:'2013-14-122',target:'/detail'}
        ];
    });