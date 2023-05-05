let contando = 0;
let input = document.getElementById('atividade');
let button = document.getElementById('btn-js');
let main = document.getElementById('area');

function adicionar() {
    let valor = input.value;

    //Esse é o sistema de validação, anteriormente a variavel "valor", coletou as informações q o usuario digitou no input, e agora estou fazendo a validação se as informações, n estiverem vazias,nulas e indefinidas, irá acontecer algo
    if ((valor !== "") && (valor !== null) && (valor !== undefined)) {
        //Para fazer a função de apagar, é necessário saber qual item irá ser deletado especificadamente, então é importante cada item ter um id, por conta disso foi feito esse contador, toda vez q um item for adicionado ele vai colocar um número e por no id especifico
        ++contando;
        //O marcar, év uma função para deixar a tarefa marcada e por conta disso, igual ao deletar é necessário saber especificadamente qual tarefa será marcada, por isso usar o contador como paramentro
        let novaAtividade = `<div id="${contando}" class="item">
            <div onclick="marcar(${contando})" class="icone">
                <i id="ic_${contando}" class="bi bi-circle"></i>
            </div>
            <div onclick="marcar(${contando})" class="tarefa">
            <!--Dessa maneira ele vai pegar o valor q essa variavel possuir-->
                ${valor}
            </div>
            <div class="botao">
                <button onclick="apagando(${contando})" class="deletar"><i class="bi bi-trash"></i>
                    Apagar</button>
            </div>
        </div>`;

        //Dessa maneira sera adicionado um novo item na area
        main.innerHTML += novaAtividade;

        //Dessa maneira, quando a atividade for inserida o valor do campo input vai ficar vazio e ele vai receber o foco, como se tivesse sido clicado
        input.value = "";
        input.focus();

    }
}
//Dessa maneira, essa função esta com o parametro com o nome "id", ele esta pegando os dados q esta no contador acima e irá remove-lo
function apagando(id) {
    var tarefaApagar = document.getElementById(id);
    tarefaApagar.remove();
}

function marcar(id) {
    var marcarTarefa = document.getElementById(id);
    //Dessa maneira, será verificado qual é a classe q esta sendo usada pelo item
    var classe = marcarTarefa.getAttribute('class');

    if (classe == "item") {
        //Essa propriedade vai remover a classe 
        marcarTarefa.classList.remove('item');
        //E essa vai adicionar
        marcarTarefa.classList.add('item-clicado');

        var icone = document.getElementById('ic_' + id);
        icone.classList.remove('bi-circle');
        icone.classList.add('bi-check-circle-fill');

        //Essa propriedade vai fazer com que ele vá la para baixo na lista, ela verifica o parentesco q seria a div pai e depois meio q cria um filho q desce, no caso o filho é ele mesmo
        marcarTarefa.parentNode.appendChild(marcarTarefa);
    } else {
        marcarTarefa.classList.remove('item-clicado');
        marcarTarefa.classList.add('item');

        var icone = document.getElementById('ic_' + id);
        icone.classList.remove('bi-check-circle-fill');
        icone.classList.add('bi-circle');
    }

}

//Dessa forma, quando a tecla enter vai ter a mesma função do botão inserir
//O addevent, verifica quando um chamado de evento acontecer com o input e acionar o keyup e a função
input.addEventListener("keyup", function (event) {
    //A função keyup vai verificar se o event acionado, foi executado na tecla 13 (enter)
    if (event.keyCode === 13) {
        //Essa função é para tirar qualquer coisa q o enter faria, antes desse mini sistema
        event.preventDefault();
        //Se o evento foi executado na tecla 13, vai executar a variavel button
        button.click();
    }
})