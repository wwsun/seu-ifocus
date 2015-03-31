/**
 * Created by Weiwei on 2015/3/31.
 */

angular.module('SessionCtrl', []).controller('SessionPathController', function(graphData) {

    var vm = this;
    vm.$inject = ['graphData'];

    vm.tagline = 'This is the admin page';

    vm.knowledge = {
        level1: ['Homepage', 'Search', 'Product', 'Ad']
    };

    vm.flowGraph = graphData.flowData;

    vm.nodeDetail = {
        labels: ["Through", "Drop-off"],
        data: [800, 200]
    };
});