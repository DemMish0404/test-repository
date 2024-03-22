let title = document.querySelector('h1')
console.log('hello')
const newEl = document.createElement('div')
newEl.innerText = 'hui'


title.before('what? before?') // перед элементом
title.prepend('Hi!!!!!!!') // в элементе в начале 
title.append(',Demid Mishukov') // в элементе в конце
title.after('what? after?')// после элемента


console.log('я сделал! ')
console.log('да, это что -то с чем то: ты можешь добавлять новые элементы до блока, после него и даже в нем! красава!  ')