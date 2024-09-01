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

  try {
    const labels = ["label"];
    // saySomething("abcsd");
    console.log(`First labels is ${labels[0]}`);
  } catch (error) {
    console.log("An error has occured: ", error);

  } finally {
    console.log("Finally has been executed");
  }

  console.log("After try/ catch");

  /** API REQUEST - Application Programming Interface
   
   * un "request" (cerere) se referA la o solicitare facuta de catre o aplicatie sau script catre un server 
   pentru a obtine sau a trimite date. In urma unei cereri se obTine un rAspuns (response) cu detalii privind 
   rezultatul cererii.
    Există mai multe moduri de a face cereri In JavaScript, iar două dintre cele mai comune metode sunt 
    folosirea obiectului XMLHttpRequest si a functiei fetch(). 
    Aceste metode permit dezvoltatorilor sa trimită cereri HTTP catre server specificand 
    metoda cererii (GET, POST, PUT, DELETE) si sa gestioneze raspunsurile in mod asincron.
   */

/** fetch() este o functie integrata in JavaScript, introdusa in ECMAScript 2015 (ES6), 
 * care permite realizarea de cereri HTTP asincrone catre resurse precum servere web. 
 * Aceasta functie simplifica si modernizează gestionarea cererilor si raspunsurilor HTTP in comparatie cu metodele mai vechi, cum ar fi XMLHttpRequest.
 */

/** GET- obtine informatii de la server;
 * POST- trimite date la server pentru a fi procesate;
 * PUT- actualizeaza date existente pe server;
 * DELETE- sterge date de pe server;
 */







