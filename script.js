console.log("Hello!");

// const promiseHandler = (resolve, reject) => {
//     // fac ceva
// }

// const promise = new Promise(promiseHandler);

const promise = new Promise((resolve, reject) => {
    const resolved = false; // schimba in true sau false

    setTimeout(() => {

        if(resolved) {
            resolve("Valoare dupa rezolvare");
        } else {
            reject("Valoare dupa respingere");
        }
    }, 2000);

});

promise.then((resolvedValue) => {
    console.log(`S-a rezolvat cu valoarea: `, resolvedValue);

}).catch((rejectedValue) => {
    console.log(`S-a respins cu valoarea: `, rejectedValue);  

}).finally(() => {
    console.log("Se executa mereu");
});

console.log("Cod ce se executa simultan cu promisiunea");

/** async/await este o functionalitate in JavaScript care simplifica gestionarea codului asincron 
 * si face ca acesta sa para mai asemanator cu codul sincron. 
 
 Folosind cuvAntul-cheie async In faTa unei funcTii, aceasta devine o funcTie asincron. 
 Functiile asincrone returneaza intotdeauna o promisiune.
 */

/**Cand se utilizeaza await intr-o functie asincrona, aceasta asteapta finalizarea unei promisiuni
  si returneaza rezultatul acesteia. 
  In timp ce aSteaptA, controlul este redat apelantului, permiTAnd execuTia altor operaTiuni. 
 */

 async function getUsers() {
    let users = [
            {username: "username1", password: "pass1"},
            {username: "username2", password: "pass2"},

        ]
    return users;
 }

 const users = getUsers();
console.log(users);
users.then((users) => {
    console.log(users);
}).catch((e) => console.log(e));

async function doSomethingWithUsers() {
    let users = await getUsers();
    console.log(`Users din await: `, users);
}

doSomethingWithUsers();

/** try/catch poate fi folosit pentru gestionarea erorilor In funcTiile asincrone, 
  facand codul mai robust si mai usor de intretinut.
 */

  




