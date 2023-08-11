import { todo, createTask, openTaskCreate, closeTaskCreate } from './todo'
import { projects } from './project'

document.getElementById("createBtn").addEventListener("click", openTaskCreate)
document.getElementById("cancelTask").addEventListener("click", closeTaskCreate)
document.getElementById("addTask").addEventListener("click", createTask)