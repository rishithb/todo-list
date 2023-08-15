import { todo, createTaskDOM } from './todo'

const project = (projName, projTasks = []) => {
    return { projName, projTasks }
}

const X = 0
const projects = []

function projectDOM(p) {
    const projectName = document.createElement("h1")
    projectName.classList.add("projectName")
    projectName.innerText = p.projName
    
    document.getElementById("projectList").append(projectName)
}

function openProjectCreate() {

}

function closeProjectCreate() {

}

export { project, projects, X, projectDOM }