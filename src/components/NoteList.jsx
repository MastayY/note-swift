import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
    const archivedNotes = notes.filter(note => note.archived);
    const unarchivedNotes = notes.filter(note => !note.archived);
    const unarchivedSortedNotes = unarchivedNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const archivedSortedNotes = archivedNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className="note-list">
            <div className="note-list__recent">
                <h2>Catatan</h2>
                {
                    unarchivedSortedNotes.length > 0 ? unarchivedSortedNotes.map(note => (
                        <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} msg={"Arsipkan"} {...note} />
                    )) : (
                        <p>Tidak ada data</p>
                    )
                }
            </div>
            <div className="note-list__archived">
                <h2>Arsip</h2>
                {
                    archivedSortedNotes.length > 0 ? archivedSortedNotes.map(note => (
                        <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} msg={"Pulihkan"} {...note} />
                    )) : (
                        <p>Tidak ada data</p>
                    )
                }
            </div>
        </div>
    );
}

export default NoteList;