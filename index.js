const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')
    const personName = form.personName.value
    const hairColor = form.hairColor.value
    const age = form.age.value
    const birthplace = form.birthplace.value
    // details.innerHTML = `<em>${personName}</em>`

    const colorDiv = `<div style ="height: 50px; width: 100px; background-color: ${hairColor}"></div>`

    const detailsList = document.createElement('ul')
    details.appendChild(detailsList)

    const nameLi = document.createElement('li')
    nameLi.innerHTML = `Name: ${personName}`
    detailsList.appendChild(nameLi)

    const colorLi = document.createElement('li')
    colorLi.innerHTML = colorDiv
    detailsList.appendChild(colorLi)

    const ageLi = document.createElement('li')
    ageLi.innerHTML = `Age: ${age}`
    detailsList.appendChild(ageLi)

    const birthplaceLi = document.createElement('li')
    birthplaceLi.innerHTML = `Birthplace: ${birthplace}`
    detailsList.appendChild(birthplaceLi)
}

personForm.onsubmit = handleSubmit