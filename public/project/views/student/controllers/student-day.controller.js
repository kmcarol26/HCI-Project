(function () {
    angular
        .module("TOHMS")
        .controller("studentDayController", studentDayController);

    function studentDayController($rootScope, $scope, $routeParams, $location) {
        var vm = this;
        vm.openPublicAppointment = openPublicAppointment;
        vm.openPrivateAppointment=openPrivateAppointment;
        vm.uid = $routeParams['uid'];



        function init() {
            if(vm.uid == 1)
            {
                vm.booked = "Appointment Booked!";
            }
            vm.minTime = "10:00:00";
            vm.maxTime = "15:00:00";

            vm.events = [
                {
                    start:'2018-11-22T10:00:00',
                    end: '2018-11-22T11:00:00',
                    color: 'black',
                    editable: false,
                    rendering: 'background',
                    public: false
                },{
                    title: "File Upload Issue",
                    start: '2018-11-22T12:00:00',
                    end: '2018-11-22T12:40:00',
                    color:'darkcyan',
                    editable: false,
                    public: true
                }
            ];


            $('#calendar').fullCalendar({
                allDaySlot:false,
                defaultDate: "2018-11-22",
                defaultView: 'agendaDay',
                selectable: true,
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'agendaDay'
                },
                events : vm.events,
                minTime : vm.minTime,
                maxTime : vm.maxTime,
                dayClick: function(date, jsEvent, view) {

                    alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

                    // change the border color just for fun
                    $(this).css('border-color', 'red');

                },

                eventClick: function(event, jsEvent, view) {

                    if(event.public)
                    // change the border color just for fun
                        vm.openPublicAppointment(event);

                },
                select: function(startDate, endDate) {
                    vm.openPrivateAppointment(startDate, endDate);
                }
            });

            var $input = $('<button class="btn btn-warning btn-sm">HW1</button>');
            var $e = $('a.fc-time-grid-event.fc-v-event.fc-event.fc-start.fc-end');
            $input.appendTo($e);

        }
        init();


        function openPublicAppointment(event){
            event.category = "HW1";
            event.description = "How to solve this problem? Please help. Thanks";
            $rootScope.publicEvent = event;
            $location.url('/bookpublic/');
            $scope.$apply();
        }

        function openPrivateAppointment(s,e){
            var event = {startTime : s, endTime : e};
            $rootScope.privateEvent = event;
            $location.url('/bookprivate/');
            $scope.$apply();
        }

    }

})();