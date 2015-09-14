angular.module('ifocus.jump', ['chart.js'])
  .controller('FlowJumpCtrl', ['FlowJumpService', function (FlowJumpService) {

    var vm = this;

    vm.jumpInfo = {
      topPages: [
        {url: 'http://foo/bar', rank: 20},
        {url: 'http://foo/bar', rank: 10},
        {url: 'http://foo/bar', rank: 5}
      ],

      cateDistribution: {
        labels: ['Car', 'watch', 'LCD', 'Pet', 'Allure'],
        data: [[65, 59, 90, 81, 44]]
      },

      visitTrend: {
        labels: [0, 1, 2, 3],
        series: ['visits'],
        data: [[500, 400, 200, 30]]
      }
    };


    vm.getJumpingData = function (stage) {


      FlowJumpService.fetchJumpingDataByStage(stage)
        .success(function (data) {
          // todo:

        });

      console.log('hello');
    };

  }]);