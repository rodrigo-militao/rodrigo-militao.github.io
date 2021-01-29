const n = 5
let icon = [' ', ' ', ' ', '*', ' ', ' ', ' ']
let index = 3


for (let i = 0; i < 4; i+=1) {
    console.log(icon.join(''))
    icon[index-1] = '*'
    icon[index+1] = '*'
    icon[index] = [' ']
     if (i === 1) {
        icon[index-1] = ' '
        icon[index+1] = ' '
        icon[index-2] = '*'
        icon[index+2] = '*'
    }else if( i === 2){
        icon[0] = '*'
        icon[1] = '*'
        icon[2] = '*'
        icon[3] = '*'
        icon[4] = '*'
        icon[5] = '*'
        icon[6] = '*'
        console.log(icon.join(''))
        break
    }
}