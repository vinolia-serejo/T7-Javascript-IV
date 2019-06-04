const nomesNoRole = [
    "Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"
];

// 1. Pegar o valor do input
// 2. Validar o valor do input
// 3. Procurar nome na lista
// 4. Exibir resultado

let input = document.getElementById ('input');
let btn = document.getElementById ('btn');
let resposta = document.querySelector ('p');


btn.addEventListener ('click', function(event){
    event.preventDefault();
    input.value.innerHTML = '';
    
    const verificacao = nomesNoRole.toLowerCase().find(input.value.toLowerCase());
    if (verificacao == true) {
        resposta.innerHTML = `✓ <strong>${input.value}</strong> estava no rolê.`;
        
    } else if (input.value == '' || input.value == 0) {
        resposta.innerHTML = " ";
    } else {        
        resposta.innerHTML = `X <strong>${input.value}</strong> não estava no rolê.`;
    }
})

// document.getElementById("form-do-role").addEventListener("submit", function(event){
//     // Tira a ação padrão de submit com preventDefault
//     event.preventDefault()
//     // limpamos o nosso status (caso tenha alguma mensagem lá)
//     document.getElementById("status").innerHTML = ""
//     if(document.getElementById("nome").classList.contains("is-valid")){
//       document.getElementById("nome").classList.remove("is-valid")
//     }
//     if(document.getElementById("nome").classList.contains("is-invalid")){
//       document.getElementById("nome").classList.remove("is-invalid")
//     }
//     // pegamos o valor do campo
//     const valorCampo = document.getElementById("nome").value
    
//     // precisamos validar o valor do valorCampo, caso esteja vazio
//     // ou não seja do tipo String
//     // caso tudo der sucesso, imprime a mensage pro usuário
//     // senão imprime o erro
//     // para isso usaremos o try catch, try executa funções
//     // caso dentro delas dtenha um throw, irá cair no catch
//     try{
//       validacao(valorCampo)
//       exibirNome(valorCampo)
//       console.log("sucesso")
//     }catch(erro){
//       // caso deu algum problema enquanto as funções do bloco try era 
//       // executado, irá cair aqui no catch e vamos imprimir o erro
//       console.log("ops!")
//       document.getElementById("status").innerHTML = erro
//       document.getElementById("nome").classList.add("is-invalid")
//     }
//   })
