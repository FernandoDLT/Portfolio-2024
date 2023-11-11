// const form = document.querySelector('form');
// const box = document.querySelector('.box');
// const emailInput = document.getElementById('emailInput');

// emailInput.addEventListener('input', function() {
//     if (emailInput.value.trim() !== '') {
//         emailInput.classList.add('has-value');
//     } else {
//         emailInput.classList.remove('has-value');
//     }
// });

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = form.querySelector('input[type="text"]').value;
//     const email = emailInput.value;

//     if (username && email) {
//         form.style.display = 'none';
//         box.style.animation = 'none';
//         box.style.background = 'linear-gradient(350deg, #3ba0ff, #002b8f)';

//         const message = document.createElement('h4');
//         message.innerText = 'Your email has been sent!';

//         box.classList.add('show-message');
//         box.appendChild(message);
//     }
// });

window.addEventListener('load', function () {
    const form = document.querySelector('form');
    const box = document.querySelector('.box');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const dismissButton = document.querySelector(".dismiss");

    if (form) {
        emailInput.addEventListener('input', function () {
            updateInputClass(emailInput);
        });

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const usernameInput = form.querySelector('input[type="text"]');
            const username = usernameInput ? usernameInput.value : '';

            const email = emailInput.value;
            const subject = subjectInput.value;
            const message = messageInput.value;

            if (validateInputs(username, email, subject, message)) {
                form.style.display = 'none';
                box.style.animation = 'none';
                // box.style.background = 'linear-gradient(350deg, #3ba0ff, #002b8f)';

                // const successMessage = document.createElement('h4');
                // successMessage.innerText = 'Thank you! Your email has been sent!';

                box.classList.add('show-message');
                box.appendChild(successMessage);
            }
        });

        function updateInputClass(inputElement) {
            if (inputElement.value.trim() !== '') {
                inputElement.classList.add('has-value');
            } else {
                inputElement.classList.remove('has-value');
            }
        }

        function validateInputs(username, email, subject, message) {
            if (!username && !email && !subject && !message) {
                // Check if at least one field is filled
                alert('Please fill in at least one field');
                return false;
            }

            // You can add more specific validation logic here if needed

            return true;
        }
    } else {
        console.error('Form not found');
    }
});

dismissButton.addEventListener("click", () => {
   window.location.href = "index.html";
   e.preventDefault();
});
