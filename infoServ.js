document.addEventListener('DOMContentLoaded', () => {
    const serverIp = "49.12.82.39"; // IP del servidor (sin puerto)
    const serverPort = "27177"; // Puerto del servidor
    const serverStatus = document.getElementById('server-status');
    const playerCount = document.getElementById('player-count');
    const serverIpElement = document.getElementById('server-ip');

    // Establece el IP del servidor en la página
    serverIpElement.textContent = `${serverIp}:${serverPort}`;

    // Obtiene el estado del servidor usando la API mcsrvstat.us
    fetch(`https://api.mcsrvstat.us/2/${serverIp}:${serverPort}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log para revisar qué devuelve la API

            if (data.online === true) {  // Si el servidor está en línea
                serverStatus.textContent = 'En Línea';
                serverStatus.classList.add('online');
                serverStatus.classList.remove('offline');

                // Verificamos si los datos de jugadores están disponibles
                if (data.players && data.players.online !== undefined) {
                    playerCount.textContent = data.players.online; // Muestra los jugadores en línea
                } else {
                    playerCount.textContent = '0'; // Si no hay jugadores, muestra 0
                }
            } else {  // Si el servidor está fuera de línea
                serverStatus.textContent = 'Fuera de Línea';
                serverStatus.classList.add('offline');
                serverStatus.classList.remove('online');
                playerCount.textContent = '0'; // No hay jugadores si el servidor está fuera de línea
            }
        })
        .catch(error => {
            console.error('Error al obtener el estado del servidor:', error);
            serverStatus.textContent = 'Error';
            playerCount.textContent = '-'; // Mostrar un guión si hay un error
        });
});
