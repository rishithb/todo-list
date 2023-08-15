import { project, projects, X } from "./project"
import { format } from "date-fns"

const todo = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
}

function createTask() {
    let TITLE = document.getElementById("T").value
    let DESC = document.getElementById("D").value
    let DATE = new Date(document.getElementById("DD").value)
    let newDate = format(new Date(DATE.getFullYear(), DATE.getMonth() + 1, DATE.getDay() + 1), "MMM d, yyyy")
    let PRIOR

    if (document.getElementById('check').checked)
        PRIOR = true
    else PRIOR = false
    
    document.getElementById("FORM").reset()
    closeTaskCreate()

    var t = todo(TITLE, DESC, newDate, PRIOR)
    projects[X].projTasks.push(t)
    updateTaskDOM()
}

function updateTaskDOM() {
    document.getElementById("taskGrid").innerHTML = ""
    for (var i = 0; i < projects[X].projTasks.length; i++) {
        createTaskDOM(projects[X].projTasks[i])
    }
}

function createTaskDOM(TASK) {
    let index = projects[X].projTasks.indexOf(TASK)

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
    if (TASK.dueDate == "") {
        taskDate.innerText = TASK.dueDate
    }
    else  taskDate.innerText = "Due " + TASK.dueDate
    taskItem.append(taskDate)

    // task's priority
    if (TASK.priority) {
        // add DOM for priority label
    }

    const taskDelete = document.createElement("button")
    taskDelete.classList.add("deleteTaskBtn")
    taskDelete.id = "del" + index
    taskDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`
    taskDelete.addEventListener("click", function(event) {
        let index = Number(event.currentTarget.id.slice(-1))
        projects[X].projTasks.splice(index, 1)
        updateTaskDOM()
        console.log(projects[X].projTasks)
    })
    taskItem.append(taskDelete)

    const priorityAdd = document.createElement("button")
    priorityAdd.classList.add("addPriorBtn")
    priorityAdd.id = "prior" + index
    priorityAdd.style.display = "none"
    priorityAdd.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>flag-plus</title><path d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M12.4,5H18V12C15.78,12 13.84,13.21 12.8,15H11L10.6,13H5V20H3V3H12L12.4,5Z" /></svg>`
    priorityAdd.addEventListener("click", function(event) {
        // create priority function
    })
    priorityAdd.style.transition = "0.2s"
    taskItem.append(priorityAdd)


    taskItem.addEventListener("mouseenter", () => 
    {
        taskItem.style.transform = "scale(1.1)"
        taskDate.style.opacity = "1"
        taskDate.style.paddingTop = "16px"
        priorityAdd.style.display = "block"
        priorityAdd.style.opacity = "1"
    })

    taskItem.addEventListener("mouseleave", () => 
    {
        taskItem.style.transform = "scale(1)"
        taskDate.style.opacity = "0"
        taskDate.style.paddingTop = "0px"
        priorityAdd.style.display = "none"
        priorityAdd.style.opacity = "0"
    })

    document.getElementById("taskGrid").append(taskItem)
}


function openTaskCreate() { document.getElementById("darken").style.display = "block" }
function closeTaskCreate() { document.getElementById("darken").style.display = "none" }



export { todo, openTaskCreate, closeTaskCreate, createTask, updateTaskDOM }
