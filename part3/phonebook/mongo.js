const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://cpcap:${password}@cluster0.a1fggql.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: "Anna",
  number: "040-1234556",
})

if(process.argv.length === 3) {
    console.log("phonebook:")
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}
else {
    const person = new Person({
        name: `${process.argv[3]}`,
        number: `${process.argv[4]}`,
    })
    person.save().then(result => {
        console.log('person saved!')
        mongoose.connection.close()
    })
}

