describe( 'My Code tests', function(){
	var demo
	beforeEach( function(){
		demo = new TestDemo()
	})
	it( 'was initiated', function(){
		expect( demo ).not.toBeNull()
	})
	it( 'testing doubleNumber()', function (){
		let testNumber = Math.floor( Math.random() ) * 10000;
		//let testResult = demo.doubleNumber( testNumber )
		//expect( testResult ).toEqual( testNumber * 2 )
	})
	it( 'testing multiplyNumbers()', function(){
		let number1 = Math.floor( Math.random() ) * 10000;
		let number2 = Math.floor( Math.random() ) * 10000;
		//let testResult = demo.multiplyNumbers( number1, number2 );
		//expect( testResult ).toEqual( number1 * number2 );
	})
	describe( 'testing divideNumbers()', function(){
		it( 'Can divide valid numbers', function(){
			let number1 = Math.floor( Math.random() ) * 10000;
			let number2 = Math.floor( Math.random() ) * 10000;
			//let testResult = demo.divideNumbers( number1, number2 );
			//expect( testResult ).toEqual( number1 / number2 );
		})
		it( 'Cannot divide by 0', function(){
			let number1 = Math.floor( Math.random() ) * 10000;
			//let testResult = demo.divideNumbers( number1, 0 );
			//expect( testResult ).toEqual( NaN );
		})
	})
})
