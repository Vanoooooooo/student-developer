document.addEventListener('DOMContentLoaded', function () {
    const projectData = {
        'project1': {
            title: 'Личный сайт',
            description: 'Полнофункциональный сайт-портфолио, разработанный с использованием современных веб-технологий. Проект включает адаптивный дизайн, оптимизирован для различных устройств и содержит информацию о моих навыках и проектах.',
            fullDescription: 'Этот проект представляет собой личный сайт-портфолио, созданный для демонстрации моих навыков в веб-разработке. Сайт полностью адаптивен и корректно отображается на всех устройствах - от мобильных телефонов до десктопных компьютеров.\n\nОсновные особенности:\n• Адаптивный дизайн\n• Современный UI/UX\n• Оптимизированная производительность',
            images: [
                '../images/project1.png',
                '../images/project1-detail1.png',
                '../images/project1-detail2.png'
            ],
            technologies: ['HTML', 'CSS', 'Bootstrap'],
            liveDemo: 'https://example.com/project1',
            sourceCode: 'https://github.com/username/project1'
        },
        'project2': {
            title: 'Проект находится в разработке',
            description: 'Думаю',
            fullDescription: 'Здесь должно быть описание програмного продукта, но проект я еще не придумал. Можете перейти по ссылкам, там интересно (Включаем VPN!). \n\nФункциональность:\n• Вот это\n• Вот так вот\n• Как то так\n• Типо того\n• Окого этого\n• Где то там',
            images: [
                '../images/project2_2.jpg'
            ],
            technologies: ['Нету'],
            liveDemo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            sourceCode: 'https://www.youtube.com/watch?v=L4FHnzid-VM'
        },
        'project3': {
            title: 'Инновационный проект',
            description: 'Экспериментальный проект с использованием современных подходов к веб-разработке.',
            fullDescription: 'Этот проект представляет собой исследовательскую работу в области веб-разработки. Основная цель - изучение и внедрение новых технологий и методологий с помощью ИИ.\n\nОсобенности проекта:\n• Использование искусственного интелекта\n• Оптимизация производительности\n• Тестирование различных подходов к написанию промтов',
            images: [
                '../images/project3.jpg'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript'],
            liveDemo: 'https://www.deepseek.com/en',
            sourceCode: 'https://platform.deepseek.com/sign_in'
        }
    };

    // Функция для открытия модального окна проекта
    function openProjectModal(projectId) {
        const project = projectData[projectId];
        if (!project) return;

        // Заполняем модальное окно данными
        document.getElementById('projectModalLabel').textContent = project.title;
        document.getElementById('projectDescription').textContent = project.fullDescription;
        
        // Заполняем технологии
        const techContainer = document.getElementById('projectTechnologies');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const badge = document.createElement('span');
            badge.className = 'badge bg-primary modal-tech-badge';
            badge.textContent = tech;
            techContainer.appendChild(badge);
        });

        // Заполняем карусель изображений
        const carouselInner = document.getElementById('projectCarouselInner');
        const carouselIndicators = document.getElementById('projectCarouselIndicators');
        carouselInner.innerHTML = '';
        carouselIndicators.innerHTML = '';

        project.images.forEach((image, index) => {
            // Индикаторы
            const indicator = document.createElement('button');
            indicator.type = 'button';
            indicator.dataset.bsTarget = '#projectCarousel';
            indicator.dataset.bsSlideTo = index;
            indicator.className = index === 0 ? 'active' : '';
            indicator.setAttribute('aria-current', index === 0 ? 'true' : 'false');
            indicator.setAttribute('aria-label', `Slide ${index + 1}`);
            carouselIndicators.appendChild(indicator);

            // Слайды
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            carouselItem.innerHTML = `
                <img src="${image}" class="d-block w-100 carousel-image" alt="${project.title} - изображение ${index + 1}">
            `;
            carouselInner.appendChild(carouselItem);
        });

        // Заполняем ссылки
        document.getElementById('liveDemoLink').href = project.liveDemo;
        document.getElementById('sourceCodeLink').href = project.sourceCode;

        // Показываем модальное окно
        const modal = new bootstrap.Modal(document.getElementById('projectModal'));
        modal.show();
    }

    // Добавляем обработчики клика на карточки проектов
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.dataset.projectId;
            if (projectId) {
                openProjectModal(projectId);
            }
        });
    });
});