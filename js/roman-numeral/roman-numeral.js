Function.RegisterNamespace("kata");

kata.RomanNumeral = function () {
	var value = '';
	var numeral_enum = {
		'1000':'M',
		'900':'CM',
		'500':'D',
		'400':'CD',
		'100':'C',
		'90':'XC',
		'50':'L',
		'40':'XL',
		'10':'X',
		'9':'IX',
		'5':'V',
		'4':'IV',
		'1':'I'
	};

	this.set = function (newNumeral){
		value = newNumeral;
	};

	this.get = function (){
		return value;
	};

	this.setFromNumber = function (newNumber){
		var remainder = newNumber;
		var numeralKeys = Object.keys(numeral_enum);
		//Keys auto sort to lowest value
		var pointer = numeralKeys.length;

		//Subtract and record numeral_enum values
		while(remainder>0){
			var keyInt = parseInt(numeralKeys[pointer]);
			if(remainder>=keyInt){
				remainder -= keyInt;
				value += numeral_enum[numeralKeys[pointer]];
			}
			else{
				pointer--;
			}
		}
	};

}