<h1 align='center'>Exifreader-Web</h1>

## French :
### Installation:
```bash
git clone https://github.com/enzosln/Exifreader-Web.git
cd Exifreader-Web
npm i
node index.js
```
#### Ou
```bash
git clone https://github.com/enzosln/Exifreader-Web.git
cd Exifreader-Web
docker build -t exifreader .
docker run -p 80:3000 exifreader
```
L'api est maintenant disponible à l'adresse http://localhost/api/getMetadatas.
Cette route est accéssible qu'en requête POST avec un fichier qui prend pour nom 'file'.

### Acceptation:
- PNG
- JPEG
- JPG
- GIF

### Requirements
- Exiftool by Phil Harvey's (sudo apt install exiftool -y) (brew install exiftool) Si vous n'utilisez pas Docker.

## English:
### Installation:
```bash
git clone https://github.com/enzosln/Exifreader-Web.git
cd Exifreader-Web
npm i
node index.js
```
#### Or
```bash
git clone https://github.com/enzosln/Exifreader-Web.git
cd Exifreader-Web
docker build -t exifreader .
docker run -p 80:3000 exifreader
```
The API is available at http://localhost/api/getMetadatas.
This route is accessible in HTTP POST request with an unique parameter, a file named 'file'.

### Acceptation:
- PNG
- JPEG
- JPG
- GIF

### Requirements
- Exiftool by Phil Harvey's (sudo apt install exiftool -y) (brew install exiftool) If you don't uses Docker.

Salson Enzo 2024
