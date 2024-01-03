var todoList = []; //list for storing the work

document.getElementById("myBtn").addEventListener("click", getElemnt); //putting event listener on button with gteElemnt as function

function getElemnt() {
  var inputVal = document.getElementById("myInput").value; //storing the value of input field
  if (inputVal.trim() !== "") {
    //checks for the entered input value is empty or not
    todoList.push(inputVal); //adding input value in array
    document.getElementById("myInput").value = ""; // Clear the input field
    generateList(); //updating the list of tasks on the webpage
  }
}

function deleteTask(index) {
  //function to delte the task
  todoList.splice(index, 1); //deletes 1 element at a time
  generateList();
}

function generateList() {
  const ul = document.querySelector(".list-group"); //assigning to ul
  ul.innerHTML = ""; //clearing the contents of ul

  todoList.forEach((item, index) => {
    const li = document.createElement("li"); //creating li element
    li.classList.add("list-group-item"); //adding class to li element

    const val = document.createTextNode(item);

    const deleteBtn = document.createElement("button"); //creating a delete buttn
    deleteBtn.innerHTML = "Delete"; //changing name to Delete
    deleteBtn.classList.add("btn-danger"); //assingning class to button
    deleteBtn.addEventListener("click", () => deleteTask(index)); //putting an eventlister i.e delete to the button

    li.appendChild(val); //adding val(elements) to li
    li.appendChild(deleteBtn); //adding delete button to li

    ul.appendChild(li); //adding li to ul
  });
}

window.addEventListener("load", generateList);
