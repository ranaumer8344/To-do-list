// Adding Tasks

document.querySelector('#push').onclick = function () {
    document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <div class="display-flex">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    Remove
                </button>
            </div>
        </div>
    `;

    // Adding Deleting

    var current_tasks = document.querySelectorAll(".delete");
    
    for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.remove();
        }
    }
}