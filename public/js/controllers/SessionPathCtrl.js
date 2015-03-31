/**
 * Created by Weiwei on 2015/3/31.
 */

angular.module('SessionCtrl', []).controller('SessionPathController', function (graphData) {

    var vm = this;
    vm.$inject = ['graphData'];


    vm.tagline = 'This is the admin page';

    vm.knowledge = {
        level1: ['Homepage', 'Search', 'Product', 'Ad']
    };

    vm.flowGraph = graphData.flowData;

    vm.clickedNode = {
        labels: ["Through", "Drop-off"],
        in_degree: 1,
        out_degree: 1
    };

    vm.highDropOff = [
        {url: "www.made-in-china.com", drop: 60},
        {url: "www.made-in-china.com/search", drop: 55},
        {url: "www.made-in-china.com/category", drop: 50},
        {url: "www.made-in-china.com/product", drop: 40}
    ];
});