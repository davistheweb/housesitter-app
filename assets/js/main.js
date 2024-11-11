let num1 = [3,4,7,5,1]
let arr = []

for (let i = 0; i<num1.length; i++) {
    for(let j = i+1; j<num1.length; j++){
        let temp = 0;
        if(num1[j] < num1[i]){
            temp = num1[i]
            num1[i] = num1[j]
            num1[j] = temp
        }
    }
    console.log(num1[i] + " ");
    arr.push(num1[i])
    
    
}
console.log(arr)
