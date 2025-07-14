import { useState } from 'react'

const Filter = ({ value, onChange }) => (
  <form>
    <div>
      filter shown with <input value={value} onChange={onChange} />
    </div>
  </form>
)

const PersonForm = ({
  onSubmit,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => (
  <form onSubmit={onSubmit}>
    <div>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Persons = ({ persons }) => (
  <ul>
    {persons.map(person => (
      <li key={person.id}>
        {person.name} {person.number}
      </li>
    ))}
  </ul>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      setNewName('')
      setNewNumber('')
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleAddPerson = (event) => setNewName(event.target.value)
  const handleAddNumber = (event) => setNewNumber(event.target.value)
  const handleFilteredName = (event) => setFilteredName(event.target.value)

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().startsWith(filteredName.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filteredName} onChange={handleFilteredName} />
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleAddPerson}
        newNumber={newNumber}
        handleNumberChange={handleAddNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App