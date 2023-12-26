import React from "react";
import Swal from 'sweetalert2';
import { getInitialData } from "../utils/data";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [{
                id: 1703569306967,
                title: "Welcome to Note Swift",
                body: "Selamat datang di Note Swift. NoteSwift adalah aplikasi web yang dirancang untuk membantumu mencatat ide, inspirasi, dan pemikiran dengan cepat dan efisien. Dengan antarmuka yang bersih dan responsif, NoteSwift memberikan pengalaman penggunaan yang gesit, memungkinkanmu fokus pada apa yang penting: ide-ide kreatif Anda. Note Swift : Swiftly Capture Your Thoughts",
                createdAt: "2023-12-26T05:41:46.967Z",
                archived: false
            }]
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);

    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            const newNote = {
                id: +new Date(),
                title,
                body,
                createdAt: new Date(),
                archived: false
            };
    
            const updatedNotes = [...prevState.notes, newNote];
    
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
    
            return { notes: updatedNotes };
        });

        Swal.fire({
            title: 'Sukses!',
            text: 'Catatan Berhasil Ditambahkan',
            icon: 'success',
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            timer: 2000,
            timerProgressBar: true,
            allowOutsideClick: true
            // confirmButtonText: 'Cool'
        });
    }

    onDeleteHandler(id) {
        Swal.fire({
            title: "Beneran mau dihapus?",
            icon: 'question',
            showDenyButton: true,
            confirmButtonText: "Iya",
            denyButtonText: `Engga`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const notes = this.state.notes.filter(note => note.id !== id);
                this.setState({ notes }, () => {
                    localStorage.setItem('notes', JSON.stringify(this.state.notes));
                });

                Swal.fire({
                    title: 'Sukses!',
                    text: 'Catatan Berhasil Dihapus',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true,
                    allowOutsideClick: true
                    // confirmButtonText: 'Cool'
                })
            }
        });
    }

    onArchiveHandler(id) {
        const updatedNotes = this.state.notes.map(note => {
            if (note.id === id) {
                return { ...note, archived: !note.archived };
            }
            return note;
        });

        this.setState({ notes: updatedNotes }, () => {
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
        });

        Swal.fire({
            title: 'Sukses!',
            text: 'Catatan Berhasil Diarsipkan',
            icon: 'success',
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            timer: 2000,
            timerProgressBar: true,
            allowOutsideClick: true
            // confirmButtonText: 'Cool'
        });
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