import { useState, useEffect } from "react"
import Footer from "./conponents/Footer"
import Note from "./conponents/Note"
import noteService from './services/Notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowall] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const noteToShow = showAll ? notes : notes.filter((note) => note.important === true);

  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNote => {
        setNotes(initialNote)
      })
  },[])

  const addNote = (event) => {
    event.preventDefault()
    console.log('Button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }
    noteService
      .addNote(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const Notification = ({message}) => {
    if(message === null) {
      return null
    }
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  const toggleImportance = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}
    noteService
      .update(id, changedNote)
      .then(updatedNote => {
        setNotes(notes.map(note =>
          note.id === id ? updatedNote : note
        ))
      })
      .catch(error => {
        setErrorMessage(`the note ${note.content} was already deleted`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter((n) => n.id !== id))
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowall(!showAll)}>Toggle show all</button>
      </div>
      <ul>
        {noteToShow.map(note => <Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)}/>)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App