import image from '../img/icon.svg';

export const createImageLogo = () => {
  const img = document.createElement('img');
  img.src = image;
  return img;
};

export const createContainer = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  return container;
};

export const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const headerContainer = createContainer();
  header.append(headerContainer);
  header.headerContainer = headerContainer;

  return header;
};

export const createLogo = (title) => {
  const h1 = document.createElement('h1');
  h1.classList.add('logo');
  h1.textContent = `Телефонный справочник. ${title}`;
  return h1;
};

export const createMain = () => {
  const main = document.createElement('main');

  const mainContainer = createContainer();
  main.append(mainContainer);
  main.mainContainer = mainContainer;
  return main;
};

export const createFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const footerText = document.createElement('p');
  footerText.classList.add('footerText');
  footerText.textContent = 'Все права защищены ⒸЮрий';
  footer.append(footerText);
  footer.footerText = footerText;

  return footer;
};

export const createButtonsGroup = (params) => {
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');

  const btns = params.map(({className, type, text}) => {
    const button = document.createElement('button');
    button.type = type;
    button.textContent = text;
    button.className = className;
    return button;
  });

  btnWrapper.append(...btns);

  return {
    btnWrapper,
    btns,
  };
};

export const createTable = () => {
  const table = document.createElement('table');
  table.classList.add('table', 'table-striped');

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML(
    'beforeend',
    `<tr>
  <th class="delete">Удалить</th>
  <th>Имя</th>
  <th>Фамилия</th>
  <th>Телефон</th>
  </tr>`
  );

  const tbody = document.createElement('tbody');

  table.append(thead, tbody);
  table.tbody = tbody;

  return table;
};

export const createForm = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('form-overlay');

  const form = document.createElement('form');
  form.classList.add('form');
  form.insertAdjacentHTML(
    'beforeend',
    ` <button class="close" type="button"></button>
       <h2 class="form-title"></h2>
       <div class="form-group">
       <label class="form-label" for="name">Имя</label>
       <input class="form-input" name="name" id="name" type="text" required>
       </div>
       <div class="form-group">
       <label class="form-label" for="surname">Фамилия</label>
     <input class="form-input" name="surname" id="surname" type="text" required>
     </div>
    <div class="form-group">
    <label class="form-label" for="phone">Телефон</label>
    <input class="form-input" name="phone" id="phone" type="number" required>
    </div>`
  );
  const buttonGroup = createButtonsGroup([
    {
      className: 'btn btn-primary mr-3',
      type: 'submit',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger btn-cancel',
      type: 'reset',
      text: 'Отмена',
    },
  ]);

  form.append(...buttonGroup.btns);

  overlay.append(form);

  return {
    overlay,
    form,
  };
};

export const createRow = ({name: firstName, surname, phone}, keyLocal) => {
  const tr = document.createElement('tr');
  tr.classList.add('contact');
  const tdDel = document.createElement('td');
  tdDel.classList.add('delete');
  const buttonaDel = document.createElement('button');
  tdDel.append(buttonaDel);
  buttonaDel.classList.add('del-icon');
  const tdName = document.createElement('td');
  tdName.textContent = firstName;
  const tdSurname = document.createElement('td');
  tdSurname.textContent = surname;
  const tdPhone = document.createElement('td');
  const phoneLink = document.createElement('a');
  phoneLink.href = `tel:${phone}`;
  phoneLink.textContent = phone;
  tr.phoneLink = phoneLink;
  tr.dataset.key = keyLocal;
  tdPhone.append(phoneLink);
  tr.append(tdDel, tdName, tdSurname, tdPhone);

  return tr;
};
