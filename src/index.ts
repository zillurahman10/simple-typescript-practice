const a: number[] = [2, 22, 45, 1, 7, 8, 47, 78, 30]

const findEvenNumbers = () => {
    let numbers: number[] = []
    
    const evenNumbers = a.filter(number => number % 2)
    numbers.push(...evenNumbers)

    console.log();

    return evenNumbers
    
    
    
}
;
