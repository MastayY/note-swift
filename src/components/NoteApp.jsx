import React from "react";
import { getInitialData } from "../utils/data";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData()
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);

    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                        archive: false
                    }
                ]
            }
        })
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes })
    }

    onArchiveHandler(id) {
        const updatedNotes = this.state.notes.map(note => {
            if (note.id === id) {
                return { ...note, archived: !note.archived };
            }
            return note;
        });

        this.setState({ notes: updatedNotes });
    }

    render() {
        return(
            <main>
                <h1>Note Swift</h1>
                <div className="notes-app">
                    <h2>Tambah Catatan</h2>
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                </div>
            </main>
        );
    }
}

export default NoteApp;