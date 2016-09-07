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

			Assert.Equal(underTest.get(), romanNumeral);
		}
	}

}