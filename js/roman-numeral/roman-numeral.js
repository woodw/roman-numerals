Function.RegisterNamespace("kata");

kata.RomanNumeral = function () {
	var value = '';

	this.set = function (newNumeral){
		value = newNumeral;
	}

	this.get = function (){
		return value;
	}

}