let list = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
];

function checkLogged(list) {
    list.forEach(user => {
        if (user.logged === true) {
            alert("L'utente è stato registrato.");
        } else {
            alert("L'utente non è registrato.");
        }
    });
}

checkLogged(list);

