// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Characters 

  const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  const number = ["0","1","2","3","4","5","6","7","8","9"]
  const special = [",","!","#","$","%","&","(",")","*","+","-","/",":",";","<","=",">","?","@","[","^","_","`","{","|","~"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generate password 
function generatePassword() {

// Running through prompts 
  var plength = prompt("How many characters do you want in your password");
    const nlength = parseInt(plength)
    
      console.log(plength)
      console.log(nlength)
      console.log(typeof nlength)
      console.log(typeof plength)
  
  const checklower = confirm("Do you want to include lowercase?");
    console.log(checklower);
    
  const checkupper = confirm("Do you want to include uppercase?");  
    console.log(checkupper);
  
  const checkspecial = confirm("Do you want to include a special character?");
    console.log(checkspecial);
  
  const checknumber = confirm("Do you want to include a number?");
    console.log(checknumber);

 //Storing boolean and interger value    
    const Randomgen = {
    checklower: checklower, 
    checkupper: checkupper, 
    checknumber: checknumber, 
    checkspeical: checkspecial,
    nlength: nlength,
    }

//Edge Cases
    if(nlength<7 || nlength>128) {
      return alert('length must be between 0 and 128')
    }

    if(checklower === 0 && checkupper === 0 && checkspecial === 0 && checknumber ===0) {
      return alert('please select one');
    } 

    if(isNaN(plength)){
      return alert('lenght must be a number')
    }

    var output = "";
//Password String Creation 
    for( var i=0; i< nlength; i++){
     
      if(checklower){
      var lowervalue = lower[Math.floor(Math.random()*lower.length)]
      output += lowervalue     
      };

      if(checkupper){
      var uppervalue = upper[Math.floor(Math.random()*upper.length)]
      output += uppervalue
      };

      if(checkspecial){
      var specialvalue = special[Math.floor(Math.random()*special.length)]
      output += specialvalue
      };

      if(checknumber){
      var numbervalue = special[Math.floor(Math.random()*number.length)]
      output += numbervalue
      };

    console.log(lowervalue)
    console.log(uppervalue)
    console.log(specialvalue)
    console.log(numbervalue)
    
}
return output.slice(0,nlength)
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
