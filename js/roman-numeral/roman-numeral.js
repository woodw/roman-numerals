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

	this.toNumber = function (){
		var count = 0;

		for(var i=0;i<value.length;i++){
			var additive = 0;
			switch(value[i]){
				case 'I':
					additive = 1;
					if(value[i+1]=='V' || value[i+1]=='X'){
						additive *= -1;
					}
					break;
				case 'V':
					additive = 5;
					break;
				case 'X':
					additive = 10;
					if(value[i+1]=='L' || value[i+1]=='C'){
						additive *= -1;
					}
					break;
				case 'L':
					additive = 50;
					break;
				case 'C':
					additive = 100;
					if(value[i+1]=='D' || value[i+1]=='M'){
						additive *= -1;
					}
					break;
				case 'D':
					additive = 500;
					break;
				case 'M':
					additive = 1000;
					break;
			}
			count += additive;
		}
		return count;
	}

}