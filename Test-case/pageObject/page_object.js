var AngularHomePage = function(){
var nameInput = element(by.model('yourName'));
var greetingText = element(by.binding('yourName'));
var todoText = element(by.model('todoList.todoText'));
var button = element(by.css('body > div.container > div:nth-child(5) > div.span4 > div.well.ng-scope > div > form > input.btn-primary'));
this.get = function(){
    browser.get('http://www.angularjs.org');
};

this.setName = function(name){
nameInput.sendKeys(name)
};

this.greeting = function(){
    return greetingText.getText();
};
/*
this.addTodo = function(todo){
    todoText.sendkeys(todo);
};

this.clickAction = function(){
    button.click();
};
*/
};

module.exports = new AngularHomePage();