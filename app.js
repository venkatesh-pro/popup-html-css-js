const button = document.getElementById('button')
const popupdiv = document.querySelector('.popupdiv')
const frontdiv = document.querySelector('.frontdiv')
const close = document.querySelector('.close')
button.addEventListener('click', () => {
  popupdiv.classList.remove('opvi')
  frontdiv.classList.add('opvi')
  document.body.style.backgroundColor = '#c7f5db'
})

close.addEventListener('click', () => {
  popupdiv.classList.add('opvi')
  frontdiv.classList.remove('opvi')
  document.body.style.backgroundColor = 'white'
 
})
