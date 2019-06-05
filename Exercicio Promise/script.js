// let retornaPromessa = () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() =>{
//             reject("deu ruim")
//         },200)
//     })
// }
// const  job = ()=> {
//     retornaPromessa()
//     .then((resposta) => alert(resposta))
//     .catch((erro) => alert(erro))
// }

let retornaPromessa = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            resolve("Hello World")
        }, 2000)
    })
}
const  job = ()=> {
    retornaPromessa()
    .then((resposta) => console.log(resposta))
    
}