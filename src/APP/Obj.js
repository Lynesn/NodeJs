const Person = {
    Name: 'Julies',
    Year: 1990,
    Age: function (dob) {
        var diff_ms = new Date().getUTCFullYear()-this.Year;
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1990);
    }
}

console.log(Person.Age(new Date(1990, 11, 4)));

for(var propt in Person){
    console.log(Person.Age());
}

export { Person }
// propt + ': ' + Person[propt]