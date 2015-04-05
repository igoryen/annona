angular.module('notesApp',[])
  .controller('ListCtrl', [function(){

    var self = this;
    // 1
    self.items = [
      {id: 1, label: 'First',  done: true },
      {id: 2, label: 'Second', done: false}
    ];

    // 2
    self.getDoneClass = function(item){
      return {
        finished:    item.done,
        unfinished: !item.done
      };
    };
  }]);

  /*
  1. assign an array to the object of class controller, 
    to make the object available to the HTML
  2. a function to figure out the presentation logic
    it returns the classes to apply
    based on the state of the item is 'done' or '!done'
  */