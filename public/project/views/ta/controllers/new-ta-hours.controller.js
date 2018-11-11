
(function () {
    angular
        .module("TOHMS")
        .controller("newHoursDayController", newHoursDayController);

    function newHoursDayController($rootScope, $scope, $routeParams, $location) {
        var vm = this;
        vm.openPublicAppointment = openPublicAppointment;
        vm.openPrivateAppointment=openPrivateAppointment;
        vm.findQuestions=findQuestions;
        vm.uid = $routeParams['uid'];


        function init() {
            $('.popover.in').remove();
            if(vm.uid == 1)
            {
                vm.booked = "Appointment Booked!";
            }
            vm.minTime = "11:00:00";
            vm.maxTime = "13:00:00";
            vm.ed = '2018-11-22T12:20:00';
            vm.sd = '2018-11-22T12:00:00';


            if(vm.uid == -1) {
                $rootScope.events=[];


                $rootScope.events.push({
                    title: "File Upload Issue",
                    start: '2018-11-22T12:00:00',
                    end: '2018-11-22T12:20:00',
                    color: 'darkcyan',
                    editable: false,
                    public: true,
                    selectable : false
                });
                $rootScope.events.push({
                    start: '2018-11-22T11:05:00',
                    end: '2018-11-22T11:15:00',
                    color: 'black',
                    editable: false,
                    rendering: 'background',
                    public: false,
                    bg : true
                });

            }


            $('#calendar').fullCalendar({
                allDaySlot:false,
                height:600,
                slotDuration:'00:05:00',
                defaultDate: "2018-11-22",
                defaultView: 'agendaDay',
                selectable: true,
                timezone: 'local',
                eventOverlap: false,
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'agendaDay'
                },
                events : $rootScope.events,
                minTime : vm.minTime,
                maxTime : vm.maxTime,

                eventRender: function(eventObj, $el) {
                    if(eventObj.public)
                        $el.popover({
                            title: "Public Appointment",
                            content: "Click on this slot to join a group appointment for the question.",
                            trigger: 'hover',
                            placement: 'top',
                            container: 'body'
                        });

                    else if(eventObj.rendering == 'background')
                    {
                        $el.popover({
                            title: "Private Appointment",
                            content: "This slot is unavailable as it was booked by someone else",
                            trigger: 'hover',
                            placement: 'top',
                            container: 'body'
                        });
                    }

                    else
                        $el.popover({
                            title: "Private Appointment",
                            content: "This appointment is only visible to you",
                            trigger: 'hover',
                            placement: 'top',
                            container: 'body'
                        });

                },

                eventClick: function(event, jsEvent, view) {

                    if(event.public)
                        vm.openPublicAppointment(event);

                },
                select: function(startDate, endDate) {
                    console.log(vm.sd);
                    console.log(vm.ed);
                    console.log(startDate._d);

                    vm.openPrivateAppointment(startDate._d, endDate._d);
                }
            });



            var $input = $('<button class="btn btn-warning btn-sm">HW1</button>');
            var $e = $('a.fc-time-grid-event.fc-v-event.fc-event.fc-start.fc-end');
            $input.appendTo($e);

        }
        init();


        function openPublicAppointment(event){
            event.category = "HW1";
            event.description = "Unable to upload output jar files to remote repository. Could you explain the procedure?" +
                " Thanks.";
            $rootScope.publicEvent = event;
            $location.url('/taBookPublic/');
            $scope.$apply();
        }

        function openPrivateAppointment(s,e){
            var event = {startTime : s, endTime : e};
            $rootScope.privateEvent = event;
            $location.url('/taBookPrivate/');
            $scope.$apply();
        }

        function findQuestions(term){
            $('a.fc-time-grid-event.fc-v-event.fc-event.fc-start.fc-end').css({"border-color": "red", "border-width": "thick"});
        }
    }

})();