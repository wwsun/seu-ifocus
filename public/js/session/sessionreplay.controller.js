angular.module('ifocus.sessionController', [])

  .controller('SessionReplayCtrl', ['SessionService', function (SessionService) {
    var vm = this;

    SessionService.getSessionSequenceByID()
      .success(function (data) {

        console.log(data);

        var result = data.map(function (item) {

          if (item.url === '-') return item;

          item.product = '';
          item.product = item.url.split('/')[2].split('.')[0];

          return item;
        });

        vm.sessionSequence = result;

      });

    vm.pageDetailByUrl = {
      labels: ["服务", "评价", "价格", "商品描述"],
      data: {
        click: [20, 30, 40, 10],
        hover: [30, 40, 15, 15]
      }

    };

  }]);