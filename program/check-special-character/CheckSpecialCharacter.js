// function to check for special character
function checkSpecialCharacter(char) {
  const reg = /[^a-zA-Z0-9]/g
  return reg.test(char)
}

const callFun = checkSpecialCharacter("*")
console.log(callFun)
