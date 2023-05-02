function addTodoList() {
    
    createLi(days.value);
    
  }
  
  function createLi(day) {
    const li = document.createElement('li');
    const atividade = document.getElementById("atividade").value;
    
    li.classList.add("li");
    li.innerText = atividade;

    const button = document.createElement('button');
    button.innerText = 'Feito';
    button.classList.add('concluir-button');
    button.addEventListener('click', () => {
       
        li.classList.toggle('completed');
    });
    li.appendChild(button);
    
    document.getElementById("atividade").value = "";
  
    switch(day) {
      case "terca":
        todoTerca.appendChild(li);
        break;
      case "segunda":
        todoSegunda.appendChild(li);
       
        break;
        case "quarta":
        todoQuarta.appendChild(li);
        
        break;
        case "quinta":
        todoQuinta.appendChild(li);
        
        break;
        case "sexta":
        todoSexta.appendChild(li);
        
        break;
      default:
        console.error("Dia inválido.");
    }
    
    return li;
  }
  
  const days = document.getElementById("days");
  let daysValue = days.value;
  console.log("O valor selecionado é: " + daysValue);
  
  const todoTerca = document.getElementById("todoListTerça");
  const todoSegunda = document.getElementById("todoListSegunda");
  const todoQuarta = document.getElementById("todoListQuarta");
  const todoQuinta = document.getElementById("todoListQuinta");
  const todoSexta = document.getElementById("todoListSexta");
  
  const apagarConcluidasButton = document.getElementById("apagarConcluidas");
    apagarConcluidasButton.addEventListener("click", function(event) {
    event.preventDefault();
    apagarConcluidas();
});

function apagarConcluidas() {
  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    if (item.classList.contains("completed")) {
      item.remove();
    }
  });
}

  

  