const inputArea = document.getElementById('input');
const listTask = document.getElementById('list-task');
const tarefaConcluida = document.getElementById('tarefa-concluida');
const tarefaImcompleta = document.getElementById('tarefa-incompleta');

function addTask() {
    let task = inputArea.value.trim();
    if (!task) {
        alert('Por favor, escreva uma tarefa');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <label>
            <input type='checkbox'>
            <span>${task}</span>
        </label>
        <span class='delete-btn'>Delete</span>
        <span class='edit-btn'>Edit</span>
    `;

    

    listTask.appendChild(li);

    tarefaImcompleta.textContent = parseInt(tarefaImcompleta.textContent) + 1;

    
    inputArea.value = '';

    

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        li.remove();
        
        const isCompleted = li.querySelector('input').checked;

        if (isCompleted) {
            tarefaConcluida.textContent = parseInt(tarefaConcluida.textContent) - 1;
        } else {
            tarefaImcompleta.textContent = parseInt(tarefaImcompleta.textContent) - 1;
        }
    });

    const editBtn = li.querySelector('.edit-btn');
    const textSpan = li.querySelector('label span');
    editBtn.addEventListener('click', function () {
        const textoEdit = prompt('Editar tarefa', textSpan.textContent);
    
        if (textoEdit !== null && textoEdit.trim() !== '') {
            textSpan.textContent = textoEdit.trim();
        }
    });

    const checkbox = li.querySelector('label input');
    
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            textSpan.classList.add('completed');
            li.classList.add('completedLi');
            

            tarefaConcluida.textContent = parseInt(tarefaConcluida.textContent) + 1;
            tarefaImcompleta.textContent = parseInt(tarefaImcompleta.textContent) - 1;
            
        } else {
            textSpan.classList.remove('completed');
            li.classList.remove('completedLi');

            tarefaConcluida.textContent = parseInt(tarefaConcluida.textContent) - 1
            tarefaImcompleta.textContent = parseInt(tarefaImcompleta.textContent) + 1
        }
    })
}