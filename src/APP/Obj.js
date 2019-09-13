const Person = {
    Name: 'Jules',
    Year: 1990,
    Age: function (dob) {
        var diff_ms = new Date().getUTCFullYear()-this.Year;
        var age_dt = new Date(diff_ms);

        return (diff_ms);
    }
}

for(var propt in Person){
    console.log(Person.Age());
}

export { Person }
