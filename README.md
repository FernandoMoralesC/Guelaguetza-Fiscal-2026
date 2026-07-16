[README.md](https://github.com/user-attachments/files/30097815/README.md)
# Guelaguetza Fiscal 2026 - versión 0.2

Espacio digital oficial del evento.

## Archivos que debes subir a GitHub

- `index.html`
- `css/styles.css`
- `js/script.js`
- `img/logo-guelaguetza.jpg`
- `img/logo-ciat.jpg`

## Cómo enlazar las fotografías

En `index.html`, busca los tres elementos que contienen:

```html
<a class="gallery-card ... " href="#">
```

Sustituye `#` por el enlace público de Google Drive o Google Photos.

## Cómo agregar ponencias

Sube los PDF a la carpeta `ponencias` y cambia cada tarjeta por un enlace.
Ejemplo:

```html
<a class="document-card" href="ponencias/nombre-del-archivo.pdf" target="_blank">
```
