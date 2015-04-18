/**
 * Created by Weiwei on 2015/3/31.
 */

angular.module('ifocus.sessionControllers', [])

    .controller('SessionPathCtrl', function (sessionPathData) {

        var vm = this;

        vm.knowledge = {
            level1: ['Homepage', 'Search', 'Product', 'Ad']
        };

        vm.flowGraph = sessionPathData.flowData;

        vm.clickedNode = {
            labels: ["Through", "Drop-off"],
            in_degree: 1,
            out_degree: 1
        };

        vm.hotpage = {
            "highdrop": [{
                "url": "www.made-in-china.com/",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 245,
                "land": 0
            }, {
                "url": "ionicbuilder.en.made-in-china.com/",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 103,
                "land": 0
            }, {
                "url": "www.made-in-china.com/productdirectory.do",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 89,
                "land": 0
            }, {
                "url": "www.made-in-china.com/prod/catlist/",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 37,
                "land": 0
            }, {
                "url": "cbmcylinders.en.made-in-china.com/product-group/QoiJnxfyIrhN/ISO9809-GB5099-Seamless-Steel-Gas-Cylinders-catalog-1.html",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 11,
                "land": 0
            }, {
                "url": "sourcing.made-in-china.com/",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 8,
                "land": 0
            }, {
                "url": "www.made-in-china.com/aboutus/contact/",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 8,
                "land": 0
            }, {
                "url": "www.made-in-china.com/china-products/Zhejiang_Ningbo-Car_Battery_auto_Batteries-2.html",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 8,
                "land": 0
            }, {
                "url": "keywordsuggestions.made-in-china.com/suggest/getProdSuggest.do",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 7,
                "land": 0
            }, {"url": "lightlink.en.made-in-china.com/", "out_degree": 0, "in_degree": 0, "drop": 7, "land": 0}],
            "mainland": [{
                "url": "membercenter.made-in-china.com/member/main/",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 0,
                "land": 335
            }, {
                "url": "www.made-in-china.com/",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 0,
                "land": 311
            }, {
                "url": "membercenter.made-in-china.com/user.do",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 0,
                "land": 242
            }, {
                "url": "membercenter.made-in-china.com/company.do",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 0,
                "land": 109
            }, {
                "url": "ionicbuilder.en.made-in-china.com/",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 0,
                "land": 103
            }, {
                "url": "www.made-in-china.com/companysearch.do",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 0,
                "land": 75
            }, {
                "url": "www.made-in-china.com/",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 0,
                "land": 62
            }, {
                "url": "www.made-in-china.com/productdirectory.do",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 0,
                "land": 34
            }, {
                "url": "www.made-in-china.com/prod/catlist/",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 0,
                "land": 29
            }, {
                "url": "www.made-in-china.com/products-search/hot-china-products/Handbags.html",
                "out_degree": 0,
                "in_degree": 0,
                "drop": 0,
                "land": 19
            }]
        };
    })

    .controller('SingleSessionReplayCtrl', function ($http) {
        var vm = this;

        vm.graph = [];

        vm.loadSequenceData = function () {
            $http.get('data/single-replay.json').success(function (data) {
                vm.sessionSequence = data;
            });
        };

        vm.loadGraphData = function () {
            $http.get('data/single.json').success(function (data) {
                angular.copy(data, vm.graph);
                //vm.graph = data;
            });
        };

        vm.loadSequenceData();
        vm.loadGraphData();
    });