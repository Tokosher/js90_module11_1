// ******************** CRUD ******************** \\

// Create - POST
// Read   - GET
// Update - PUT PATCH
// DELETE - DELETE

// API https://jsonplaceholder.typicode.com



// ******************** GET - READ ******************** \\
// fetch ('https://jsonplaceholder.typicode.com/posts/2')
// .then(response => {
//     console.log(response);
//     return response.json();
// })
// .then(data => {
//     console.log(data)
// })






// ******************** POST - CREATE ******************** \\

// const postToAdd = {
//     title: 'New updates',
//     body: 'New updates about...',
//     id: 105
// };

// const options = {
//     method: 'POST',
//     body: JSON.stringify(postToAdd),
//     headers: {
//         "Content-type": 'application/json'
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
// .then(response => {
//     console.log(response)
//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return response.json()
// })
// .then(data => console.log(data))
// .catch(err => console.error(err))





// ******************** PATCH - UPDATE ******************** \\

// const newUpdatesForPost = {
//     description: 'New updates',
//     body: 'New updates about...'
// };

// const options = {
//     method: 'PATCH',
//     body: JSON.stringify(newUpdatesForPost),
//     headers: {
//         "Content-type": 'application/json'
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/posts/5', options)
// .then(response => {
//     console.log(response)
//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return response.json()
// })
// .then(data => console.log(data))
// .catch(err => console.error(err))




// ******************** PUT - UPDATE ******************** \\
// const putForExistingPost = {
//     description: 'New post info',
//     body: 'New updates about...'
// };

// const options = {
//     method: 'PUT',
//     body: JSON.stringify(putForExistingPost),
//     headers: {
//         "Content-type": 'application/json'
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/posts/5', options)
// .then(response => {
//     console.log(response)
//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return response.json()
// })
// .then(data => console.log(data))
// .catch(err => console.error(err))






// ******************** DELETE ******************** \\

// const options = {
//     method: 'DELETE'
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
// .then(response => {
//     console.log('POST DELETED')
// })



// ******************** Практика ******************** \\

// Завдання - 1.
// Потрібно створи форму "Зв'яжіться зі мною" в якій користувач має можливість залишити заявку для того, щоб з ним зв'язались та відповіли на його питання
// Форма має складатись з таких елементів:
// 1 - Поле для імені.
// 2 - Поле для номера телефону.
// 3 - Поле для адреси електронної пошти.
// 4 - Поле для питання.

// Форма має відправляти дані на бекенд та зберігати їх в базі даних.


// Для запуску серверу в папці server:
// npm install
// npm start
// Сервер розгортається локально на порту http://127.0.0.1:3000/api
// Для POST запиту використовуй ендпоінт => question


const form = document.querySelector('.contact-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    // console.log(event.target.elements)
    // collect data
    const { userName, phone, email, question } = event.target.elements;
    
    const questionData = {
        name:  userName.value,
        phone: phone.value,
        email: email.value,
        comment: question.value
    }

    // send data to server
    sendDataQuestion(questionData)
        .then(response => {
            console.log(response);
            alert('Thank you for your question!')
        })
        .catch(err => console.error(err))
        .finally(() => event.target.reset())


}

function sendDataQuestion(questionData) {
    const options = {
        method: 'POST',
        body: JSON.stringify(questionData),
        headers: {
            "Content-type": 'application/json'
        }
    }

    return fetch('http://127.0.0.1:3000/api/question', options)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json();
    })
}


// Завдання - 2.
// Реалізуй сторінку для власника бізнесу - після того, як потрапляємо на сторінку потрібно отримати з бази даних всі заявки, які були залишені користувачами
// Для GET запиту використовуй ендпоінт => getAll
