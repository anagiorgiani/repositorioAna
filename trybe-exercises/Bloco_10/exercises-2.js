
const palavra = str => {
  const pal =  str.toUpperCase()
  return pal;
}

const letra = str => {
	return str.charAt(0).toUpperCase() + str.substr(1);
}
 
const concatena = (str1, str2) => {
    return str1 + str2;
}

console.log(concatena('ama', 'amor'))









module.exports = {palavra, letra, concatena}