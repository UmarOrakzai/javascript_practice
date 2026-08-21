 let expression = '';

        function pressNum(val){
            if(val === '='){
                calculate();
                return; 
            }
            
            expression = expression + val;
            document.getElementById('screen').value = expression;
        }

        function clearScreen(){
            expression = '';
            document.getElementById('screen').value = expression;
        }

        function calculate(){
            let result = eval(expression); // seedha hisab
            
            // agar result decimal lamba ho to 4 digit tak
            if(result.toString().includes('.')){
                result = result.toFixed(4);
            }

            expression = result.toString();
            document.getElementById('screen').value = expression;
        } 