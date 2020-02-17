/*    
    *
   **
  ***
 ****
*****

*/

const n = 5
let icon = [' ', ' ', ' ', ' ', ' ']
let index = 4

console.log(icon[4])

for (let i = 0; i < n; i+=1) {
    icon[index] = '*'
    index--
    console.log(icon.join(''))
    
}