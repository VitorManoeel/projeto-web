/* const exemplo = ''
const exemplo2 = 'number'
const exemplo3 = 'boolean'
//SEMANA 2.1 "Criação de característica array"
const exemplo4 = [] */

//SEMANA 1.2
//

//SEMANA 1.3
const mediaIdade = (obj1.idade + obj2.idade + obj3.idade + obj4.idade + obj5.idade + obj6.idade) / 3; //operação matemática
console.log(mediaIdade);

//SEMANA 1.4
const magico = obj1.magico && obj2.magico && obj3.magico && obj4.magico && obj5.magico && obj6.magico;
console.log(magico);


//SEMANA 3.1
//ALTERAÇÃO DAS VARIAVEIS PARA OBJETOS, LINHAS 10 A 56

//SEMANA 3.2
const arrayDeObj = [];

//SEMANA 3.3 e 4.1 alteração para verificação booleana
//SEMANA 4.2 Adicionando verificação IF/ELSE Para Booleano

function pushArray(objeto) {
    if (objeto.magico == true) {
        arrayDeObj.push(objeto)
    } else {
        alert('O Asta não é Magico, Por isso não foi adicionado ao Array');
    }
};

pushArray(obj1)
pushArray(obj2)
pushArray(obj3)
pushArray(obj4)
pushArray(obj5)
pushArray(obj6)

/* if (obj1.magico) {
    arrayDeObj.push(obj1)
} else {
    alert('O Asta não é Magico, Por isso não foi adicionado ao Array');
};

if (obj2.magico) {
    arrayDeObj.push(obj2)
};

if (obj3.magico) {
    arrayDeObj.push(obj3)
};

if (obj4.magico) {
    arrayDeObj.push(obj4)
};

if (obj5.magico) {
    arrayDeObj.push(obj5)
};

if (obj6.magico) {
    arrayDeObj.push(obj6)
};
console.log(arrayDeObj); */

//SEMANA 5.1
function converteArray(objeto) {
    let toString = ``;
    return toString += objeto.poderMagico
}

/* et stringPoderesMagico1 = ''
for (i in obj1.poderMagico) {
    stringPoderesMagico1 += `${obj1.poderMagico[i]}, `
}

console.log(stringPoderesMagico1);

let stringPoderesMagico2 = ''
for (i in obj2.poderMagico) {
    stringPoderesMagico2 += `${obj2.poderMagico[i]}, `
}

console.log(stringPoderesMagico2);

let stringPoderesMagico3 = ''
for (i in obj3.poderMagico) {
    stringPoderesMagico3 += `${obj3.poderMagico[i]}, `
}

console.log(stringPoderesMagico3);

let stringPoderesMagico4 = ''
for (i in obj4.poderMagico) {
    stringPoderesMagico4 += `${obj4.poderMagico[i]}, `
}

console.log(stringPoderesMagico4);

let stringPoderesMagico5 = ''
for (i in obj5.poderMagico) {
    stringPoderesMagico5 += `${obj5.poderMagico[i]}, `
}

console.log(stringPoderesMagico5);

let stringPoderesMagico6 = ''
for (i in obj6.poderMagico) {
    stringPoderesMagico6 += `${obj6.poderMagico[i]}, `
}

console.log(stringPoderesMagico6);   */

//SEMANA 2.2 / 5.1  Rescrevendo o Relatorio
console.log(`${obj1.nome.toUpperCase()}\n${obj1.idade}\n${obj1.esquadraoCavaleiros}\n${obj1.magico}\n${converteArray(obj1)}`);
console.log(`${obj2.nome.toUpperCase()}\n${obj2.idade}\n${obj2.esquadraoCavaleiros}\n${obj2.magico}\n${converteArray(obj2)}`);
console.log(`${obj3.nome.toUpperCase()}\n${obj3.idade}\n${obj3.esquadraoCavaleiros}\n${obj3.magico}\n${converteArray(obj3)}`);
console.log(`${obj4.nome.toUpperCase()}\n${obj4.idade}\n${obj4.esquadraoCavaleiros}\n${obj4.magico}\n${converteArray(obj4)}`);
console.log(`${obj5.nome.toUpperCase()}\n${obj5.idade}\n${obj5.esquadraoCavaleiros}\n${obj5.magico}\n${converteArray(obj5)}`);
console.log(`${obj6.nome.toUpperCase()}\n${obj6.idade}\n${obj6.esquadraoCavaleiros}\n${obj6.magico}\n${converteArray(obj6)}`);


//SEMANA 5.2
/* for (let i in arrayDeObj) {
    for (j in arrayDeObj[i]) {
        console.log(arrayDeObj[i][j])
    }
} */

//SEMANA 6.1
function imprimeObjeto(objeto) {
    let stringObjeto = ''
    stringObjeto = objeto
    /* console.log(stringObjeto) */
}
imprimeObjeto(obj1);

//SEMANA 6.2
/* function retornaObjeto(arrayObj, string) {
    let retornaObjeto = {}
    for (let i in arrayObj) {
        for (let j in arrayObj[i]) {
            if (arrayObj[i][j] === string) {
                retornaObjeto = arrayObj[i]
            }
        }
    } 
      console.log(retornaObjeto)
      return retornaObjeto 
}
 retornaObjeto(arrayDeObj, 'Asta') */


 let inputElement = document.querySelector("input")
 let listaElement = document.querySelector("ul")
 let itemElement = listElement.querySelectorAll("li")
 
 inputElement.addEventListener("input", (e) => {
   let inputed = e.target.value.toLowerCase()
   itemElement.forEach((li) => {
     let text = li.textContent.toLowerCase()
     if(text.includes(inputed)){
       li.style.display = "block"
     }else{
       li.style.display = "none"
     }
   })
 });






 /Teste/

 


 let inputElement = document.querySelector("input")
 let listElement = document.querySelector("ul")
 let itemElement = listElement.querySelectorAll("li")
 
 inputElement.addEventListener("input", (e) => {
   let inputed = e.target.value.toLowerCase()
   itemElement.forEach((li) => {
     let text = li.textContent.toLowerCase()
     if(text.includes(inputed)){
       li.style.display = "block"
     }else{
       li.style.display = "none"
     }
   })
 })