function valueButton(data){
			calculatorForm.screen.value += data.value;
		}
		function Clear(){
			calculatorForm.screen.value = null;
		}
		function Calculate(){
			calculatorForm.screen.value = eval(calculatorForm.screen.value);
		}