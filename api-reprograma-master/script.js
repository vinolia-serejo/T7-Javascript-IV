  //integrando a api no front, depois de testa-la no postman
const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")
const cepError = document.getElementById("cep-error")

// const exibeResultado = objeto =>{
//     let endereco = `
//     <div>
//        <h3>Endereço da Princesa Marshmallow</h3>
//        <p>cep: ${objeto.cep}<p>
//        <p>logradouro: ${objeto.logradouro}<p>
//        <p>complemento: ${objeto.complemento}<p>
//        <p>bairro: ${objeto.bairro}<p>
//        <p>localidade: ${objeto.localidade}<p>
//        <p>uf: ${objeto.uf}<p>
//     </div> 
//     `
//     document.getElementById("exibe-endereco").innerHTML = endereco   
// }

const getData = url => {
   return new Promise ((resolve, reject) =>{

        const requisicao = new XMLHttpRequest()
        requisicao.open("GET", url)
        requisicao.onload = function(){
            if (requisicao.status === 200){
                const resposta = JSON.parse(requisicao.responseText)
                resolve(resposta)
            }
        } 
        requisicao.onerror = () => {
            reject( " CEP inválido" )
        }
    requisicao.send()
    })
 
}
cepInput.addEventListener("blur", () =>{
    const valorDoCampo = cepInput.value 
    if (valorDoCampo){
    //     getData(`https://viacep.com.br/ws/${valorDoCampo}/json/`)
    // .then(resultadoAPI => {
        fetch(`https://viacep.com.br/ws/${valorDoCampo}/json/`)
        .then(res => {
            console.log(res)
            return res.json()
        })    
        .then((resultadoAPI) => { 
        cepInput.classList.remove("error")
        cepError.innerHTML = " "
        cepInput.value = resultadoAPI.cep
        logradouroInput.value = resultadoAPI.logradouro
        complementoInput.value = resultadoAPI.complemento
        bairroInput.value = resultadoAPI.bairro
        localidadeInput.value = resultadoAPI.localidade
        ufInput.value = resultadoAPI.uf
   })
    .catch(erro => {
        cepInput.classList.add("error")
        cepError.innerHTML = erro
        logradouroInput.value = " "
        complementoInput.value = " "
        bairroInput.value = " "
        localidadeInput.value = " "
        ufInput.value = " "
    })
    }else{
        cepInput.classList.add("error")
        cepError.innerHTML = "Campo obrigatório"
    }
    
})
