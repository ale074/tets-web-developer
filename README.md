# Prueba Web Developer
## _Desarrollado en Angular 12_


Este proyecto se realiza con la finalidad de resolver es su totalidad el requerimiento
para prueba Web Developer de bold.


## Diseño HTML-CSS



### Requerimientos
- Utiliza media queries para adaptar el diseño en pantallas pequeñas. (no se
proporciona el diseño, así que usa tu creatividad).
- Fuente web no segura utilizada: Monserrat
- Puedes apoyarte en preprocesadores/transpiladores cómo LESS/SASS o cualquier
tipo de framework CSS si lo deseas. (El CSS puro también es una opción pero debes
argumentar los beneficios)
- Al dar click en el botón “Filtrar” se debe desplegar un tooltip con opciones. Si deseas
puedes hacerlo con animación.

### Colores
> Azul: #111e6c
> Rojo: #ef434e
> Gris oscuro: #323232
> Gris claro: #969696
> Color background: #e5e7ef


## Tecnologías

Tecnologías utilizadas en este proyecto:

- [Angular CLI] - 12.2.16!
- [node.js] - 14.20.0
- [npm] - 6.14.17
- [typescript] - 4.3.5


## Instalación

Este proyecto requiere [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd test-web-developer
npm i
ng serve
```


Para entornos de producción...

```sh
ng build --prod
```



Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```



## Ejecución de pruebas unitarias


`ng test` para ejecutar las pruebas unitarias a través de
 [Karma](https://karma-runner.github.io).

## Ejecución de bruebas end-to-end

Run `ng e2e` 


## License

MIT

## Comentarios adicionales

En el diseño responsivo de la tabla me hubiera gustado cambiar la tabla por una lista de tarjetas
que mostraran de mejor forma la información.

## Ventajas de usar CSS

- _Más accesibles:_ Los CSS permiten modificar el formato de una página web según sean las necesidades del usuario. Por ejemplo, personas con deficiencias visuales.
- _Más optimizados:_ El ancho de banda necesario para cargar páginas web con CSS es mucho menor que el resto. La hoja de estilo se almacena en cache y no tiene que descargar la página web una y otra vez. Los CSS, además, reducen más del 50% el ancho de banda y los costes de almacenamiento del sitio. Por lo tanto, estas páginas se cargan mucho más rápido.
- _Multidispositivo:_ las hojas de estilo permiten configurar la página para diferentes dispositivos, como son móviles, tables, lectores de voz…
