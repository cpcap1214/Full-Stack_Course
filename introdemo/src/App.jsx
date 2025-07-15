import { useState, useEffect } from "react"
import axios from 'axios'
import Note from "./conponents/Note"

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('new note')
  const [showAll, setShowall] = useState(true)
  const noteToShow = showAll ? notes : notes.filter((note) => note.important === true);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  },[])

  const addNote = (event) => {
    event.preventDefault()
    console.log('Button clicked', event.target)
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowall(!showAll)}>Toggle show all</button>
      </div>
      <ul>
        {noteToShow.map(note => <Note key={note.id} note={note} />)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App