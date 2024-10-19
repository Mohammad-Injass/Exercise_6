let choice;
let exit = true;

let tasks = [];
let toggle_tasks = [];

function getToggle(Toggle) {
    return Toggle ? "complete" : "not complete";
}

while (exit) {
    console.log("=== Menu ===");
    console.log("1. add task");
    console.log("2. view tasks");
    console.log("3. toggle task");
    console.log("4. edit task");
    console.log("5. search for tasks");
    console.log("6. delete task");
    console.log("7. exit");
    choice = prompt("Enter your choice");
    switch (choice) {
        case "1":
            let newAdd = prompt("Enter the task description:");
            tasks.push(newAdd);
            toggle_tasks.push(false);
            break;
        case "2":
            for (let i = 0; i < tasks.length; i++) {
                console.log(
                    i + 1 + " : " + tasks[i] + "[" + getToggle(toggle_tasks[i]) + "]"
                );
            }
            break;
        case "3":
            let idToggle_tasks = prompt("Enter id tasks.");
            idToggle_tasks = parseInt(idToggle_tasks);
            if (toggle_tasks[idToggle_tasks - 1]) {
                toggle_tasks[idToggle_tasks - 1] = false;
            } else {
                toggle_tasks[idToggle_tasks - 1] = true;
            }
            break;
        case "4":
            let idToggle_tasks_1 = prompt("Enter id tasks.");
            idToggle_tasks_1 = parseInt(idToggle_tasks_1);
            let newDescription = prompt("Enter the new description for task:");
            tasks[idToggle_tasks_1 - 1] = newDescription;
            break;
        case "5":
            let search = prompt("Enter any word to search tasks:");
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].includes(search)) {
                    console.log(tasks[i]);
                }
            }
            break;
        case "6":
            let idToggle_tasks_3 = prompt("Enter id tasks.");
            idToggle_tasks_3 = parseInt(idToggle_tasks_3);
            tasks.splice(idToggle_tasks_3 - 1, 1);
            toggle_tasks.splice(idToggle_tasks_3 - 1, 1);
            break;
        case "7":
            console.log("exiting ");
            exit = false;
            break;
        default:
            console.log("Wrong Choice. Enter again");
            break;
    }
}
