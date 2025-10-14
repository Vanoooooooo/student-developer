document.addEventListener('DOMContentLoaded', function () {
    const filters = document.querySelectorAll('.btn-check');
    const projects = document.querySelectorAll('.project-card');
    const noProjectsMessage = document.getElementById('no-projects-message');

    function filterProjects() {
        const activeFilters = Array.from(filters)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.dataset.tech);

        let visibleProjects = 0;

        projects.forEach(project => {
            const projectTechs = project.dataset.tech.split(' ');

            if (activeFilters.length === 0) {
                project.classList.remove('hidden');
                visibleProjects++;
            } else {
                const shouldShow = activeFilters.every(filter => projectTechs.includes(filter));
                if (shouldShow) {
                    project.classList.remove('hidden');
                    visibleProjects++;
                } else {
                    project.classList.add('hidden');
                }
            }
        });

        // Показываем сообщение, если нет видимых проектов
        if (visibleProjects === 0) {
            noProjectsMessage.classList.remove('hidden');
        } else {
            noProjectsMessage.classList.add('hidden');
        }
    }

    filters.forEach(filter => {
        filter.addEventListener('change', filterProjects);
    });
});