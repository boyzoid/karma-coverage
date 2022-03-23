function TestDemo(){
	this.doubleNumber = ( a ) => { return a * 2 }
	this.multiplyNumbers = ( a, b ) => { return a * b }
	this.divideNumbers = ( a, b ) => {
		if( b !== 0 ){
			return a/b;
		}
		else{
			return NaN
		}
	}
}
