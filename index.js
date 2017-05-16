const personForm = document.querySelector('form')

const createListItem = (htmlText, parentElement) => {
    const newListItem = document.createElement('li')
    newListItem.textContent = htmlText
    parentElement.appendChild(newListItem)
}

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')
    const personName = form.personName.value
    const hairColor = form.hairColor.value
    const age = form.age.value
    const birthplace = form.birthplace.value

    const colorDiv = `<div style ="height: 50px; width: 100px; background-color: ${hairColor}"></div>`

    const detailsList = document.createElement('ul')
    details.appendChild(detailsList)

    const inputs = document.querySelectorAll('input')
    const labels = document.querySelectorAll('label')
    let labelCount = 0
    for(var i of inputs){
        if(labels[labelCount].htmlFor != 'hairColor'){
            createListItem(`${labels[labelCount].textContent}: ${i.value}`, detailsList)
        } else {
            createListItem(`${labels[labelCount].textContent}:`, detailsList) 
            const colorDiv = document.createElement('div')
            detailsList.appendChild(colorDiv)
            colorDiv.style.height = '50px'
            colorDiv.style.width = '100px'
            colorDiv.style.backgroundColor = `${hairColor}`
        }
        labelCount++
    }
}

personForm.addEventListener('submit', handleSubmit)