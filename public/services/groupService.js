services

 .factory('groups', function(){
    var r = {};

    r.currentGroup = "DEFAULT GROUP";
    r.groupList = [
                    {name: "my special group", userCount: 7, listCount: 24, guestCount: 345},
                    {name: "ken fulk events", userCount: 2, listCount: 7, guestCount: 121},
                    {name: "theBestGroup", userCount: 66, listCount: 666, guestCount: 6666}
                  ];

    return r;
  });