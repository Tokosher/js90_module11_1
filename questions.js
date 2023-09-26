// Завдання - 2.
// Реалізуй сторінку для власника бізнесу - після того, як потрапляємо на сторінку потрібно отримати з бази даних всі заявки, які були залишені користувачами
// Для GET запиту використовуй ендпоінт => getAll
// Для створення розмітки використовуй функцію createMarkup
// Сервер розгортається локально на порту http://127.0.0.1:3000/api

// make request
// handle request and make markup

const list = document.querySelector('.js-list');

sendDataQuestion()
  .then(data => {
    console.log(data);
    const markup = createMarkup(data);
    list.insertAdjacentHTML('afterbegin', markup)
  })
  .catch(err => console.error(err))




function sendDataQuestion() {
  return fetch('http://127.0.0.1:3000/api/getAll')
  .then(response => {
      if (!response.ok) {
          throw new Error(response.statusText)
      }
      return response.json();
  })
}

function createMarkup(arr) {
  console.log(arr);
    return arr
      .map(
        ({ _id, name, phone, email, comment }) => `
      <li class="card" data-id="${_id}">
          <div class="card-content">
              <h2 class="card-name">Name: ${name}</h2>
              <div>Phone: <span class="card-phone">${phone}</span></div>
              <div>Email: <span class="card-email"> ${email}</span></div>
              <div> <span class="card-comment">${comment}</span></div>
          </div>
      </li>`)
      .join("");
  }
  