import React from "react";
import NoteItemHeader from "./NoteItemHeader";
import NoteItemBody from "./NoteItemBody";
import ActionButton from "./ActionButton";

function NoteItem({ id, onDelete, onArchive, msg, title, createdAt, body }) {
    return (
        <div className="note-item">
            <NoteItemHeader title={title} createdAt={createdAt} />
            <NoteItemBody body={body} />
            <ActionButton id={id} onDelete={onDelete} onArchive={onArchive} msg={msg} />
        </div>
    );
}

export default NoteItem;