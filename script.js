
const output = document.getElementById("output")
const btn  = document.querySelectorAll(".btn")
const ERROR_MESSAGE = "SYNTAX ERROR";
function populateButtonObject(){
    const buttonMap = {}
    btn.forEach(bn => {
        if(!buttonMap.hasOwnProperty(bn.textContent)){
            buttonMap[bn.textContent]=bn.textContent
        }
    })

    return buttonMap;
    
}
const btnObject = populateButtonObject();
const otherClone = {
    ...btnObject
}
btnObject["X"] ="*"
console.log(btnObject["X"])
const filterValues = (key) => {
    const values = ["DEL","=","RESET"]
    values.forEach(value => {
        delete key[value];
    })
    const newkey = key
    return newkey
}

function parse(dataString){

 let result =eval(dataString);
 return result;
}

const newObject = filterValues(btnObject);

function outputToDisplay(obj){
if(output==ERROR_MESSAGE){
    output.textContent=""
}

    btn.forEach(bn => {
        bn.addEventListener("click",() => {

            if(bn.textContent == "RESET" ){
                output.textContent=""
            }
            else if(bn.textContent == "="){
                try{
            
                let result = parse(output.textContent)
                output.textContent=result
                }
                catch(error){
                    output.textContent=ERROR_MESSAGE;
                    console.log(error.message)
                }
            }
            else if(bn.textContent == "DEL"){
                if(output.textContent==ERROR_MESSAGE){
                    output.textContent=""
                }
                else{
                    let stringCont = output.textContent
                    let newStr = stringCont.slice(0,stringCont.length-1);
                    output.textContent=newStr
                }
            }
        
            else{
                output.textContent+=obj[bn.textContent]
            }
            
        })
    })
}





outputToDisplay(newObject)


const buttons = document.getElementsByClassName("button")
const buttonArr = [...buttons];
console.log(buttonArr)
const variables = document.querySelector(":root");

buttonArr.forEach((button,index) => {  
    button.addEventListener("click",() => {
        button.style.opacity="1";
        if(index == 0){
            variables.style.setProperty("--main-background","hsl(225, 21%, 49%)");
            variables.style.setProperty("--output-background","hsl(224, 36%, 15%)");
            variables.style.setProperty("--special-buttons-text-color","white");
            variables.style.setProperty("--special-btn-color","hsl(225, 21%, 49%)");
            variables.style.setProperty("--special-btn-shadow","hsl(224, 28%, 35%)");
            variables.style.setProperty("--keypad-background","hsl(223, 31%, 20%)");
            variables.style.setProperty("--toggle-background"," hsl(223, 31%, 20%)");
            variables.style.setProperty("--toggle-color","hsl(6, 63%, 50%)");
            variables.style.setProperty("--toggle-shadow","hsl(6, 70%, 34%)");
            variables.style.setProperty("--buttons-color","hsl(221, 14%, 31%) ");
            variables.style.setProperty("--buttons-shadow","hsl(224, 28%, 35%)");
            variables.style.setProperty("--equals-key-background","hsl(6, 63%, 50%)");
            variables.style.setProperty("--normal-buttons-background","hsl(30, 25%, 89%)");
            variables.style.setProperty("--normal-buttons-background-shadow","hsl(28, 16%, 65%)");
            variables.style.setProperty("--output-text-color","white");
        }
        else if(index == 1){
            variables.style.setProperty("--main-background"," hsl(0, 0%, 90%)");
            variables.style.setProperty("--output-background","hsl(0, 0%, 93%)");
            variables.style.setProperty("--special-buttons-text-color","white");
            variables.style.setProperty("--special-btn-color","hsl(185, 42%, 37%)");
            variables.style.setProperty("--special-btn-shadow","hsl(0, 0%, 93%)");
            variables.style.setProperty("--keypad-background","hsl(0, 5%, 81%)");
            variables.style.setProperty("--toggle-background"," hsl(0, 5%, 81%)");
            variables.style.setProperty("--toggle-color","hsl(25, 98%, 40%)");
            variables.style.setProperty("--toggle-shadow","hsl(0, 0%, 93%)");
            variables.style.setProperty("--buttons-color","hsl(60, 10%, 19%)");
            variables.style.setProperty("--buttons-shadow"," hsl(185, 58%, 25%)");
            variables.style.setProperty("--equals-key-background","hsl(25, 98%, 40%)");
            variables.style.setProperty("--normal-buttons-background","hsl(45, 7%, 89%)");
            variables.style.setProperty("--normal-buttons-background-shadow","hsl(35, 11%, 61%)");
            variables.style.setProperty("--output-text-color","hsl(60, 10%, 19%)");

        }
        else if(index == 2){
            variables.style.setProperty("--main-background","hsl(268, 75%, 9%)");
            variables.style.setProperty("--output-background","hsl(268, 71%, 12%)");
            variables.style.setProperty("--special-buttons-text-color","white");
            variables.style.setProperty("--special-btn-color","hsl(281, 89%, 26%)");
            variables.style.setProperty("--special-btn-shadow"," hsl(285, 91%, 52%)");
            variables.style.setProperty("--keypad-background","hsl(268, 71%, 12%)");
            variables.style.setProperty("--toggle-background","hsl(268, 71%, 12%)");
            variables.style.setProperty("--toggle-color","hsl(176, 100%, 44%)");
            variables.style.setProperty("--toggle-shadow","hsl(177, 92%, 70%)");
            variables.style.setProperty("--buttons-color","hsl(176, 100%, 44%)");
            variables.style.setProperty("--buttons-shadow"," hsl(185, 58%, 25%)");
            variables.style.setProperty("--equals-key-background","hsl(25, 98%, 40%)");
            variables.style.setProperty("--normal-buttons-background","hsl(281, 89%, 26%)");
            variables.style.setProperty("--normal-buttons-background-shadow","hsl(285, 91%, 52%)");
             variables.style.setProperty("--output-text-color","hsl(52, 100%, 62%)");
        }
        buttonArr
        .filter(function(item){
            return item !=  button
        })
        .forEach(item => {
            item.style.opacity="0";

        })
    })

})



