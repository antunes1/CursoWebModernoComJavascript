// immediatelu=y invoked function expression 
// foge do escopo global

(function() {
    console.log('será executado na hora!')
    console.log('foge do escopo mais abrangente')
})()