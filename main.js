document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const card = document.querySelector('.card');
    const successMessage = card.querySelector('span');
    const dismissButton = document.querySelector('.dismiss');

    if (form) {
        form.addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(form);
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            try {
                const response = await fetch('/sendEmail', {
                    method: 'POST',
                    body: JSON.stringify({ email, subject, message }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const responseText = await response.text();

                if (response.ok && responseText === 'Message sent!') {
                    // Show success message card
                    successMessage.textContent = 'Thank you! Your message has been sent.';
                    card.classList.remove('hide');
                    form.reset();
                } else {
                    console.error('Failed to send message');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });

        // Add event listener to dismiss button
        dismissButton.addEventListener('click', function (event) {
            // Hide success message card
            card.classList.add('hide');
            event.preventDefault();
        });
    } else {
        console.error('Form not found');
    }
});



// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('form');
//     const card = document.querySelector('.card');
//     const dismissButton = document.querySelector('.dismiss');

//     if (form) {
//         form.addEventListener('submit', async function (event) {
//             event.preventDefault();

//             const formData = new FormData(form);
//             const email = formData.get('email');
//             const subject = formData.get('subject');
//             const message = formData.get('message');

//             try {
//                 const response = await fetch('/sendEmail', {
//                     method: 'POST',
//                     body: JSON.stringify({ email, subject, message }),
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 });
//                 const responseText = await response.text();

//                 if (response.ok && responseText === 'Message sent!') {
//                     // Show success message card
//                     card.classList.remove('hide');
//                     card.querySelector('h4').textContent = 'Thank you!';
//                     card.querySelector('span').textContent = 'Your message has been sent.';
//                     form.reset();
//                 } else {
//                     console.error('Failed to send message');
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         });

//         // Add event listener to dismiss button
//         dismissButton.addEventListener('click', function (event) {
//             // Hide success message card
//             card.classList.add('hide');
//             event.preventDefault();
//         });
//     } else {
//         console.error('Form not found');
//     }
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('form');
//     const card = document.querySelector('.card');

//     if (form) {
//         form.addEventListener('submit', async function (event) {
//             event.preventDefault();

//             const formData = new FormData(form);
//             const email = formData.get('email');
//             const subject = formData.get('subject');
//             const message = formData.get('message');

//             try {
//                 const response = await fetch('/sendEmail', {
//                     method: 'POST',
//                     body: JSON.stringify({ email, subject, message }),
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 });
//                 const responseText = await response.text();

//                 if (response.ok && responseText === 'Message sent!') {
//                     card.classList.remove('hide');
//                     form.reset();
//                 } else {
//                     console.error('Failed to send message');
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         });
//     } else {
//         console.error('Form not found');
//     }
// });

// THIS works for emails ONLY //
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('form');
//     const box = document.querySelector('.box');
//     const card = document.querySelector('.card');
//     const emailInput = document.getElementById('email');
//     const subjectInput = document.getElementById('subject');
//     const messageInput = document.getElementById('message');
//     const dismissButton = document.querySelector('.dismiss');

//     if (form) {
//         emailInput.addEventListener('input', function () {
//             updateInputClass(emailInput);
//         });

//         form.addEventListener('submit', function (event) {
//             event.preventDefault();

//             const formData = new FormData(form);
//             const email = formData.get('email');
//             const subject = formData.get('subject');
//             const message = formData.get('message');

//             fetch('/sendEmail', {
//                 method: 'POST',
//                 body: JSON.stringify({ email, subject, message }),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             .then(response => response.text())
//             .then(responseText => {
//                 console.log(responseText); // Output server response
//                 if (responseText === 'Message sent!') {
//                     // Show success message card
//                     card.classList.remove('hide');
//                     // Reset form
//                     form.reset();
//                 } else {
//                     console.error('Failed to send message');
//                 }
//             })
//             .catch(error => console.error('Error:', error));
//         });

//         function updateInputClass(inputElement) {
//             if (inputElement.value.trim() !== '') {
//                 inputElement.classList.add('has-value');
//             } else {
//                 inputElement.classList.remove('has-value');
//             }
//         }

//         dismissButton.addEventListener('click', function (event) {
//             // Hide success message card
//             card.classList.add('hide');
//             event.preventDefault();
//         });
//     } else {
//         console.error('Form not found');
//     }
// });

// This works for the CARD message ONLY!!! //
// window.addEventListener('load', function () {
//     const form = document.querySelector('form');
//     const box = document.querySelector('.box');
//     const emailInput = document.getElementById('email');
//     const subjectInput = document.getElementById('subject');
//     const messageInput = document.getElementById('message');
//     const card_1 = document.querySelector(".card");
//     const dismissButton = document.querySelector(".dismiss");

//     if (form) {
//         emailInput.addEventListener('input', function () {
//             updateInputClass(emailInput);
//         });

//         form.addEventListener('submit', function (event) {
//             event.preventDefault();

//             const usernameInput = form.querySelector('input[type="text"]');
//             const username = usernameInput ? usernameInput.value : '';

//             const email = emailInput.value;
//             const subject = subjectInput.value;
//             const message = messageInput.value;

//             if (validateInputs(username, email, subject, message)) {
//                 form.style.display = 'none';
//                 box.style.animation = 'none';
//                 // box.style.background = 'rgba(24,24,24)';

//                 // Show card-2 instead of the success message
//                 card_1.classList.remove('hide');

//                 box.classList.add('show-message');
//                 // box.appendChild(successMessage);
//             }
//         });

//         function updateInputClass(inputElement) {
//             if (inputElement.value.trim() !== '') {
//                 inputElement.classList.add('has-value');
//             } else {
//                 inputElement.classList.remove('has-value');
//             }
//         }

//         function validateInputs(username, email, subject, message) {
//             if (!username && !email && !subject && !message) {
//                 alert('Please fill in at least one field');
//                 return false;
//             }

//             return true;
//         }

//         dismissButton.addEventListener("click", (e) => {
//             window.location.href = "index.html"
//             e.preventDefault();
//         });
//     } else {
//         console.error('Form not found');
//     }
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const navBar = document.querySelector('.nav');
//     let lastScrollTop = 0;

//     if (navBar) {
//         window.addEventListener('scroll', () => {
//             const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//             if (currentScrollTop <= 0) {
//                 // At the top of the page, hide the navigation menu
//                 navBar.style.top = '-100%';
//             } else {
//                 // Scrolling down or up, show the navigation menu
//                 navBar.style.top = '0';
//             }

//             lastScrollTop = currentScrollTop;
//         });
//     }
// });