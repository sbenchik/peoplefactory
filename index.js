const personForm = document.querySelector('form')

const renderListItem = (name, value) => {
    const newListItem = document.createElement('li')
    newListItem.innerHTML = `${name}: ${value}`
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
    Array.from(person).map((input) => {
        if(input.value){
            let value = input.value
            if(input.type === 'color') value.renderColor(value).outerHTML
            let li = renderListItem(input.name, value)
            list.appendChild(li)
        }
    })
    return list
}

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const list = renderList(form.elements)

    details.appendChild(list)
}

personForm.addEventListener('submit', handleSubmit)