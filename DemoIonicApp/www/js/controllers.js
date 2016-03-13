angular.module('starter.controllers', [])

// *** PC: Each route should have it's own controller and the controller can let you do many things
// The view files will interact with the controller and the controller will interact with the model.
.controller('DashCtrl', function($scope) {
  // *** PC: Define any variables you want with $scope. $scope is essentially the global variable for
  // this particular controller and this view (html file) but in the HTML, you don't have to write $scope.name
  // to access this variable, instead you just type 'name'. Check out tab-dash.html.
  $scope.userInfo = {
     firstname: '',
     //middlename: 'middlename',
     lastname: '',
     mothername:'',
     username: '',
     password: '',
     email: '',
     SSN: 0,
     state:'',
     gender:'',
     occ:'',
     membership:'',
     address:'',
     driver: 0,
     jfirstname: '',
     jmiddlename: '',
     jlastname: '',
     jaddress: '',
     jhomephone: '',
     jmobilephone: '',
     jemail:''
  };

   $scope.createUser = function(firstname,lastname,mothername,username,password,email,state,gender,occ,address,SSN,driver,jfirstname,jmiddlename,jlastname,jaddress,jhomephone,jmobilephone,jemail) {
     var Person = Parse.Object.extend("Person");
     var personInfo = new Person();

     personInfo.set("firstname", firstname);
     //personInfo.set("middlename", middlename);
     personInfo.set("lastname", lastname);
     personInfo.set("mothername", mothername);
     personInfo.set("username", username);
     personInfo.set("password", password);
     personInfo.set("email", email);
     personInfo.set("state", state);
     personInfo.set("gender", gender);
     personInfo.set("occupation", occ);
     personInfo.set("address", address);
     personInfo.set("SSN", Number(SSN));
     personInfo.set("driverslicense", Number(driver));
     personInfo.set("jfirstname", jfirstname);
     personInfo.set("jlastname", jlastname);
     personInfo.set("jmiddlename", jmiddlename);
     personInfo.set("jaddress", jaddress);
     personInfo.set("jhomephone", jhomephone);
     personInfo.set("jmobilephone", jmobilephone);
     personInfo.set("jemail", jemail);



     personInfo.save(null, {
       success: function(personInfo) {
  //       // Execute any logic that should take place after the object is saved.
           alert('New object created with objectId: ');
     },
         error: function(personInfo, error) {
  //   // Execute any logic that should take place if the save fails.
  //   // error is a Parse.Error with an error code and message.
         alert('Failed to create new object, with error code: ' + error.message);
         }
       });
     };


})

.controller('ChatsCtrl', function($scope, Chats) {
  // *** PC: You can call class functions for any factory (check out services.js).
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
