const noteForm = document.querySelector('#noteForm')


noteForm.addEventListener('submit', (e) => {
    e.preventDefault()

    saveNote(title.value, description.value)
})

