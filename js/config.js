// Configuración para la integración con My Cloud Home
const MyCloudHomeConfig = {
    // Token de acceso para My Cloud Home
    // Reemplaza 'YOUR_ACCESS_TOKEN' con tu token real
    accessToken: 'YOUR_ACCESS_TOKEN',

    // Configuración de la API
    api: {
        baseUrl: 'https://home.mycloud.com/api/v2',
        endpoints: {
            photos: '/photos',
            albums: '/albums'
        }
    },

    // Configuración de la galería
    gallery: {
        photosPerPage: 12,
        loadMoreThreshold: 500, // píxeles antes del final de la página
        supportedFormats: ['jpg', 'jpeg', 'png', 'gif']
    }
};

// Exportar la configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MyCloudHomeConfig;
} else {
    window.MyCloudHomeConfig = MyCloudHomeConfig;
}