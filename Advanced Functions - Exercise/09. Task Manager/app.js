function solve() {

    // collect field values
    const input = {
        name: document.getElementById('task'),
        description: document.getElementById('description'),
        Date: document.getElementById('date')
    }

    const [_, openSection, progressSection, finishedSection] = Array.from(document.querySelectorAll('section')).map(e => e.children[1]);
    document.getElementById(`add`).addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();
        // create elements
        const article = document.createElement('h3');
        article.appendChild(createElement('h3', input.name.value));
        article.appendChild(createElement('p', `Description: ${input.description.value}`));
        article.appendChild(createElement('p', `Due Date: ${input.Date.value}`));
        const div = createElement('div', '', 'flex');
        div.appendChild(createElement('button', 'Start', 'green'));
        div.appendChild(createElement('button', 'Delete', 'red')); 
        article.appendChild(div);
        // append to open section
        openSection.appendChild(article);

        Object.values(input).forEach(i => i.value = '');

        // add functionallity tfor start,finish,delete task
    }

    function createElement(type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
    }
}