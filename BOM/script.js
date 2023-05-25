const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  //*listBtn.textContent = 'Delete';
  listBtn.innerText = '❌';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();

  const inputvalue = () => {
    if (myItem == null || myItem.length == 0 || /^\s+$/.test(myItem)) {
        alert('[ERROR] The form field cannot be empty');
        list.removeChild(listItem);
        return false;
    }
}

inputvalue();
})