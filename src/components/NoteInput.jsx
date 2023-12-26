import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler( event ) {
        const maxTitleLength = 50;
        const enteredTitle = event.target.value;
        const limitedTitle = enteredTitle.slice(0, maxTitleLength);
        const remainingChars = maxTitleLength - limitedTitle.length;

        this.setState(() => {
            return {
                title: event.target.value,
                remainingChars: remainingChars
            }
        })
    }

    onBodyChangeEventHandler( event ) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <div className="note-input__title">
                    <label htmlFor="title">Judul</label>
                    <p>{this.state.remainingChars} / 50</p>
                </div>
                <input type="text" id="title" required value={this.state.title} onChange={this.onTitleChangeEventHandler} maxLength={50} />
                <label htmlFor="body">Teks</label>
                <textarea id="body" required cols="30" rows="10" value={this.state.body} onChange={this.onBodyChangeEventHandler} ></textarea>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default NoteInput