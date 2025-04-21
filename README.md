# Recuerdos de Copito

Una aplicación web para almacenar y mostrar los recuerdos especiales de Copito, integrada con My Cloud Home.

## Configuración de My Cloud Home

Para conectar la aplicación con tu cuenta de My Cloud Home, sigue estos pasos:

1. Accede a tu cuenta de My Cloud Home
2. Ve a la sección de configuración
3. En la sección de API, genera un nuevo token de acceso
4. Copia el token generado
5. Pega el token en el archivo `config.js`

## Estructura del Proyecto

```
├── index.html          # Página principal
├── carnet.html         # Página del carnet de Copito
├── css/
│   └── styles.css      # Estilos personalizados
├── js/
│   ├── app.js          # Lógica principal
│   └── config.js       # Configuración de My Cloud Home
└── images/            # Carpeta para imágenes locales
```

## Uso

1. Configura tu conexión con My Cloud Home
2. Abre index.html en tu navegador
3. Las fotos se cargarán automáticamente desde tu My Cloud Home
4. Desplázate hacia abajo para cargar más fotos

## Características

- Carga dinámica de fotos desde My Cloud Home
- Interfaz responsive y amigable
- Diseño personalizado con tema de mascotas
- Carnet digital de Copito"# Copito-memories" 
