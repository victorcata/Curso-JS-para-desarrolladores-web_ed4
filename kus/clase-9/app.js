(function(d) {

  var form = d.querySelector('#form');
  var contactList = d.querySelector('#contact-list');
  var noContacts = d.querySelector('#no-contacts');
  var btnDeleteAll = d.querySelector('#btn-delete-all');
  var keys = [];
  var editMode = false;

  form.addEventListener('submit', saveContact);
  btnDeleteAll.addEventListener('click', deleteAllContacts);
  d.addEventListener('contact-added', onContactAdded);
  d.addEventListener('contact-deleted', onContactDeleted);

  (function() {
    toggleNoContacts();

    if (localStorage.length) {
      setKeys();
      setFormKey();
      printContacts();
    }
  })();

  this.editContact = function(el) {
    setFormData(JSON.parse(localStorage.getItem(el.parentNode.dataset.key)));
    editMode = true;
  };

  this.deleteContact = function(el) {
    var parent = el.parentNode;
    if (!confirm('¿Estás seguro de que quieres borrar a ' + parent.dataset.name + '?')) return;

    localStorage.removeItem(el.parentNode.dataset.key);
    keys[el.parentNode.dataset.key] = undefined;
    printContacts();

    d.dispatchEvent(new CustomEvent('contact-deleted', { detail: { key: parent.dataset.key } }));
  };

  function setKeys() {
    for (var i = 0, len = localStorage.length; i < len; i++) {
      if (localStorage.getItem(i)) {
        keys[i] = i;
      }
    }
  }

  function setFormKey() {
    for (var i = 0, len = keys.length; i < len; i++) {
      if (keys[i] === undefined) {
        form.key.value = i;
        return;
      }
    }

    form.key.value = keys.length;
  }

  function saveContact(e) {
    e.preventDefault();

    var data = {
      name: this.nombre.value,
      tel: this.tfno.value,
      email: this.email.value,
      key: this.key.value
    };

    localStorage.setItem(data.key, JSON.stringify(data));
    keys[data.key] = data.key;

    if (editMode) {
      printContacts();
      editMode = false;
    } else {
      d.dispatchEvent(new CustomEvent('contact-added', { detail: { data: data } }));
    }

    clearForm();
  }

  function clearForm() {
    form.nombre.focus();
    form.nombre.value = '';
    form.tfno.value = '';
    form.email.value = '';
    setFormKey();
  }

  function setFormData(data) {
    form.nombre.value = data.name;
    form.tfno.value = data.tel;
    form.email.value = data.email;
    form.key.value = data.key;
    form.nombre.focus();
  }

  function printContacts() {
    contactList.innerHTML = '';

    for (var key in localStorage) {
      var data = JSON.parse(localStorage.getItem(key));
      printContact(data);
    }
  }

  function printContact(data) {
    var f = d.createDocumentFragment();

    if (!printContact.buttons) {
      printContact.buttons = [
        '<button title="Editar" onclick="editContact(this)" class="btn btn--mini btn--edit"><i class="fa fa-pencil"></i></button>',
        '<button title="Borrar" onclick="deleteContact(this)" class="btn btn--mini btn--delete"><i class="fa fa-trash"></i></button>'
      ].join('');
    }

    var html = [
    '<div class="data">',
      '<div class="name">' + data.name + '</div>',
      '<div class="email"><a href="mailto:' + data.email + '">' + data.email + '</a></div>',
      '<div class="tel"><a href="tel:' + data.tel + '">' + data.tel + '</a></div>',
    '</div>'
    ].join('');

    var li = d.createElement('li');
    li.innerHTML = html;
    f.appendChild(li);

    var editButtons = d.createElement('div');
    editButtons.className = 'edit';
    editButtons.setAttribute('data-key', data.key);
    editButtons.setAttribute('data-name', data.name);
    editButtons.innerHTML = printContact.buttons;

    li.appendChild(editButtons);
    contactList.appendChild(f);
  }

  function toggleNoContacts() {
    noContacts.classList.toggle('hidden', localStorage.length);
    btnDeleteAll.classList.toggle('hidden', !localStorage.length);
  }

  function onContactAdded(e) {
    toggleNoContacts();
    printContact(e.detail.data);
  }

  function onContactDeleted(e) {
    toggleNoContacts();
    setFormKey();
  }

  function deleteAllContacts() {
    if (!confirm('¿Estás seguro de que quieres borrar todos los contactos de tu agenda?')) return;

    localStorage.clear();
    keys = [];
    toggleNoContacts();
    printContacts();
  }

})(document);



