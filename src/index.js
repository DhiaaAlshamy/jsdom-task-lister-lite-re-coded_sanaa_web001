document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form")
  .addEventListener("submit",function(event){
    addTasks();
    event.preventDefault();
  })
  
  
});
function addTasks(){
  
   let txt= document.getElementById("new-task-description").value;
   let task=document.createElement("li");
   let taskText=document.createElement("p");
   let taskDeleteBtn=document.createElement("button");
   taskDeleteBtn.textContent="Delete Task";
   taskText.textContent=txt;
   taskDeleteBtn.addEventListener("click",deleteItem)
   taskText.appendChild(taskDeleteBtn);
   task.className="task-item";
   task.id=`${txt}`;
  // taskText.innerHTML=`${txt}`;
   task.appendChild(taskText)
   document.getElementById("tasks").appendChild(task);
 // document.getElementByName("deletebtn").addEventListener("click",deleteItem);
}
function deleteItem(element){
  
   element.toElement.parentElement.parentElement.remove();
 }

