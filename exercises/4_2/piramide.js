const n = 5
let icon = [' ', ' ', '*', ' ', ' ']
let index = 2


for (let i = 0; i < 3; i+=1) {
    console.log(icon.join(''))
    icon[index-1] = '*'
    icon[index+1] = '*'
     if (i === 1) {
        icon[index-2] = '*'
        icon[index+2] = '*'
    }
}