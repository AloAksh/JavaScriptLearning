const intro = (names, age, shirt) => {

    const person = {
        namos: names,
        ageu: age,
        shurt: shirt,
        assets: 3000,
        liabilities: 500,
        netWorth: function(){
            return this.assets - this.liabilities;
        }
    }

    greet = `Hi ${person.namos}! Your ${person.shurt} shirt looks great. Happy ${person.ageu} Birthday. Right now, your net worth is ${person.netWorth()}.`;
    
    return greet;
}

console.log(intro('Leornardo', 22, 'white'));
console.log(intro('Bob', 45, 'Grey'));