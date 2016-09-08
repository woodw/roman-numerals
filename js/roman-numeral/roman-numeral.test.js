Function.RegisterNamespace("Test");

[Import("./roman-numeral.js")]

[Fixture]
Test.RomanNumeral = function (){
	
	[Fixture]
    function SetNumeral(){

		[Fact]
		function ShouldSetValueOfNumeral(){
			var romanNumeral = "I";
            var underTest = new RomanNumeral;

			underTest.set(romanNumeral);
			var value = underTest.get();

			Assert.Equal(romanNumeral, value);
		}
	}

	[Fixture]
	function SetFromNumber(){

		[Fact]
		function ShouldSetValueIFromNumberOne(){
			var romanNumeral = "I";
			var number = 1;
			var underTest = new RomanNumeral;

			underTest.setFromNumber(number);
			var value = underTest.get();

			Assert.Equal(romanNumeral, value);
		}

		[Fact]
		function ShouldSetValueVFromNumberFive(){
			var romanNumeral = "V";
			var number = 5;
			var underTest = new RomanNumeral;

			underTest.setFromNumber(number);
			var value = underTest.get();

			Assert.Equal(romanNumeral, value);
		}

		[Fact]
		function ShouldSetValueXFromNumberTen(){
			var romanNumeral = "X";
			var number = 10;
			var underTest = new RomanNumeral;

			underTest.setFromNumber(number);
			var value = underTest.get();

			Assert.Equal(romanNumeral, value);
		}

		[Fact]
		function ShouldSetValueLFromNumberFifty(){
			var romanNumeral = "L";
			var number = 50;
			var underTest = new RomanNumeral;

			underTest.setFromNumber(number);
			var value = underTest.get();

			Assert.Equal(romanNumeral, value);
		}

		[Fact]
		function ShouldSetValueCFromNumberOneHundred(){
			var romanNumeral = "C";
			var number = 100;
			var underTest = new RomanNumeral;

			underTest.setFromNumber(number);
			var value = underTest.get();

			Assert.Equal(romanNumeral, value);
		}

		[Fact]
		function ShouldSetValueDFromNumberFiveHundred(){
			var romanNumeral = "D";
			var number = 500;
			var underTest = new RomanNumeral;

			underTest.setFromNumber(number);
			var value = underTest.get();

			Assert.Equal(romanNumeral, value);
		}

		[Fact]
		function ShouldSetValueMFromNumberOneThousand(){
			var romanNumeral = "M";
			var number = 1000;
			var underTest = new RomanNumeral;

			underTest.setFromNumber(number);
			var value = underTest.get();

			Assert.Equal(romanNumeral, value);
		}

		[Fact]
		function ShouldSetValueVIFromNumberSix(){
			var romanNumeral = "VI";
			var number = 6;
			var underTest = new RomanNumeral;

			underTest.setFromNumber(number);
			var value = underTest.get();

			Assert.Equal(romanNumeral, value);
		}

		[Fact]
		function ShouldSetValueVIFromNumberFiveHundredFiftyFive(){
			var romanNumeral = "DLV";
			var number = 555;
			var underTest = new RomanNumeral;

			underTest.setFromNumber(number);
			var value = underTest.get();

			Assert.Equal(romanNumeral, value);
		}
		
		[Fact]
		function ShouldSetValueToReplaceSetsOfFour(){
			var romanNumeral = "IX";
			var number = 9;
			var underTest = new RomanNumeral;

			underTest.setFromNumber(number);
			var value = underTest.get();

			Assert.Equal(romanNumeral, value);
		}
	}

	[Fixture]
	function ToNumber(){
		[Fact]
		function ShouldReturnNumberRepresentaionOfNumeralValue(){
			var romanNumeral = "X";
			var number = 10;
			var underTest = new RomanNumeral;

			underTest.set(romanNumeral);
			var value = underTest.toNumber();

			Assert.Equal(number, value);
		}

		[Fact]
		function ShouldSubtractSmallerNumeralsLeadingLargerNumerals(){
			var romanNumeral = "XXIV";
			var number = 24;
			var underTest = new RomanNumeral;

			underTest.set(romanNumeral);
			var value = underTest.toNumber();

			Assert.Equal(number, value);
		}
	}
}