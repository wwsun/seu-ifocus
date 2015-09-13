angular.module('ifocus.sessionController', [])

    .controller('SessionReplayCtrl', ['SessionService', function (SessionService) {
        var vm = this;

        SessionService.getSessionSequenceByID()
            .success(function (data) {

                vm.sessionSequence = data;

            });

    }]);