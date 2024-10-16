const addNewTask = (text) => {
    document.querySelector("#todolist").innerHTML += `<li>${text}<i class="icon btn-close"></i></li>`;
    document.querySelector("#input").value = "";
}

document.querySelector("#add").addEventListener('click', () => {
    let text = document.querySelector("#input").value;
    if (text != '')
        addNewTask(text);
});

document.querySelector("#todo").addEventListener('click', (e) => {
    if (e.target.tagName == 'I')
        e.target.parentNode.remove();
    e.target.classList.toggle('done');
});

"mouseover mouseout".split(" ").forEach( (each) => {
    document.querySelector("#todo").addEventListener(each, (e) => {
        if (e.target.tagName == 'I')
            e.target.parentNode.classList.toggle('remove');
    });
});