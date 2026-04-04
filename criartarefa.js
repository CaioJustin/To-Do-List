
export function criartarefa() {

    const input = document.getElementById('input')
    const tarefas = document.getElementById('tarefas')


    let li = document.createElement('li')


    let label = document.createElement('label')
    label.classList.add("container")

    let inpu = document.createElement('input')
    inpu.type = "checkbox"

    let span = document.createElement('span')
    span.classList.add("checkmark")


    let p = document.createElement('p')
    p.innerText = input.value

    let botao = document.createElement('button')
    botao.innerText = "Remover";

    let n = input.value
    let tasks = []
    let tasksSalvas = localStorage.getItem('tarefa')

    if (tasksSalvas) {
        tasks = JSON.parse(tasksSalvas)
    } else {
        tasks = []
    }

    label.append(inpu, span)
    li.append(label, p, botao)
    tarefas.appendChild(li)


    input.value=""

    let Newtask = { 'Complete': false, 'NameTask': n }
    tasks.push(Newtask)

 


    localStorage.setItem('tarefa', JSON.stringify(tasks))


}


export function display(){

    let qtdtask =document.getElementById('qtdtask')
        let taskSalvas = localStorage.getItem('tarefa')
        let tasks = taskSalvas ? JSON.parse(taskSalvas) :[]

       if(tasks.length > 0) {
        tasks.forEach(element => {
            let li = document.createElement('li')


            let label = document.createElement('label')
            label.classList.add("container")

            let inpu = document.createElement('input')
            inpu.type = "checkbox"

            let span = document.createElement('span')
            span.classList.add("checkmark")


            let p = document.createElement('p')
            p.innerText = element['NameTask']

            let botao = document.createElement('button')
            botao.innerText = "Remover";

            label.append(inpu, span)
            li.append(label, p, botao)
            tarefas.appendChild(li)
        })

           
            qtdtask.innerText=`Você tem ${tasks.length} tarefas para completa`
    }else{
            
            qtdtask.innerText="Nenhuam tarefas Adicionada"
    }


console.log(tasks)
}