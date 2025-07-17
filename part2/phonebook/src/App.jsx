import { useState, useEffect } from 'react'
import personService from './services/persons'

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

const Persons = ({ persons, handleDelete }) => {
  const handleConfirmDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      handleDelete(id)
    }
  }

  return (
    <ul>
      {persons.map(person => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleConfirmDelete(person.id, person.name)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}

const Notification = ({ message }) => {
  if(message === null) {
    return null
  }
  return (
    <div className='success'>
      {message}
    </div>
  )
} 

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [filteredName, setFilteredName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        console.log(response)
        setPersons(response)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === newName)
    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const updatedPerson = { ...existingPerson, number: newNumber }
      personService
        .update(existingPerson.id, updatedPerson)
        .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson))
        setNewName('')
        setNewNumber('')
        })
      } else {
      setNewName('')
      setNewNumber('')
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(personObject)
        .then(response => {
          setSuccessMessage(`Added ${response.name}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleDelete = (id) => {
    personService
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter((n) => n.id !== id))
      })
  }

  const handleAddPerson = (event) => setNewName(event.target.value)
  const handleAddNumber = (event) => setNewNumber(event.target.value)
  const handleFilteredName = (event) => setFilteredName(event.target.value)

  const filteredPersons = persons.filter(person =>
    person.name.startsWith(filteredName.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Filter value={filteredName} onChange={handleFilteredName} />
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleAddPerson}
        newNumber={newNumber}
        handleNumberChange={handleAddNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDelete={handleDelete}/>
    </div>
  )
}

export default App