import { useState } from 'react'

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
    if(persons.some(person => person.name === newName)) {
      setNewName('')
      setNewNumber('')
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }
  const handleAddPerson = (event) => {
    setNewName(event.target.value)
  }
  const handleAddNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilteredName= (event) => {
    setFilteredName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>filter shown with<input value={filteredName} onChange={handleFilteredName}></input></div>
      </form>
      <form>
        <div>
          <div>name: <input value={newName} onChange={handleAddPerson}/></div>
          <div>number: <input value={newNumber} onChange={handleAddNumber}/></div>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter(person => person.name.startsWith(filteredName))
          .map(person => (
            <li key={person.id}>{person.name} {person.number}</li>
          ))}
      </ul>
    </div>
  )
}

export default App