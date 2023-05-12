//initial create button
let createButton = document.getElementById("create-task");
//initial array that holds all tasks 
let taskArray = [];
//initial the textbox in which we store tasks
let taskNameInput = document.getElementById("new-task")
taskNameInput.focus();


//listen to the textbox to enable the create button
taskNameInput.addEventListener('input', function () {
    //if its not empty
    if (taskNameInput.value !== '') {
        // enable the create button
        createButton.removeAttribute('disabled');
    }
    //otherwise do nothing 
    else {
        
    }
});

//listen for when we click the create button
createButton.addEventListener("click", addTask)

//listen for when the user hits enter on the txtbox
taskNameInput.addEventListener("keydown",function (event1) {
    if (event1.key==="Enter"){
        addTask();
    }
    else{}
});

// main function handling adding, completing, deleting tasks
function addTask(event) {
    if (taskNameInput.value==="") {}
    else{
   

    //find the textbox where people log new tasks and take the value entered in it
    let newTask = document.getElementById("new-task").value;
    // this is where we're going to populate the task list, which is a <ul> element in the dom
    const taskList = document.getElementById("task-list");
    //create a new html <li> element 
    const li = document.createElement("li");
    // that <li>'s text content will be what was in the textbox
    li.textContent = newTask;
    // Add Bootstrap class to li element
    li.classList.add("list-group-item");
    // place the <li> element in the task list
    taskList.appendChild(li);
    //place the task in the task array for safe keeping
    taskArray.push(newTask);
    //rid the textbox of its contents
    document.getElementById("new-task").value = "";
    document.getElementById("new-task").focus();

    // create a delete button that we'll eventually place in the new <li>    
    const deleteButton = document.createElement("button");
    //style the delete button with some bootstrap classes
    deleteButton.classList.add("btn", "btn-sm", "float-right", "ml-1"); 
    //put a fontawesome icon in the button
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    // add the button to the li element
    li.append(deleteButton);

    // CREATE a complete button that we'll eventually place in the new <li>
    const completeButton = document.createElement("button");
    // Add Bootstrap classes to button 
    completeButton.classList.add("btn", "btn-sm", "btn-secondary", "float-right");
    // populate the content of the button with some text 
    completeButton.textContent = "Mark as Complete"; 
    // add the button to the <li> element
    li.append(completeButton);

    //now that we've got at least one item, we can clear the empty state message
    document.getElementById("empty-state-message").textContent = "";
    //log the task array to the console
    console.log(taskArray);


    deleteButton.addEventListener("click", function () {
        // remove the parent <li> element from the DOM
        li.remove();
        //remove the item from the task array. use a loop to go through all array items 
        for (i = 0; i < taskArray.length; i++) {
            //if the current array item matches the task we're deleting
            if (taskArray[i] === newTask) {
                //remove that single item 
                taskArray.splice(i,1);
                // and stop the loop from continuing 
                break;
            }
        }
        console.log(taskArray);

    });
    //listen for when they click the complete button. when they do...
    completeButton.addEventListener("click",function() {
        //change the li background
        li.style.backgroundColor="grey";
        //change the li font color
        li.style.color="white";  
        //remove the complete button
        completeButton.remove();
        //create a new element <p> instead
        const completedText=document.createElement("p");
        //give it some content
        completedText.textContent="Completed";
        //give it some color
        completedText.style.color="white";
        //give it some bootstrap classes
        completedText.classList.add("float-right","mr-3");
        //give it some italics
        completedText.style.fontStyle="italic";
        //add it to the li element
        li.append(completedText);

        completedText.addEventListener("mouseenter", function() {
            completedText.style.color = "blue";
            completedText.style.cursor = "pointer";

          });
          completedText.addEventListener("mouseleave", function() {
            completedText.style.color = ""; // Resets the color to its default
            completedText.style.cursor = ""; // Resets the cursor to its default
          });

    completedText.addEventListener("click", function () {
        completedText.remove();
        li.append(completeButton);
        li.style.backgroundColor="white";
        li.style.color="black";
    })
    });    
    }}
