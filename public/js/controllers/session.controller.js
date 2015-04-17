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

    .controller('SingleSessionReplayCtrl', function (singleReplayData) {
        var vm = this;

        //vm.$inject = ['singleReplayData'];

        vm.sessionSequence =
            [{"url":"www.google.com/aclk","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"-"},{"url":"www.made-in-china.com/products-search/hot-china-products/Olive_Oil.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-09 23:56:40"},{"url":"www.made-in-china.com/products-search/find-china-products/0b0nolimit/Olive_Oil-2.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-09 23:56:49"},{"url":"www.made-in-china.com/products-search/hot-china-products/Flowers.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 02:51:13"},{"url":"www.made-in-china.com/products-search/find-china-products/0b0nolimit/Flowers-2.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 02:51:23"},{"url":"yimeike.en.made-in-china.com/product/mKextvAuTEWa/China-Beautiful-Yiwu-Imitation-Flowers.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 02:52:16"},{"url":"yimeike.en.made-in-china.com/product-group/VeIxlvfMbpWb/Artificial-Flower-catalog-1.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 02:52:33"},{"url":"yimeike.en.made-in-china.com/product-group/VeIxlvfMbpWb/Artificial-Flower-catalog-2.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 02:52:38"},{"url":"buildshion.en.made-in-china.com/product/ySoJCKOMSRVG/China-2014-New-Good-Quality-Handmade-Decorative-Artificial-Flower-BH121008-.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 02:53:54"},{"url":"www.made-in-china.com/products-search/hot-china-products/Art_Flower.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 02:55:58"},{"url":"www.made-in-china.com/products-search/find-china-products/0b0nolimit/Art_Flower-2.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 02:56:05"},{"url":"www.made-in-china.com/manufacturers/flowers-and-fruits.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 02:57:24"},{"url":"www.made-in-china.com/","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 02:57:26"},{"url":"www.made-in-china.com/products-search/hot-china-products/Artificial_Flower.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 03:00:26"},{"url":"www.made-in-china.com/products-search/find-china-products/0b0nolimit/Artificial_Flower-2.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 03:00:34"},{"url":"tongyajituan.en.made-in-china.com/","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 03:01:03"},{"url":"tongyajituan.en.made-in-china.com/product-group/zqcxFINuXTUM/Artificial-Flowers-catalog-1.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 03:01:29"},{"url":"tongyajituan.en.made-in-china.com/custom/JQJEnxmyGxLE/My-Video-1.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 03:02:39"},{"url":"tongyajituan.en.made-in-china.com/product/VeRQrKiSABYd/China-Long-Sterm-Artificial-Flowers.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 03:03:40"},{"url":"tongyajituan.en.made-in-china.com/product/AoYQralbJBpZ/China-Wedding-Flowers-for-Bride.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 03:04:21"},{"url":"www.made-in-china.com/","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 03:09:48"},{"url":"www.made-in-china.com/products/catlist/listsubcat/120/00/mic/Construction_Decoration.html","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 03:10:44"},{"url":"www.made-in-china.com/","out_degree":0,"in_degree":0,"drop":0,"land":0,"datetime":"2014-08-10 03:15:57"}];

        vm.graph = singleReplayData.pathData;
    });