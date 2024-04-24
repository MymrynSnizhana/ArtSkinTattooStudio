document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function() {
        window.location.href = "index.html";
    });
});

// slider header

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.header-text');
    const dots = document.querySelectorAll('.carousel-dot_header');
    const header = document.querySelector('.header');

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        switch (index) {
            case 0:
                header.style.backgroundImage = "url('images/mainBg1.jpg')";
                break;
            case 1:
                header.style.backgroundImage = "url('images/mainBg2.jpg')";
                break;
            case 2:
                header.style.backgroundImage = "url('images/mainBg3.jpg')";
                break;
            default:
                break;
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    setInterval(nextSlide, 3000); // Автоматичне перемикання слайдів кожні 3 секунди
});


// srollbutton
const scrollButtons = document.querySelectorAll('.btn_scrollButton');

scrollButtons.forEach(button => {
    button.addEventListener('click', function() {
        const formSection = document.querySelector('.form');
        formSection.scrollIntoView({ behavior: 'smooth' });
    });
});


// slider why us

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.carousel-dot_whyWe');
    const arrowRight = document.querySelector('.arrow-right');


    let currentIndex = 0;

    function showSlide(n) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });
        slides[n].classList.add('active');
        dots[n].classList.add('active');
    }

    showSlide(currentIndex);


    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    arrowRight.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
});

const tattooButtons = document.querySelectorAll('.btn.btn-hover');

tattooButtons.forEach(button => {
    button.addEventListener('click', function() {
        const formSection = document.querySelector('.form');
        formSection.scrollIntoView({ behavior: 'smooth' });
    });
});


//download file
document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const uploadedFileName = file.name;
            document.querySelector('.custom-btn').innerText = uploadedFileName;
        };
        reader.readAsDataURL(file);
    }
});


//datePicker
document.addEventListener('DOMContentLoaded', function () {
    var datePickerInput = document.getElementById('datePicker');
    var datePickerButton = document.querySelector('label[for="datePicker"] button');
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;
    datePickerInput.setAttribute('min', today);

    datePickerButton.addEventListener('click', function () {
        if (datePickerInput.style.display === "block") {
            datePickerInput.style.display = "none";
            datePickerInput.value = "";
            datePickerButton.textContent = "ОБРАТИ ДАТУ СЕАНСУ";
        } else {
            datePickerInput.style.display = "block";
            datePickerInput.focus();
        }
    });

    datePickerInput.addEventListener('change', function () {
        var selectedDate = datePickerInput.value;
        if (selectedDate) {
            var parts = selectedDate.split('-');
            var formattedDate = parts[2] + '.' + parts[1] + '.' + parts[0];
            datePickerButton.textContent = formattedDate;
            datePickerInput.style.display = "none";
            datePickerButton.style.backgroundColor = "#428BDD";
            datePickerButton.style.border = "none";
        }
    });
});

//thanks for submit
document.addEventListener('DOMContentLoaded', function () {
    var confirmButton = document.querySelector('.btn-session');
    confirmButton.addEventListener('click', function () {
        displayNotification();
    });
});

function displayNotification() {
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Дякуємо за запис! Очікуйте смс з посиланням для предоплати.';
    document.body.appendChild(notification);

    // Закриття сповіщення при кліці на будь-яку область крім самого сповіщення
    notification.addEventListener('click', function (event) {
        if (event.target === notification) {
            document.body.removeChild(notification);
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const phoneInput = document.querySelector('.info_in_formField_column1[type="tel"]');
    
    phoneInput.addEventListener('input', function(event) {
      // Видалення усіх символів, крім цифр
      const phoneNumber = this.value.replace(/\D/g, '');
      
      // Форматування номера телефону як у плейсхолдері: "380 ХХ ХХХ ХХ ХХ"
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

//send review

document.addEventListener('DOMContentLoaded', function () {
    var additionalReviewButton = document.querySelector('.custom-btn-additional');
    var reviewForm = document.querySelector('.form_content_review');
    var closeButton = document.querySelector('.close_button_modal_review');
    var submitButton = document.querySelector('.custom-btn-send');

    additionalReviewButton.addEventListener('click', function () {
        reviewForm.style.display = 'flex'; // Відображаємо форму
        document.body.style.overflow = 'hidden'; // Відключаємо прокрутку сторінки
    });

    closeButton.addEventListener('click', function () {
        reviewForm.style.display = 'none'; // Ховаємо форму
        document.body.style.overflow = ''; // Включаємо прокрутку сторінки
    });

    submitButton.addEventListener('click', function () {
        reviewForm.style.display = 'none'; // Ховаємо форму
        document.body.style.overflow = ''; // Включаємо прокрутку сторінки
        display_Notification(); // Відображаємо сповіщення
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const phoneInput = document.querySelector('.form_content_review .info_in_formField_column1[type="tel"]');
    
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

function display_Notification() {
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Дякуємо! Ваш відгук опубліковано.';
    document.body.appendChild(notification);

    // Закриття сповіщення при кліці на нього
    notification.addEventListener('click', function () {
        document.body.removeChild(notification);
    });

    setTimeout(function () {
        document.body.removeChild(notification); // Видаляємо сповіщення через певний час
    }, 3000); // Приблизно через 3 секунди
}

window.addEventListener('click', function (event) {
    if (event.target === reviewForm) {
        reviewForm.style.display = 'none'; // Ховаємо форму
        document.body.style.overflow = ''; // Включаємо прокрутку сторінки
    }
});

// send photo tattoo
document.getElementById('photoInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const fileName = file.name;
        const button = document.querySelector('.custom-btn-sendPhoto');
        button.innerText = fileName;
    }
});


//rating
document.addEventListener('DOMContentLoaded', function () {
    var stars = document.querySelectorAll('.rating_1-5 button');

    stars.forEach(function(star, index) {
        star.addEventListener('click', function() {
            for (var i = 0; i <= index; i++) {
                stars[i].innerHTML = '<img src="images/Star.png" alt="star" width="30px" height="30px">';
            }
            for (var j = index + 1; j < stars.length; j++) {
                stars[j].innerHTML = '<img src="images/Star_before.png" alt="star" width="30px" height="30px">';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const readMoreButton = document.querySelector('.custom-btn-additional[type="button"]');
    
    if (readMoreButton) {
        readMoreButton.addEventListener('click', function(event) {
            window.location.href = 'faq_page.html'; // Перенаправлення на сторінку faq.html
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const phoneInput = document.querySelector('.phone_input');

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

document.addEventListener('DOMContentLoaded', function () {
    var consultationForm = document.querySelector('.consultation_form');
    var submitButton = consultationForm.querySelector('button[type="submit"]');
    
    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Зупиняємо стандартну поведінку кнопки

      // Створюємо елемент сповіщення
      var notification = document.createElement('div');
      notification.classList.add('notification');
      notification.textContent = 'Вас вітає ArtSkinTattoo! Ми зателефонуємо Вам протягом 15-ти хвилин.';

      // Додаємо сповіщення до тіла документу
      document.body.appendChild(notification);

      // Видаляємо сповіщення через 3 секунд
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
    const locationIcon = document.querySelector('.location-icon');
    
    locationIcon.addEventListener('click', function(event) {
        window.location.href = 'https://www.google.com/maps'; // Перенаправлення на Google Maps
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var logoFooter = document.getElementById('footer_logo');
    
    logoFooter.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});





