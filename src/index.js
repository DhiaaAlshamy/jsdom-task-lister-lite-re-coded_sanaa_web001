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
   let priority=document.getElementById("periority").value;
   let task=document.createElement("li");
   let taskText=document.createElement("p");
   taskText.style.color=priority;
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
 //  document.getElementById("tasks").children=sortTasks(document.getElementById("tasks").children);
 // document.getElementByName("deletebtn").addEventListener("click",deleteItem);
}
function deleteItem(element){
  
   element.toElement.parentElement.parentElement.remove();
 }

//  function sortTasks(tasks){
//    console.log(tasks);
//    let newTasks;

//   array.forEach(element => {
    
//   });
  //   if(element.p.color=="red"){
  //     //newTasks.push(element);
  //   }
  // });
  // tasks.forEach(element => {
  //   if(element.p.color=="yellow"){
  //    // newTasks.push(element);
  //   }
  // });
  // tasks.forEach(element => {
  //   if(element.p.color=="green"){
  //   //  newTasks.push(element);
  //   }
  // });
  return newTasks;
 }
=======
=======
  delete element.parentElement;
}
>>>>>>> 1d3fbad0693eb6430687ca31fb6b603943b1e945
>>>>>>> 38e3ed59cf9db7c15550cb659a439d33eed138e6

