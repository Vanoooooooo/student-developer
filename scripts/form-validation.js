function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function validateForm() {
            let isValid = true;

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '') {
                document.getElementById('name').classList.add('is-invalid');
                isValid = false;
            } else {
                document.getElementById('name').classList.remove('is-invalid');
            }

            if (email === '' || !validateEmail(email)) {
                document.getElementById('email').classList.add('is-invalid');
                isValid = false;
            } else {
                document.getElementById('email').classList.remove('is-invalid');
            }

            if (message === '') {
                document.getElementById('message').classList.add('is-invalid');
                isValid = false;
            } else {
                document.getElementById('message').classList.remove('is-invalid');
            }

            return isValid;
        }

        function submitForm() {
            if (!validateForm()) {
                alert('Пожалуйста, заполните все обязательные поля корректно.');
                return;
            }

            const form = document.getElementById('feedbackForm');
            const formData = new FormData(form);

            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
                timestamp: new Date().toISOString()
            };

            console.log('Данные формы обратной связи:', data);

            alert('Спасибо! Ваше обращение отправлено. Мы свяжемся с вами в ближайшее время.');

            form.reset();

            document.querySelectorAll('.is-invalid').forEach(field => {
                field.classList.remove('is-invalid');
            });
        }

        document.addEventListener('DOMContentLoaded', function () {
            const inputs = document.querySelectorAll('#feedbackForm input, #feedbackForm textarea');

            inputs.forEach(input => {
                input.addEventListener('input', function () {
                    this.classList.remove('is-invalid');
                });
            });

            document.getElementById('feedbackForm').addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    submitForm();
                }
            });
        });