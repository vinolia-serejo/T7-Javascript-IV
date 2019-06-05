const retornaNumero = () => {
        return new Promise((resolve, reject)=>{
            if(isNaN(numero)){
                reject("deu ruim")
            }

            else if (numero%2 == 0){
                setTimeout(() =>{
                    reject(numero + " é par ")
                }, 2000)
            }

            else {
                setTimeout(() =>{
                    resolve(numero + " é impar ")
                }, 1000)
            
            }
        
    }
)}
const job = (numero)=> {
    retornaNumero(numero)
    .then((resposta) => (console.log(resposta)))
    .then((resposta1) => (console.log(resposta1)))
    .catch((erro) => ( console.log(erro)))
}
