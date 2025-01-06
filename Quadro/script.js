const columns = document.querySelectorAll(".column__cards");

let draggedCard;

// Função para pegar o parâmetro da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Pegando o nome da lista da URL e atualizando o título
const listName = getQueryParam('list');
if (listName) {
    document.getElementById('listTitle').textContent = listName;
}

const dragStart = (event) => {
    draggedCard = event.target;
    event.dataTransfer.effectAllowed = "move";
};

const dragOver = (event) => {
    event.preventDefault();
};

const dragEnter = ({ target }) => {
    if (target.classList.contains("column__cards")) {
        target.classList.add("column--highlight");
    }
};

const dragLeave = ({ target }) => {
    target.classList.remove("column--highlight");
};

const drop = ({ target }) => {
    if (target.classList.contains("column__cards")) {
        target.classList.remove("column--highlight");
        target.append(draggedCard);
        saveColumns();
    }
};

// Permite edição ao clicar no card
const editCard = (event) => {
    const card = event.target;
    card.contentEditable = "true";
    card.focus();

    // Quando o foco sai, salva o conteúdo e desabilita a edição
    card.addEventListener("focusout", () => {
        card.contentEditable = "false";
        if (!card.textContent.trim()) card.remove();
        saveColumns();
    });
};

// Criação de um novo card ao dar um duplo clique
const createCard = ({ target }) => {
    if (!target.classList.contains("column__cards")) return;

    const card = document.createElement("section");

    card.className = "card";
    card.draggable = "true";
    card.textContent = "Escreva aqui...";  // Coloca um texto padrão inicialmente
    card.contentEditable = "true";  // Permite a edição diretamente

    // Evento para remover o texto "Escreva aqui..." assim que o usuário começar a digitar
    card.addEventListener('input', () => {
        if (card.textContent.trim() === "Escreva aqui...") {
            card.textContent = ""; // Remove o texto padrão assim que o usuário começar a digitar
        }
    });

    card.addEventListener("dragstart", dragStart);
    card.addEventListener("click", editCard);

    target.append(card);
    card.focus();
    saveColumns();
};

// Salvar os dados das colunas no Local Storage
const saveColumns = () => {
    const data = Array.from(columns).map(column => {
        return Array.from(column.children).map(card => card.textContent);
    });
    localStorage.setItem("columnsData", JSON.stringify(data));
};

// Carregar os dados das colunas salvos do Local Storage
const loadColumns = () => {
    const data = JSON.parse(localStorage.getItem("columnsData"));
    if (data) {
        columns.forEach((column, index) => {
            column.innerHTML = "";  // Limpa os cartões antes de adicionar os novos
            data[index].forEach(text => {
                const card = document.createElement("section");
                card.className = "card";
                card.draggable = "true";
                card.textContent = text;  // Coloca o texto salvo no cartão
                card.contentEditable = "true";  // Permite edição diretamente

                card.addEventListener("dragstart", dragStart);
                card.addEventListener("click", editCard);

                column.append(card);
            });
        });
    }
};

// Adicionar os eventos de drag and drop
columns.forEach((column) => {
    column.addEventListener("dragover", dragOver);
    column.addEventListener("dragenter", dragEnter);
    column.addEventListener("dragleave", dragLeave);
    column.addEventListener("drop", drop);
    column.addEventListener("dblclick", createCard);

    // Torna os cards já existentes editáveis e movíveis
    column.querySelectorAll(".card").forEach((card) => {
        card.draggable = "true";
        card.addEventListener("dragstart", dragStart);
        card.addEventListener("click", editCard);
    });
});

// Carregar dados salvos ao iniciar
loadColumns();
