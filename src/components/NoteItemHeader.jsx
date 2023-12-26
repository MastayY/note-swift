import React from "react";
import { showFormattedDate, showFormattedTime } from "../utils/data";

function NoteItemHeader({ title, createdAt }) {
    return (
        <div className="note-item__header">
            <h3>{ title }</h3>
            <p>{ showFormattedDate(createdAt) } { showFormattedTime(createdAt) }</p>
        </div>
    );
}

export default NoteItemHeader;