
document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.logo_portfolio');
    logo.addEventListener('click', function() {
        window.location.href = "index.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const searchBlock = document.querySelector('.search');
    const searchText = document.querySelector('.search h4');

    searchBlock.addEventListener('click', function() {
        searchText.style.color = '#EDEDED';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var consultationForm = document.querySelector('.consultation_form_portfolio');
    var submitButton = consultationForm.querySelector('.btn-small_portfolio');
    
    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Зупиняємо стандартну поведінку кнопки

      // Створюємо елемент сповіщення
      var notification = document.createElement('div');
      notification.classList.add('notification');
      notification.textContent = 'Вас вітає ArtSkinTattoo! Ми зателефонуємо Вам протягом 15-ти хвилин.';

      // Додаємо сповіщення до тіла документу
      document.body.appendChild(notification);

      // Видаляємо сповіщення через 3 секунди
      setTimeout(function() {
        document.body.removeChild(notification);
      }, 3000);

      // Додаємо обробник подій для сповіщення
      notification.addEventListener('click', function() {
        document.body.removeChild(notification);
      });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  // Отримуємо всі кнопки
  const buttons = document.querySelectorAll('.btn');

  // Додаємо обробник події для кожної кнопки
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          // Перенаправляємо на index.html
          window.location.href = 'index.html#form';
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const phoneInput = document.querySelector('.phone_input_portfolio');

  phoneInput.addEventListener('input', function(event) {
      // Видалення усіх символів, крім цифр
      const phoneNumber = this.value.replace(/\D/g, '');

      // Форматування номера телефону: "380 ХХ ХХХ ХХ ХХ"
      let formattedPhoneNumber = '';
      for (let i = 0; i < phoneNumber.length; i++) {
          if (i === 3 || i === 5 || i === 8 || i === 10) {
              formattedPhoneNumber += ' ';
          }
          formattedPhoneNumber += phoneNumber[i];
      }

      // Обмеження довжини номера телефону
      formattedPhoneNumber = formattedPhoneNumber.slice(0, 16);

      // Оновлення значення поля введення номера телефону
      this.value = formattedPhoneNumber;
  });

  const nameInput = document.querySelector('.name_input');

  nameInput.addEventListener('input', function(event) {
      // Видалення усіх символів, крім літер та пробілів
      this.value = this.value.replace(/[^a-zA-Zа-яА-Я\s]/g, '');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const locationIcon = document.querySelector('.location-icon');
  
  locationIcon.addEventListener('click', function(event) {
      window.location.href = 'https://www.google.com/maps'; // Перенаправлення на Google Maps
  });
});