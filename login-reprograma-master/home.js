const checkUser = () =>{
    //verifica se o usuario ja esta logado
    if (localStorage.getItem("token")){
        //se estiver, buscar as informações do usuário
        getUser()
        
    }else{
        
        window.location.href = "index.html"
    }
}    
const getUser = () => {

    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(objJavascript => {
    document.getElementById("profile").innerHTML = criaPainel
    (objJavascript.results[0])
    document.getElementById("username").innerHTML = objJavascript.results[0].name.first
    })
    .catch(error => console.log(error))

}

const criaPainel = (user) => {
    console.log({user})
    return`
    <div class=" panel text-center padding">
            <figure class="image is-128x128 margin-auto padding">
              <img src="${user.picture.medium}" alt="" class="is-rounded">
            </figure>
  
            <div class="content">
              <p>
                <strong>${user.name.first} ${user.name.last}</strong>
                <br>
                <i class="fas fa-mobile-alt"></i>
                <small>cel${user.cell}</small>
              </p>
            </div>
  
            <div>
              <button class="button is-warning" onclick="testarApi()">Testar API</button>
            </div>
  
            <div class="content column">
              <div class="column">
                <div><i class="far fa-envelope">${user.email}</i></div>
              </div>
            </div>
            
            <div class="column">
              <div><i class="fas fa-map-marker-alt">${user.location.city}</i></div>
            </div>
  
            <div class="column">
              <div><i class="far fa-calendar">${user.dob.date}</i></div>
            </div>
  
            <div class="content padding">
              <button class="button is-danger" onclick="signOut()">
                Sair
              </button>
            </div>
  
    `

}
const testarApi = () =>{
    fetch("https://lais-api-reprograma.herokuapp.com/resource",{
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            //autorização para acessar recurso
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(result => alert("sucesso"))
    .catch(error => alert(error))
}
const signOut = () => {
    localStorage.clear()
    window.location.href = "index.html"
}
checkUser()