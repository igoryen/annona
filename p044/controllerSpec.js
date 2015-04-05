describe('Controller: ListController', function(){

  beforeEach(module('NotesApp'));

  var controller;

  beforeEach(inject(function($controller){
    controller = $controller('ListController');
  }));


  it('should have items available on load', function(){
    expect(controller.items).toEqual([
      {id: 1, label: 'First',  done: true },
      {id: 2, label: 'Second', done: false}
    ]);
  });

  it('should have highlight items based on state', function(){
    var item = {id: 1, label: 'First',  done: true };
    
    var actualClass = controller.getDoneClass(item);
    expect(actualClass.finished).toBeTruthy();
    expect(actualClass.unfinished).toBeFalsy();

    item.done = false;
    var actualClass = controller.getDoneClass(item);
    expect(actualClass.finished).toBeFalsy();
    expect(actualClass.unfinished).toBeTruthy();

  });

});