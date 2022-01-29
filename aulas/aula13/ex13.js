num = [2,3,8,5,3,7]
for (let p in num){
    console.log(`na posição ${p} tem o valor ${num[p]}`)
}
console.log(`o  valor 8 está na posição ${num.indexOf(8)}`)
num.push(1)
num.sort()
for (let p in num){
    console.log(`na posição ${p} tem o valor ${num[p]}`)
}