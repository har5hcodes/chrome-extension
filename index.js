
let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
inputBtn.addEventListener("click", function () {
    if (inputEl.value != '')
        myLeads.push(inputEl.value)
    for (let i = 0; i < myLeads.length; i++) {

        const li = document.createElement("li")
        li.textContent = myLeads[i]
        ulEl.append(li)
    }

})

