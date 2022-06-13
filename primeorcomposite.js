function PrimeOrComposite(num){
    // In this function we only use if and while statements. With the condition first for numbers equal to 10 and greater, the else statement will be for single digit numbers. We have 2 conditions because if we apply only one condition for all numbers, we will have trouble determining values like the number 25
    if(num >= 10){
        let i=1
        let counter = 1
        while(i<=9){
        if(num%i == 0){
            // console.log(num/i)
            counter++
        }
        i++
        }
        // console.log(counter)
        if(counter == 2){
            console.log(`${num} is a Prime number`)
        } else {
            console.log(`${num} is a Composite number`)
        }

    } else {
        let i=1
        let counter = 0
        while(i<=9){
            if(num%i == 0){
            // console.log(num/i)
            counter++
            }
        i++
        }
    // console.log(counter)
        if(counter == 2){
            console.log(`${num} is a Prime number`)
        } else {
            console.log(`${num} is a Composite number`)
        }
    }
}
PrimeOrComposite(2)
console.log('========')
PrimeOrComposite(3)
console.log('========')
PrimeOrComposite(4)
console.log('========')
PrimeOrComposite(43)
console.log('========')
PrimeOrComposite(211)
console.log('========')
PrimeOrComposite(2017)
console.log('========')
PrimeOrComposite(2022)