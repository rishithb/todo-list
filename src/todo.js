import { projects, X } from "./project"

const todo = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
}

function createTask() {
    let TITLE = document.getElementById("T").value
    let DESC = document.getElementById("D").value
    let DATE = document.getElementById("DD").value
    let PRIOR

    if (document.getElementById('check').checked)
        PRIOR = true
    else PRIOR = false
    
    document.getElementById("FORM").reset()
    closeTaskCreate()

    var t = todo(TITLE, DESC, DATE, PRIOR)
    projects[X].push(t)
    console.log(projects[X])
    createTaskDOM(t)
}

function createTaskDOM(TASK) {
    // item div
    const taskItem = document.createElement("div")
    taskItem.classList.add("taskItem")

    // task's title
    const taskTitle = document.createElement("h4")
    taskTitle.classList.add("taskTitle")
    taskTitle.innerText = TASK.title
    taskItem.append(taskTitle)

    // task's description
    const taskDesc = document.createElement("p")
    taskDesc.classList.add("taskDesc")
    taskDesc.innerText = TASK.description
    taskItem.append(taskDesc)

    // task's Date
    const taskDate = document.createElement("p")
    taskDate.classList.add("taskDate")
    taskDate.innerText = TASK.dueDate
    taskDate.style.transition = "0.2s"
    taskItem.append(taskDate)

    taskItem.addEventListener("mouseenter", () => 
    {
        taskItem.style.transform = "scale(1.05)"
        taskDate.style.opacity = "1"
    })

    taskItem.addEventListener("mouseleave", () => 
    {
        taskItem.style.transform = "scale(1)"
        taskDate.style.opacity = "0"
    })

    // task's priority
    if (TASK.priority) {
        // add DOM for priority label
    }

    const taskDelete = document.createElement("button")
    taskDelete.classList.add("deleteTaskBtn")
    taskDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`
    taskItem.appendChild(taskDelete)

    document.getElementById("taskGrid").append(taskItem)
}



function openTaskCreate() { document.getElementById("darken").style.display = "block" }
function closeTaskCreate() { document.getElementById("darken").style.display = "none" }



export { todo, openTaskCreate, closeTaskCreate, createTask }
