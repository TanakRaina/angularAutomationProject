var AngularHomePage = function(){
    browser.get('http://www.angularjs.org');
};

AngularHomePage.prototype = Object.create({},{
    yourName: {get : function(){return element(by.model('yourName'));} },
    typeName: {value : function(keys){return this.yourName.sendKeys(keys);}},
    greetingText:{get : function(){return element(by.binding('yourName')).getText();}},
    todoText:{get : function(){return element(by.model('todoList.todoText'));}},
    addButton:{get:function(){return element(by.css('[value="add"]'));}},
    addTodo:{value : function(todo){
        this.todoText.sendKeys(todo); 
        this.addButton.click();}}
})

module.exports = AngularHomePage;