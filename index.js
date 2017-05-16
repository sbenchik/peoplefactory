const personForm = document.querySelector('form')

const renderListItem = (name, value) => {
    const newListItem = document.createElement('li')
    newListItem.textContent = `${name}: ${value}`
    return newListItem
}

const renderColor = (hairColor) => {
    const colorDiv = document.createElement('div')
    colorDiv.style.height = '50px'
    colorDiv.style.width = '100px'
    colorDiv.style.backgroundColor = hairColor
    return colorDiv
}

const renderList = (person) => {
    const list = document.createElement('ul')
    Object.keys(person).map((fieldName) => {
        let li = renderListItem(fieldName, person[fieldName])
        list.appendChild(li)
    })
    return list
}

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')
    
    const person = {
        name: form.person.name,
        hairColor: renderColor(form.hairColor.value).outerHTML,
        age: form.age.value,
        birthplace: form.birthplace.value,
    }

    const list = renderList(person)

    details.appendChild(list)
}

personForm.addEventListener('submit', handleSubmit)