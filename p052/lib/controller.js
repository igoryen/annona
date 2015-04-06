angular.module('notesApp', [])
  .controller('MainCtrl', [function(){
      var self = this;
    
      self.submit1 = function(){
        var user = {username: self.username, password: self.password};
        console.log('Form 1 submit with ', user);
      };
      
      self.submit2 = function(){
        console.log('Form 2 submit with ', self.user);
      };
    
  }]);