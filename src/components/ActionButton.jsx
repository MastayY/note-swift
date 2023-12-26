import React from "react";

function ActionButton({ id, onDelete, onArchive, msg }) {
    return (
        <div className="action-button">
            <button className='action-button__archive' onClick={() => onArchive(id)}>{msg}</button>
            <button className='action-button__delete' onClick={() => onDelete(id)}>Hapus</button>
        </div>
    );
}

export default ActionButton;
