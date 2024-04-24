document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.logo_sertificates');
    logo.addEventListener('click', function() {
        window.location.href = "index.html";
    });
});

//thanks for submit
document.addEventListener('DOMContentLoaded', function () {
    var confirmButton = document.querySelector('.btn-submit_sert[type="button"]');
    confirmButton.addEventListener('click', function () {
        displayNotification();
    });
});

function displayNotification() {
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Дякуємо за покупку сертифікату! Очікуйте смс з посиланням для оплати.';
    document.body.appendChild(notification);

    // Закриття сповіщення при кліці на будь-яку область крім самого сповіщення
    notification.addEventListener('click', function (event) {
        if (event.target === notification) {
            document.body.removeChild(notification);
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const locationIcon = document.querySelector('.location-icon');
    
    locationIcon.addEventListener('click', function(event) {
        window.location.href = 'https://www.google.com/maps'; // Перенаправлення на Google Maps
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const phoneInputs = document.querySelectorAll('.form_content_left .info_in_formField_column1[type="tel"]');
  
    phoneInputs.forEach(function(phoneInput) {
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
    });
  
    const nameInputs = document.querySelectorAll('.form_content_left .info_in_formField_column1[type="text"]');
  
    nameInputs.forEach(function(nameInput) {
        nameInput.addEventListener('input', function(event) {
            // Видалення усіх символів, крім літер та пробілів
            this.value = this.value.replace(/[^a-zA-Zа-яА-Я\s]/g, '');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const amountInputs = document.querySelectorAll('.form_content_left .info_in_formField_column1[type="number"]');
  
    amountInputs.forEach(function(amountInput) {
        amountInput.addEventListener('input', function(event) {
            // Отримання введеного значення
            let inputValue = this.value;

            // Видалення усіх символів, крім цифр
            inputValue = inputValue.replace(/\D/g, '');

            // Обмеження довжини введеного значення до 4 символів
            inputValue = inputValue.slice(0, 4);

            // Перевірка, чи введене число відповідає одному зі значень: 500, 1000, 3000 або 5000
            if (inputValue.length === 4) {
                if (inputValue === '500' || inputValue === '1000' || inputValue === '3000' || inputValue === '5000') {
                    // Встановлення нового значення поля введення
                    this.value = inputValue;
                } else {
                    // Показати повідомлення про помилку
                    alert("Введіть правильну суму: 500, 1000, 3000 або 5000");
                    // Очистка поля введення
                    this.value = '';
                }
            }
        });
    });
  
    const nameInputs = document.querySelectorAll('.form_content_left .info_in_formField_column1[type="text"]');
  
    nameInputs.forEach(function(nameInput) {
        nameInput.addEventListener('input', function(event) {
            // Видалення усіх символів, крім літер та пробілів
            this.value = this.value.replace(/[^a-zA-Zа-яА-Я\s]/g, '');
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Отримання кнопки за її ID
    const readMoreBtn = document.getElementById('btn-readmore');

    // Додавання обробника події кліку
    readMoreBtn.addEventListener('click', function() {
        // Перенаправлення на сторінку faq_page.html
        window.location.href = 'faq_page.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var logoFooter = document.getElementById('logo-footer');
    
    logoFooter.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});