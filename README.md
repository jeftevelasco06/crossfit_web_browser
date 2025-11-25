Crossfit Web App
Descripción

Esta es una página web de Crossfit desarrollada con Node.js, Express y EJS.
La web permite:

Ver información general y entrenamientos.

Registrarse como usuario.

Completar un perfil personalizado indicando nombre, edad, peso, estatura y condiciones especiales.

Generar automáticamente una rutina personalizada según los datos ingresados.

Estructura del proyecto
crossfit_web/
├─ app.js
├─ package.json
├─ templates/
│  ├─ index.ejs
│  ├─ workouts.ejs
│  ├─ signup.ejs
│  ├─ profile.ejs
│  └─ profile_result.ejs
└─ static/
   ├─ css/
   │  └─ style.css
   ├─ js/
   │  └─ main.js
   └─ images/
       ├─ crossfit1.jpg
       ├─ crossfit2.jpg
       └─ trainer.jpg

Requisitos

Node.js (v14 o superior recomendado)

npm

Instalación

Clona o descarga el repositorio:

git clone <tu-repositorio.git>


Navega al proyecto:

cd crossfit_web


Instala las dependencias:

npm install

Uso

Inicia el servidor:

node app.js


Abre tu navegador:

http://localhost:3000


Navega por la web:

Home → /

Entrenamientos → /workouts

Registro → /signup

Perfil → /profile (completa tu información y obtén tu rutina personalizada)

Funcionalidades
Ruta	Método	Funcionalidad
/	GET	Página de inicio con información general
/workouts	GET	Muestra las rutinas y entrenamientos disponibles
/signup	GET	Formulario de registro de usuarios
/signup	POST	Recibe los datos del registro y los muestra
/profile	GET	Formulario de perfil personalizado
/profile	POST	Recibe los datos del perfil y muestra rutina
Personalización

Las vistas están en templates/.

Los archivos estáticos (CSS, JS, imágenes) están en static/.

Puedes agregar más imágenes en static/images/ y referenciarlas en los .ejs.

El CSS se encuentra en static/css/style.css y puede ser modificado para cambiar el estilo de la web.

Cómo desplegar en línea

Para obtener un link público de tu web:

Sube tu proyecto a GitHub.

Usa un servicio como Render, Railway o Vercel para desplegar tu Node.js app.

El servicio te dará un enlace tipo:

https://crossfit-web-yourusername.onrender.com


Ese enlace es el que puedes entregar o compartir.

Autor

Jefte Velasco
