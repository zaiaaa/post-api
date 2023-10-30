const resposta = document.getElementById('resp')
const url = "http://localhost:3000/atendimentos"

async function getData() {
    const resp = await axios.get(url).then(response => response.data).catch(err => console.log('Erro -> ' + err.message))
    console.log(resp)
}

async function postData(dados){
    const resp = await axios.post(url, dados).then(response => console.log('foi', response.data, getData())).catch(e => console.log('erro -> ', e.message))
}

async function getDataById(id){
    const resp = await axios.get(url).then(response => response.data).catch(err => console.log('Erro -> ' + err.message))
    const filtrado = resp.filter(item => item.id == id)
    console.log(filtrado)
}

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = document.getElementById('data').value 
    const servico = document.getElementById('servico').value 
    const cliente = document.getElementById('cliente').value
    const status = document.getElementById('situacao').value  
    
    const dados = {
        data,
        servico,
        cliente,
        status,
    }
    //console.log(dados)

    postData(dados)

})

const btnFiltro = document.getElementById('btnFiltrar').addEventListener('click', () =>{
    const input = document.getElementById('filtro').value
    getDataById(input)
})



getData()