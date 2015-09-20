angular.module('ifocus.jump', ['chart.js'])
  .controller('FlowJumpCtrl', ['FlowJumpService', function (FlowJumpService) {

    var vm = this;

    vm.jumpInfo = {
      topPages: [
        {url: 'http://foo/bar', nums: 20},
        {url: 'http://foo/bar', nums: 10},
        {url: 'http://foo/bar', nums: 5}
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


    vm.getJumpingDataByStage = function (stage) {

      FlowJumpService.fetchJumpingDataByStage(stage).success(function (data) {
        vm.jumpInfo.topPages = data[0].topPages.slice(0, 5);

        var cateArr = data[0].cateDistribution.slice(0, 5);
        var newCateDist = {
          labels: [],
          data: [[]]
        };

        var i;

        for (i=0; i< 5; i++) {
          newCateDist.labels.push(cateArr[i].category);
          newCateDist.data[0].push(cateArr[i].nums);
        }

        vm.jumpInfo.cateDistribution = newCateDist;

        //vm.jumpInfo.cateDistribution = data[0].cateDistribution.slice(0, 5);
      });
    };

  }]);