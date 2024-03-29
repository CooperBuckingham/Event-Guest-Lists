services

 .factory('users', function(){
    var r = {};

    //TODO *** unhack
    // r.currentUser = {};
    // r.currentUser.name = "FAKE.USERNAME@FAKE.COM";
    // r.currentUser.id = "123";

    r.isAuthenticated = false;

    r.primary = {currentToolbarButton: "groups"};
    r.secondary = {currentToolbarButton: "groups"};

    r.primary.currentSelection = {id: "0", name: "Demo User" };
    r.secondary.currentSelection = {id: "0", name: "Demo User" };

    r.cache = {};

    r.cache.headers = [["Name", "name", 4], ["Email", "email", 4]];

    r.cache.orgsUsers = [
                     {id: 1, name: "USER1", email: "user1@user.com", date: "10/10/10", inGroups: "9"},
                     {id: 1, name: "USER2", email: "user2@user.com", date: "11/11/11", inGroups: "8"},
                     {id: 1, name: "USER3", email: "user3@user.com", date: "12/12/12", inGroups: "7"},
                   ];

    return r;
  });
