function area (altura, largura) {
    const area = largura * altura 
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2. `)    
        
    }else {
        return area
    }
}

console.log(area(2,3))
console.log(area(2))
console.log(area())
console.log(area(2,3,44,5,6,64))
console.log(area(5, 5))