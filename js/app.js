// Configuración de la conexión con My Cloud Home
const myCloudConfig = {
    apiEndpoint: 'https://home.mycloud.com/api/v2',
    redirectUri: window.location.origin + '/callback.html',
    scope: 'photos.read'
};

// Clase para manejar la galería de fotos
class PhotoGallery {
    constructor() {
        this.gallery = document.getElementById('photo-gallery');
        this.loadingElement = document.getElementById('loading');
        this.photos = [];
        this.currentPage = 1;
        this.loading = false;
        this.initializeGallery();
    }

    async initializeGallery() {
        this.addScrollListener();
        await this.loadPhotos();
    }

    addScrollListener() {
        window.addEventListener('scroll', () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !this.loading) {
                this.loadMorePhotos();
            }
        });
    }

    async loadPhotos() {
        try {
            this.loading = true;
            this.loadingElement.classList.remove('d-none');
            const photos = await this.fetchPhotosFromCloud();
            this.renderPhotos(photos);
        } catch (error) {
            console.error('Error al cargar las fotos:', error);
            this.showError('No se pudieron cargar las fotos. Por favor, verifica tu conexión.');
        } finally {
            this.loading = false;
            this.loadingElement.classList.add('d-none');
        }
    }

    async fetchPhotosFromCloud() {
        if (!MyCloudHomeConfig.accessToken || MyCloudHomeConfig.accessToken === 'YOUR_ACCESS_TOKEN') {
            console.warn('Token de acceso no configurado. Configura tu token en config.js');
            return [];
        }

        try {
            const response = await fetch(`${MyCloudHomeConfig.api.baseUrl}${MyCloudHomeConfig.api.endpoints.photos}`, {
                headers: {
                    'Authorization': `Bearer ${MyCloudHomeConfig.accessToken}`,
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Error al obtener fotos: ${response.statusText}`);
            }

            const data = await response.json();
            return data.items.map(photo => ({
                url: photo.downloadUrl,
                title: photo.name,
                description: photo.description || 'Un recuerdo especial de Copito'
            }));
        } catch (error) {
            console.error('Error al obtener fotos de My Cloud Home:', error);
            throw error;
        }
    }

    renderPhotos(photos) {
        photos.forEach(photo => {
            const photoCard = this.createPhotoCard(photo);
            this.gallery.appendChild(photoCard);
        });
    }

    createPhotoCard(photo) {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        col.innerHTML = `
            <div class="card memory-card">
                <img src="${photo.url}" class="card-img-top" alt="${photo.title}">
                <div class="card-body">
                    <h5 class="card-title">${photo.title}</h5>
                    <p class="card-text">${photo.description}</p>
                </div>
            </div>
        `;

        return col;
    }

    async loadMorePhotos() {
        this.currentPage++;
        await this.loadPhotos();
    }
}

// Inicializar la galería cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new PhotoGallery();
});