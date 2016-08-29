var usm = this.usm || {};
(function(global) {

 /**
 * Actual constructor with all methods
 * As prototypes
 **/
 function FooConstructor(input) {
   this.firstName = input.firstName;
   this.lastName = input.lastName;
  }

  var prototypes = {
  	getFirstName: function() {
    	return this.firstName
    },
    getLastName: function() {
    	return this.lastName
    },
    getName: function() {
    	return this.firstName +" "+this.lastName;
    }
  };

  FooConstructor.prototype = prototypes;

  /**
	* This will expose limited methods
  * Put all required methods to expose reference in publicMethods array 
  **/
  function Foo(input) {
  	var FooInstance = new FooConstructor(input);
    var publicMethods = [prototypes.getFirstName, prototypes.getName];

    publicMethods.forEach(function(method) {
    	this[method.name] = method.bind(FooInstance);
    }.bind(this));
  }

	global.Foo = Foo;

})(usm);
