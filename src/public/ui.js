const noteList = document.querySelector('#notes')

const appendNote = (note) => {
    // console.log(note);loadNotes
    const { id, title, description } = note;

    const div = document.createElement('div')

    div.innerHTML += `
    <div class="card card-body mb-2">
        <div class="d-flex justify-content-between align-items-center">
        <h3 class="card-title">${title}</h3>
            <div>
                <button class="btn btn-danger" data-id="${id}">delete</button>
                <button class="btn btn-primary" data-id="${id}">update</button>
            </div>
        </div>
    <p>${description}</p>
    </div>
    `
}


const loadNotes = (notes) => {
    console.log('notes: ', notes);
    notes.map((note) => appendNote(note));
}

// const name = () => {

// }
// const name = () => {

// }