import React from "react";

function NoteItemBody({ body }) {
    return(
        <div className="note-item__body">
            <p>{ body }</p>
        </div>
    );
}

export default NoteItemBody;