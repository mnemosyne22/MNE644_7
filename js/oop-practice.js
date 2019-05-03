/*eslint-env browser*/

var props;

// 1.	Create two classes using constructor syntax, one called Cat and another called Dog. The former class should be created using a named declaration, and the latter should be created using an anonymous declaration.

// Named function
function Cat() {
    "use strict";
    this.name = "cat";
}

// Anonymous function
var Dog = function () {
    "use strict";
    this.name = "dog";
};

// 2.	Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.

var Cat_0 = new Cat();
var Dog_0 = new Dog();

// 3.	Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window. 

var Animal = function () {
    "use strict";
    this.name = "animal"; 
    this.done = function () { 
        return window.console.log("The Animal has been created"); 
    }; 
};

var animal_1 = new Animal();

animal_1.done();

// 4.   Revise code so the class accepts an argument and that value is what is displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.

var Animal = function (msg) {
    "use strict";
    this.name = "animal"; 
    this.done = function () { return window.console.log(msg); };
};

var animal_2 = new Animal("The Animal has been created");

animal_2.done();

// 5.   Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation.

var Animal_2 = function (type, breed, color, height, weight) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.weight = weight;
};

var Cat_2 = new Animal_2("Cat", "Himalayan", "Chocolate Point", "11 inches", "8 pounds");
var Dog_2 = new Animal_2("Dog", "Malamute", "Gray & White", "22 inches", "75 pounds");

 window.console.log(Cat_2.breed);
 window.console.log(Dog_2.height);

// 6.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

for (props in Cat_2) { 
  if (Cat_2.hasOwnProperty(props)) {
    window.console.log(props);
  }
}

for (props in Dog_2) {
  if (Dog_2.hasOwnProperty(props)) {
    window.console.log(props);
  }
}

// 7.   Create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

Animal_2.prototype.speak = function () {
    "use strict";
	if (this.type === "Cat") {
		return window.console.log("The " + this.color + " cat is meowing!");
	} else {
        return window.console.log("The " + this.color + " dog is barking!");
    }
};

Dog_2.speak();
Cat_2.speak();

// 8.	Convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”

var Animal_3 = function (type, breed, color, height, weight) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = weight;
    
	this.checkType = function () {
		if (this.type === "Cat") {
			return "cat";
		} else {
			return "dog";
		}
	};
	this.speak = function () {
        return window.console.log("The " + this.checkType() + " has made a noise!");
    };	
};

var Cat_3 = new Animal_3("Cat", "Siamese", "Brown", "10 inches", "9 pounds");
var Dog_3 = new Animal_3("Dog", "Havanese", "Tobacco & White", "9 inches", "10 pounds");

Cat_3.speak();
Dog_3.speak();

// 9.	Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.

var text = "The blue moon comes around only once a year...but I don´t know how to determine when! And I don´t know if it´s called blue becuase of the actual color it appears in the sly or if blue symbolis¡zes something else!";

String.prototype.findWords = function(what) {
    var times = this.match(what);
    return window.alert(times.length);
}

text.findWords(/\b(\w*blue\w*)\b/gi);