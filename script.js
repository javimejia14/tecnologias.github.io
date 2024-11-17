document.addEventListener('DOMContentLoaded', function() {
    const videoBtn = document.getElementById('videoBtn');
    const jaasContainer = document.getElementById('jaas-container');
    
    videoBtn.addEventListener('click', function() {
        jaasContainer.classList.remove('hidden');
        
        const api = new JitsiMeetExternalAPI("8x8.vc", {
            roomName: "vpaas-magic-cookie-9634cd91423c4863b1b67892fcdf0fbe/SampleAppAcceptableTechnologiesPromiseLive",
            parentNode: jaasContainer,
            // Make sure to include a JWT if you intend to record,
            // make outbound calls or use any other premium features!
            // jwt: "null"
        });

        // Agregar un botón para cerrar la videoconferencia
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Cerrar';
        closeBtn.style.position = 'fixed';
        closeBtn.style.top = '10px';
        closeBtn.style.right = '10px';
        closeBtn.style.zIndex = '2001';
        closeBtn.addEventListener('click', function() {
            api.dispose();
            jaasContainer.classList.add('hidden');
        });
        jaasContainer.appendChild(closeBtn);
    });

    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});