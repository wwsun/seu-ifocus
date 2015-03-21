/**
 * TODO display configuration panel to set the view level
 * TODO display knowledge layers
 */
angular.module('AdminCtrl', []).controller('AdminController', function(graphData) {

    var vm = this;
    vm.$inject = ['graphData'];

    vm.tagline = 'This is the admin page';

    vm.knowledge = {
        level1: ['Homepage', 'Search', 'Product', 'Ad']
    };

    vm.flowGraph = graphData.flowData;
});