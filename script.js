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

 async function getUsers() {
    setTimeout(() => {
        return [
            {username: "username1", password: "pass1"},
            {username: "username2", password: "pass2"},

        ]
    }, 3000);
 }

 const users = getUsers();
//  console.log(users);
users.then((users) => {
    console.log(users);
}).catch((e) => console.log(e));

