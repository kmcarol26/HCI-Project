(function () {
    angular
        .module("TOHMS")
        .controller("studentDayController", studentDayController);

    function studentDayController($rootScope, $scope, $routeParams, $location) {
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
                    id:'1',
                    title: "File Upload Issue",
                    start: '2018-11-22T12:00:00',
                    end: '2018-11-22T12:20:00',
                    color: 'darkcyan',
                    editable: false,
                    public: true,
                    selectable : false
                });
                $rootScope.events.push({
                    id:'2',
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
                selectOverlap: false,
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
                    if(eventObj.public && (eventObj.id=='1' ||  eventObj.id=='2'))
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
                            title: "Unavailable time slot",
                            content: "This slot is booked by someone else",
                            trigger: 'hover',
                            placement: 'top',
                            container: 'body'
                        });
                    }
                    else if((eventObj.public==false) && eventObj.id!='1' &&  eventObj.id!='2')
                    {
                        $el.popover({
                            title: "Your Private Appointment",
                            content: "This is your private appointment and is visible only to you",
                            trigger: 'hover',
                            placement: 'top',
                            container: 'body'
                        });
                    }


                    else if(eventObj.public && eventObj.id!='1' &&  eventObj.id!='2')
                    {
                        $el.popover({
                            title: "Your Public Appointment",
                            content: "This is your public appointment and is visible to other students.",
                            trigger: 'hover',
                            placement: 'top',
                            container: 'body'
                        });
                    }

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

            $('[data-toggle="tooltip"]').tooltip();

        }
        init();


        function openPublicAppointment(event){
            event.category = "HW1";
            event.description = "Unable to upload output jar files to remote repository. Could you explain the procedure?" +
                " Thanks.";
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

        function findQuestions(term){
            $('a.fc-time-grid-event.fc-v-event.fc-event.fc-start.fc-end').css({"border-color": "red", "border-width": "thick"});
        }
    }

})();