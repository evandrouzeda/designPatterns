const campos = {
    nome: {label: "Nome Completo", placeholder: "Seu nome", type: "text"},
    nascimento: {label: "Data de Nascimento", placeholder: "Data de Nascimento", type: "date"},
    brasileiro: {label: "Brasileiro", placeholder: "", type: "checkbox"},
}

class Visao {
    b = document.createElement("button")

    constructor(object){
        const main = document.querySelector("main")
        for (const key in object) {
            const label = document.createElement("label")
            label.innerText = campos[key].label
            main.appendChild(label)
            this[key] = document.createElement("input")
            this[key].type = campos[key].type
            this[key].placeholder = campos[key].placeholder
            main.appendChild(this[key])
        }
        this.b.innerText = "Inserir"
        main.appendChild(this.b)
    }

    adicionarClick(callback){
        this.b.onclick = callback
    }
}

class Controlador {
    constructor(visao, modelo){
        this.visao = visao
        this.modelo = modelo

        this.visao.adicionarClick(this.acao.bind(this))
    }

    acao(e){
        console.log(this);
        for (const key in this.modelo) {
            this.modelo[key] = this.visao[key][this.visao[key].type === "checkbox"? "checked" : "value"]
        }
        console.log(this.modelo);
    }
}


class Usuario {
    nome = ""
    nascimento = ""
    brasileiro = false
}

const usuario = new Usuario()
const visao = new Visao(usuario)
const controlador = new Controlador(visao, usuario)

class Amigo {
    nome = ""
    brasileiro = false
}

const amigo = new Amigo()
const visaoa = new Visao(amigo)
const controladora = new Controlador(visaoa, amigo)