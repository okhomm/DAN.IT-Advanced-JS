const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70
  },
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70
  },
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  }
];

for (let book of books) {
  const { author, name, price } = book;
  try {
    if (!author || !name || !price) {
      throw Error;
    }
  }

  catch (e) {
    if (author === undefined) {
      console.error('author not found');
    } else if (name === undefined) {
      console.error('name not found');
    } else if (price === undefined) {
      console.error('price not found');
    }
  }

  if (Object.hasOwn(book, 'author') && Object.hasOwn(book, 'name') && Object.hasOwn(book, 'price')) {
    const ul = document.createElement('ul');
    for (let key in book) {
      const li = document.createElement('li');
      li.innerHTML = `${key}: ${book[key]}`;
      ul.append(li);
    }
    document.getElementById('root').append(ul);
  }
}