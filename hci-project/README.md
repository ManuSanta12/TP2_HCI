La aplicación puede correr en Google Chrome (Versión 124.0.6367.155) y …

Para correr la página es necesario tener node instalado en la computadora y tener la api corriendo de acuerdo al instructivo proporcionado por la cátedra. A continuación ejecutar los siguientes pasos en terminal dentro del directorio hci-project:

En caso de no tener instalado http-server:
$npm install -g http-server

y luego:
$npm install all
$npm run build
$cd dist
$http-server

y luego abrir la dirección que se ve en terminal en alguno de los navegadores soportados.
También, se puede ejecutar con:

$npm run dev
