// Función para copiar la IP del servidor al portapapeles
const copiarIP = () => {
    const serverIp = document.getElementById('server-ip').textContent;

    // Copiar al portapapeles
    navigator.clipboard.writeText(serverIp).then(() => {
        // Mostrar un mensaje de éxito al usuario
        alert('IP copiada al portapapeles');
    }).catch(err => {
        console.error('Error al copiar la IP: ', err);
    });
};

// Añadir el evento de clic a la IP para copiarla
document.getElementById('server-ip').addEventListener('click', copiarIP);
