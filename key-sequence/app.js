console.log('helloworld');

const secretCode = 'wesh'
const keyArray = []

document.addEventListener('keyup', (e) =>{
  console.log(e.key);
  keyArray.push(e.key)
  keyArray.splice(0, keyArray.length - secretCode.length)
  if(keyArray.join('') === secretCode){
    cornify_add()
    console.log('victory');
  }
})
