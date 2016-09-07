Function.RegisterNamespace("Test.kata");

[Import("./roman-numeral.js")]

[Fixture]
Test.kata.RomanNumeral = function (){
	
	[Fixture]
    function SetNumeral(){

		[Fact]
		function ShouldSetValueOfNumeral(){
			var romanNumeral = "I";
            var underTest = new kata.RomanNumeral;

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
			var underTest = new kata.RomanNumeral;

			underTest.setFromNumber(number);
			var value = underTest.get();

			Assert.Equal(romanNumeral, value);
		}

		[Fact]
		function ShouldSetValueVFromNumberFive(){
			var romanNumeral = "V";
			var number = 5;
			var underTest = new kata.RomanNumeral;

			underTest.setFromNumber(number);
			var value = underTest.get();

			Assert.Equal(romanNumeral, value);
		}
	}
}