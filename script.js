const inputText = document.getElementById("inputText")
const button = document.getElementById("btn")
const taskList = document.getElementById("taskList")

button.addEventListener("click",()=>{

  const taskText = inputText.value.trim();

  if(taskText !== ""){
    const listOfTask = document.createElement("li")

    listOfTask.textContent = taskText
    taskList.appendChild(listOfTask)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Deleteeeee"
    deleteButton.addEventListener("click",()=>{
      taskList.removeChild(listOfTask)

    })

    listOfTask.appendChild(deleteButton)

    listOfTask.addEventListener("click",()=>{
      listOfTask.classList.toggle("completed")

    })

    inputText.value = ""




  }

})

// adding keyboard key press function 

inputText.addEventListener("keypress",(e)=>{
  if(e.key === "Enter"){
    button.click()
  }
})