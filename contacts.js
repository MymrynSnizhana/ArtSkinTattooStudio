document.addEventListener('DOMContentLoaded', function () {
    var consultationForm = document.querySelector('.consultation_form_contacts');
    var submitButton = consultationForm.querySelector('.btn-small_contacts');
    
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
  const logo = document.querySelector('.logo_contacts');
  logo.addEventListener('click', function() {
      window.location.href = "index.html";
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const phoneInput = document.querySelector('.phone_input_contacts');

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