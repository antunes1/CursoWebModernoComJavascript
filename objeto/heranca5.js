console.log(typeof String)
console.log(Array)
console.log(Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4].first())
console.log(['a', 'b', 'c', 'd'].first())

String.prototype.toString = function() {
    return 'lascou tudo'
} // evitar 

console.log('escola cod3r'.reverse()) 