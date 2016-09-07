Function.RegisterNamespace("kata");

kata.RomanNumeral = function () {
	var value = '';

	this.set = function (newNumeral){
		value = newNumeral;
	};

	this.get = function (){
		return value;
	};

	this.setFromNumber = function (newNumber){
		switch(newNumber){
			case 1: 
				value = "I";
				break;
			case 5:
				value = "V";
				break;
			case 10:
				value = "X";
				break;
			case 50:
				value = "L";
				break;			
			case 100:
				value = "C";
				break;
			case 500:
				value = "D";
				break;
		}
	};

}