const mongoose = require('mongoose')
const schema = require('./PeopleSchema')
console.log(schema)

class People {

    async writePerson(personIn) {
        // connection via promises
        const connection = await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
        console.log(connection)

        // Schema stuff
        const People = mongoose.model('People', schema)
        // const person = new People({ name: 'Tiddles'})
        // Object.assign(person, personIn)
        const person = new People(personIn)

        // Write a record
        const res = await person.save();
        console.log('Written', res);

        return { Result: 'Saved'}
    }
}

module.exports = new People;