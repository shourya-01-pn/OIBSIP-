let outputWindow = document.getElementById("output");

        function display(num){
            outputWindow.value += num;
        }

        
        function Clear(){
            outputWindow.value = "";
        }
        
        function del(){
            outputWindow.value = outputWindow.value.slice(0,-1);
        }
        
        function Calc(){
            try{
                outputWindow.value = eval(outputWindow.value);
            }
            catch(err)
            {
                alert("error")
            }
        }