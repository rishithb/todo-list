import { todo, createTask, openTaskCreate, closeTaskCreate, updateTaskDOM } from './todo'
import { project, projects, X, projectDOM } from './project'

var welcomeTask = todo("Welcome!", "This is a sample task, start adding your own!", "", true)
const defaultProject = project("Default Project")
defaultProject.projTasks.push(welcomeTask)
projects.push(defaultProject)
updateTaskDOM()


document.getElementById("createBtn").addEventListener("click", openTaskCreate)
document.getElementById("cancelTask").addEventListener("click", closeTaskCreate)
document.getElementById("addTask").addEventListener("click", createTask)