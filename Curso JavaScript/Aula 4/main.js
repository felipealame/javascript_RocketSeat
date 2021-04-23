
/// Modo grosseiro de requisição

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/felipealame');
// xhr.send(null);

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4)
//         console.log(JSON.parse(xhr.responseText));
// }

//Padrão 

// let myPromisse = function () {
//     return new Promise(function (resolve, reject) {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/felipealame');
//         xhr.send(null);

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('Ocorreu algum erro.')
//                 }
//             }

//         }
//     });
// }

// myPromisse()
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.warn(error);
//     });

// Utilizando axios

axios.get('https://api.github.com/users/felipealame')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });