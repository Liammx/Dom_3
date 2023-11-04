let width = document.querySelector('#width')
let height = document.querySelector('#height')
let bgColor = document.querySelector('#bgColor')
let add = document.querySelector('#add')
let item = document.querySelector('.item')
let radius = document.querySelector('#radius')
let position = document.querySelector('#position')
let left = document.querySelector('#left')
let right = document.querySelector('#right')


 let w = 0
 let h = 0
 let bg = ``
 let r = 0
 let pos = ``
 let l = 0
 let psr = 0
 

width.addEventListener('keyup' , (event) => {
     w = event.target.value

})
height.addEventListener('keyup' , (event) => {
    h = event.target.value
    
})
bgColor.addEventListener('keyup' , (event) => {
     bg = event.target.value
    
})
radius.addEventListener('keyup' , (event) => {
    r = event.target.value
})

position.addEventListener('keyup', (event) =>{
    pos = event.target.value
})
left.addEventListener('keyup' , (event) =>{
    l = event.target.value
})
right.addEventListener('keyup', (event) => {
    psr = event.target.value
})

add.addEventListener('click',() =>{
    item.style.width = `${w}px`
    item.style.height = `${h}px`
    item.style.backgroundColor = bg
    item.style.borderRadius = `${r}px`
    item.style.position = pos
    item.style.left = `${l}px`
    item.style.right =`${psr}px`

    width.value = ``
    height.value =``
    bgColor.value = ``
    radius.value = ``
    position.value =``
    left.value =``
    right.value = ``

})

