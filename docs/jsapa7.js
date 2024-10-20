document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleView');
    const teamSection = document.getElementById('teamPresentation');
    const tableSection = document.getElementById('infoTable');

    toggleButton.addEventListener('click', function() {
        if (teamSection.classList.contains('active')) {
            teamSection.classList.remove('active');
            teamSection.classList.add('hidden');
            tableSection.classList.remove('hidden');
            tableSection.classList.add('active');
            toggleButton.textContent = 'Ver Presentación del Equipo';
        } else {
            tableSection.classList.remove('active');
            tableSection.classList.add('hidden');
            teamSection.classList.remove('hidden');
            teamSection.classList.add('active');
            toggleButton.textContent = 'Ver Tabla de Información';
        }
    });

    // Animación suave para las imágenes de los miembros del equipo
    const memberImages = document.querySelectorAll('.member-image');
    memberImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease-in-out';
        });
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});