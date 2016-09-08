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
		var remainder = newNumber;
		while(remainder>0){
			switch(true){
				case (remainder>=1000): 
					value += 'M';
					remainder -= 1000;
					break;
				case (remainder>=900): 
					value += 'CM';
					remainder -= 900;
					break;
				case (remainder>=500):
					value += 'D';
					remainder -= 500;
					break;
				case (remainder>=400):
					value += 'CD';
					remainder -= 400;
					break;
				case (remainder>=100):
					value += 'C';
					remainder -= 100;
					break;
				case (remainder>=90):
					value += 'XC';
					remainder -= 90;
					break;	
				case (remainder>=50):
					value += 'L';
					remainder -= 50;
					break;		
				case (remainder>=40):
					value += 'XL';
					remainder -= 40;
					break;	
				case (remainder>=10):
					value += 'X';
					remainder -= 10;
					break;
				case (remainder>=9):
					value += 'IX';
					remainder -= 9;
					break;
				case (remainder>=5):
					value += 'V';
					remainder -= 5;
					break;
				case (remainder>=4):
					value += 'IV';
					remainder -= 4;
					break;
				case (remainder>=1):
					value += 'I';
					remainder -= 1;
					break;
			}
		}
	};

}