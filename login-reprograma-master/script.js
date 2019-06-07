//1 api, 2 pegar valor do input
const userInput = document.getElementById("username")
const passWordInput = document.getElementById("password")
const form = document.getElementById("login-form")

form.addEventListener("submit", event => {
    event.preventDefault()
    const bodyParaEnviar = JSON.stringify({
        user: userInput.value,
        pass: passWordInput.value
    })
    fetch("https://lais-api-reprograma.herokuapp.com/login", {
           method: "POST",
           //mudando js para json usa stringify
           body: bodyParaEnviar,
           
           //informações sobre a request (request é quando vai requerir e response sao as respostas do requsição)
           headers:{
                "Accept": "application/json",  //o que eu estou mandando
                "Content-type": "application/json"  //oque eu estou recebendo
           }
        })
    // .then(response => response.json()) //resposta em json da api do que foi mandado pra ela e qur transformei em js
    // .then(res => console.log(res)) //resposta que trasnformei em js
    // .catch(error => console.log(error)) 
.then(resposta => resposta.json())
.then(objetoJavascript => {
    console.log(objetoJavascript)
    localStorage.setItem("token", objetoJavascript.token)
    window.location.href="home.html"
})
.catch(error => console.log(error))  
    
})


// 