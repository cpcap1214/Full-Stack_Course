import { useState, useEffect } from 'react'
import axios from 'axios'

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
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response)
        setPersons(response.data)
      })
  }, [])

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