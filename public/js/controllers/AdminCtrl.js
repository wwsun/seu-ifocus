/**
 * TODO display configuration panel to set the view level
 * TODO display knowledge layers
 */
angular.module('AdminCtrl', []).controller('AdminController', function() {

    var vm = this;
    vm.tagline = 'This is the admin page';

    vm.graph = {
        nodes: 10,
        links: 20,
        level: 4
    };

    vm.knowledge = {
        level1:['Homepage', 'Search', 'Product', 'Ad']
    };

    vm.flowGraph = {"nodes":[{"url":"2837","name":0},{"url":"6030","name":1},{"url":"2582","name":2},{"url":"418","name":3},{"url":"486","name":4},{"url":"7633","name":5},{"url":"1195","name":6},{"url":"5380","name":7},{"url":"1775","name":8},{"url":"3718","name":9},{"url":"4382","name":10},{"url":"6624","name":11},{"url":"7633","name":12}],"links":[{"value":25,"source":0,"target":1},{"value":1,"source":1,"target":2},{"value":1,"source":1,"target":3},{"value":1,"source":1,"target":4},{"value":20,"source":1,"target":5},{"value":1,"source":2,"target":6},{"value":1,"source":3,"target":7},{"value":1,"source":4,"target":8},{"value":1,"source":5,"target":9},{"value":1,"source":5,"target":10},{"value":2,"source":5,"target":11},{"value":8,"source":5,"target":12}]};

});