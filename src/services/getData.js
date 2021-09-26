const html = [
    {
        id: 1,
        title: "Que es html 5?",
        desc: [
            `HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web (CSS) o la funcionalidad/comportamiento (JavaScript).`,
            `"Hipertexto" hace referencia a los enlaces que conectan páginas web entre sí, ya sea dentro de un único sitio web o entre sitios web. Los enlaces son un aspecto fundamental de la Web. Al subir contenido a Internet y vincularlo a las páginas creadas por otras personas, te conviertes en un participante activo en la «World Wide Web» (Red Informática Mundial).`,
            `HTML utiliza "marcas" para etiquetar texto, imágenes y otro contenido para mostrarlo en un navegador Web. Las  marcas HTML incluyen "elementos" especiales como <head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <nav>, <output>, <progress>, <video>, <ul>, <ol>, <li> y muchos otros.`,
            `Un elemento HTML se distingue de otro texto en un documento mediante "etiquetas", que consisten en el nombre del elemento rodeado por "<" y ">". El nombre de un elemento dentro de una etiqueta no distingue entre mayúsculas y minúsculas. Es decir, se puede escribir en mayúsculas, minúsculas o una mezcla. Por ejemplo, la etiqueta <title> se puede escribir como <Title>, <TITLE> o de cualquier otra forma.`
        ]
    },
    {
        id: 2,
        title: "Estructura basica de html",
        subDesc: [
            `El elemento <head> de HTML provee información general (metadatos) acerca del documento, incluyendo su título y enlaces a scripts y hojas de estilos.`,
            `El elemento <body> representa el contenido de un documento HTML. Solo puede haber un elemento <body> en un documento.`
        ],
        code: [`<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Titulo del documento</title>
    </head>
    <body>
        ...
    </body>
</html>`]
    },
    {
        id: 3,
        title: "Comentarios en HTML",
        desc: [
            `Para explicarlo vamos a poner como ejemplo los comentarios en HTML. Estos comentarios son líneas de texto recogidas entre dos etiquetas HTML con sus atributos específicos, y que el navegador no mostrará en pantalla. Este texto aunque no se muestra en pantalla, el navegador si que lo leerá cuando examine el documento HTML.`,
            `Comentar en HTML5 es realmente sencillo. Dentro de tu código deberás abrir una etiqueta HTML como haces habitualmente, con el símbolo de “<”. Seguido irá un cierre de exclamación y dos guiones.`,
            `Para cerrar el comentario deberás poner dos guiones y luego el símbolo de “>”.`
        ],
        code: [`<!DOCTYPE html>
<html lang="es">
    <head>
        <!--ESTE ES UN COMENTARIO HTML EN EL HEAD-->
    </head>
    <body>
        <!--ESTE ES UN COMENTARIO HTML EN EL BODY-->
    </body>
</html>`]
    },
    {
        id: 4,
        title: "!DOCTYPE",
        desc: [
            `El Doctype o “Declaración del tipo de documento” es una instrucción especial que va al inicio de nuestro documento HTML y que permite al navegador entender qué versión de HTML estamos utilizando. Esta información determinará la manera en la que el navegador procesará el documento, un DOCTYPE distinto podría implicar hasta una visualización diferente del sitio web dentro del mismo navegador.`
        ],
    },
    {
        id: 5,
        title: "Etiqueta HTML",
        desc: [
            `La etiqueta <html></html> en esta se puede agregar el atributo lang este se encarga de decirle a la pagina en que idioma estara.`,
            `Dentro de el se pueden encontrar dos etiquetas <head></head> y <body></body>`
        ],
    },
    {
        id: 6,
        title: "Etiqueta Meta",
        desc: [
            `Las meta etiquetas (también llamadas: meta tags) se utilizan al crear páginas en HTML o XHTML. Estas etiquetas pueden describir el contenido de un sitio web con precisión. Este elemento te permite transmitir metadatos estructurados a través de la página web. Los metadatos pueden variar dependiendo de la descripción de los atributos deseados. Las meta etiquetas se pueden utilizar para describir una página con más detalle.`,
            `Un meta elemento puede utilizarse para imitar la respuesta HTTP de un encabezado o para anclar meta información adicional en el documento HTML, como el autor de un texto con una etiqueta de autor, o la forma en que los caracteres se mostrarán a través de la etiqueta de tipo de contenido.`,
            `En HTML5 hay un total de cinco atributos válidos que están disponibles para la etiqueta meta: charset, http-equiv, nombre, esquema y contenido. El http-equiv se usa para imitar la respuesta HTTP del encabezado.`,
            `Los meta tags pueden ser declarados en la cabecera del documento HTML o XHTML.`
        ],
    },
    {
        id: 7,
        title: "Tabla periodica de etiquetas",
        img: './img/html/periodic-table-of-html-elements.png'
    },
    {
        id: 8,
        title: "Encabezados",
        desc: [
            `Las etiquetas de encabezados se utilizan para diferenciar textos o párrafos comunes de otros importantes. Las etiquetas de las cabeceras serian:  H1, H2, H3, H4, H5 y H6. Tienen un orden jerárquico, en el que H1 es el de mayor importancia.`,
            `Por ejemplo, lo más común es reservar la etiqueta H1 para el nombre del sitio web. Por ejemplo, en nuestro caso, nuestro H1 seria,  <h1>Hazhistoria :: Diseño web y diseño gráfico</h1>.`,
            `Como la etiqueta H1 indica que el texto que se remarca es muy importante, mucha gente tiende a poner textos o palabras clave dentro de etiquetas H1 a lo largo de una página web. Esto es una práctica errónea, y que hará que nuestra página web no valide, y que incluso buscadores como google puedan penalizarnos a la hora del posicionamiento.`,
            ``
        ],
        code: [`<!--Lista de encabezados-->
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
`
        ]
    },
    {
        id: 9,
        title: "Etiquetas de contenido",
        code: [`<!--Lista de etiquetas contenedoras-->
<div>Esta etiqueta no muestra nada, simplemente separa</div>
<p>Esta es una etiqueta para el parrafo</p>
<br /> <!--Etiqueta salto de linea-->
<hr /> <!--Etiqueta que marca una separacion-->
<ul>Etiqueta de lista desordenada</ul>
<ol>Etiqueta de lista ordenada</ol>
Hay muchas mas etiquetas...
`
        ]
    },
    {
        id: 10,
        title: "Etiquetas de textos semanticas",
        code: [`<!--Lista de etiquetas para textos con importancia semantica-->
<a>Un enlace a un ancla o una pagina externa</a>
<strong>Letra negrita</strong>
<b>Letra negrita</b>
<small>Letra italica</small>
<em>Letra italica</em>
<blockquote>Etiqueta para frases</blockquote>
<cite>autor de la frase</cite>
Hay muchas mas etiquetas...
`
        ]
    },
    {
        id: 11,
        title: "Etiquetas de formateo",
        desc: [`El Elemento HTML <pre> (o Texto HTML Preformateado) representa texto preformateado. El texto en este elemento típicamente se muestra en una fuente fija, no proporcional, exactamente como es mostrado en el archivo. Los espacios dentro de este elemento también son mostrados como están escritos.`],
        code: [`<!--Lista de etiquetas para formatear-->
<pre>
    Tareas por hacer
    -HTML
        - Encabezados
        - Textos
        - Contenidos
    -CSS
        - Colores
        - Posicionamientos
</pre>
`,
            `<pre>
    <code>
        <h1>Hola</h1>
    </code>
</pre>
`
        ]
    },
    {
        id: 12,
        title: "Etiquetas semanticas estructurales",
        desc: [
            `Las etiquetas semánticas estructurales nos sirven para que los motores de búsqueda, o cualquier otro mecanismo automático que lea un sitio web, sepa con exactitud qué partes de su contenido corresponden a cada una de las partes típicas de un sitio. Generalmente, en cualquier documento tenemos una cabecera, un cuerpo y un pie de página, elementos que definen la estructura representados por diversas etiquetas.`,
            `El elemento HTML <header> representa un grupo de ayudas introductorias o de navegación. Puede contener algunos elementos de encabezado, así como también un logo, un formulario de búsqueda, un nombre de autor y otros componentes.`,
            `El elemento HTML <main> define la seccion principal del documento, solo puede existir una etiqueta main por documento`,
            `El elemento HTML <nav> representa una sección de una página cuyo propósito es proporcionar enlaces de navegación, ya sea dentro del documento actual o a otros documentos. Ejemplos comunes de secciones de navegación son menús, tablas de contenido e índices.`,
            `El elemento HTML <section> representa una sección genérica de un documento. Sirve para determinar qué contenido corresponde a qué parte de un esquema. Piensa en el esquema como en el índice de contenido de un libro; un tema común y subsecciones relacionadas.  Es, por lo tanto, una etiquéta semántica. Su funcionalidad principal es estructurar semánticamente un documento a la hora de ser representado por parte de un agente usuario. Por ejemplo, un agente de usuario que represente el documento en voz, podría exponer al usuario el índice de contenido por niveles para navegar rápidamente por las distintas partes.`,
            `El Elemento HTML <article> representa una composición auto-contenida en un documento, página, una aplicación o en el sitio, que se destina a distribuir de forma independiente o reutilizable, por ejemplo, en la indicación.`,
            `El elemento HTML <aside> representa una sección de una página que consiste en contenido que está indirectamente relacionado con el contenido principal del documento. Estas secciones son a menudo representadas como barras laterales o como inserciones y contienen una explicación al margen como una definición de glosario, elementos relacionados indirectamente, como publicidad, la biografía del autor, o en aplicaciones web, la información de perfil o enlaces a blogs relacionados.`,
            `El Elemento HTML <footer> representa un pie de página para el contenido de sección más cercano o el elemento raíz de sección.`
        ],
        code: [`<header></header>
<nav></nav>
<main>
    <section>
        <article></article>
        <article></article>
        <article></article>
    </section>
    <aside></aside>
</main>
<footer></footer> 
`
        ]
    },
    {
        id: 13,
        title: "Etiquetas de bloques VS etiquetas de linea",
        desc: [
            `Los elementos de bloque ("block elements" en inglés) siempre empiezan en una nueva línea y ocupan todo el espacio disponible hasta el final de la línea`,
            `Los elementos en línea ("inline elements" en inglés) no empiezan necesariamente en nueva línea y sólo ocupan el espacio necesario para mostrar sus contenidos.`
        ],
        code: [
            `<div>La etiqueta por excelencia es la div, una etiqueta bloque es aquella que genera saltos de linea con sus etiquetas hermanas</div>`,
            `<span>La etiqueta por excelencia es la span, una etiqueta de linea solo ocupa el espacio necesario que tiene su contenido</span>`,
        ]
    },
    {
        id: 14,
        title: "Etiquetas de estilos",
        desc: [
            `La etiqueta de estilos <style></style> se una en el propio archivo.`,
            `Tambien podemos hacer los estilos en linea, que no son muy recomendados.`,
            `Y la mas recomendada es llamar una hoja de estilo externa utilizando la etiqueta <link />.`
        ],
        code: [
            `<style type="text/css">
    p { color: red; }
</style>`,
            `<p style="color:red;"></p>`,
            `<link rel="stylesheet" src="./imagenes/foto.png"/>`
        ]
    },
    {
        id: 15,
        title: "Etiquetas script",
        desc: [
            `El elemento HTML Script (<script>) se utiliza para insertar o hacer referencia a un script ejecutable dentro de un documento HTML o XHTML.`,
            `Los scripts sin atributo async o defer, así como las secuencias de comandos en línea, son interpretados y ejecutados inmediatamente, antes de que el navegador continúe procesando la página.`
        ],
        code: [
            `<script src="./js/index.js" />`,
            `<script>
    console.log('Hola mundo');
</script>`
        ]
    },
    {
        id: 16,
        title: "Etiqueta img",
        desc: [
            `El elemento de imagen HTML <img> representa una imagen en el documento.`,
        ],
        code: [
            `<img src="Ubicacion de la imagen" alt="descripcion del este"/>
<img src="./img/hola-mundo.png" alt="Imagen de hola mundo"/>
            `
        ]
    },
    {
        id: 17,
        title: "Etiqueta svg Vectores",
        desc: [
            `El elemento svg es un contenedor que define un nuevo sistema de coordenadas y viewport. Es usado como el elemento más externo de cualquier documento SVG, pero también puede ser usado para agregar un fragmento de un SVG dentro de un documento SVG o HTML.`,
        ],
        code: [
            `<svg width="150" height="100" viewBox="0 0 3 2">
    <rect width="1" height="2" x="0" fill="#008d46" />
    <rect width="1" height="2" x="1" fill="#ffffff" />
    <rect width="1" height="2" x="2" fill="#d2232c" />
</svg>`
        ]
    },
    {
        id: 18,
        title: "Figure y figcaption",
        desc: [
            `El elemento HTML <figure> representa contenido independiente, a menudo con un título. Si bien se relaciona con el flujo principal, su posición es independiente de éste. Por lo general, se trata de una imagen, una ilustración, un diagrama, un fragmento de código, o un esquema al que se hace referencia en el texto principal, pero que se puede mover a otra página o a un apéndice sin que afecte al flujo principal.`,
            `El elemento HTML <figcaption>  representa un subtítulo o leyenda asociado al contenido del elemento padre <figure>, pudiendo ser colocado como primer o último hijo. Es importante destacar que el elemento <figcaption> es opcional.`
        ],
        code: [
            `<figure>
    <img src="./img/tabla.png" alt="tabla de los Elementos HTML"/>
    <figcaption>Imagen de la tabla periodica</figcaption>
</figure>`
        ]
    },
    {
        id: 19,
        title: "Listas ordenadas",
        desc: [
            `El elemento ol permite definir listas o viñetas ordenadas (“Ordered List”), bien con numeración o alfabéticamente.`,
        ],
        code: [
            `<ol>
    <li>Lunes</li>
    <li>Martes</li>
    <li>Miercoles</li>
    <li>Jueves</li>
    <li>Viernes</li>
</ol>`
        ]
    },
    {
        id: 20,
        title: "Listas desordenadas",
        desc: [
            `ul de "unordered list" -lista no ordenada . crea una lista no ordenada.`,
        ],
        code: [
            `<ul>
    <li>Papa</li>
    <li>Manteca</li>
    <li>Frutilla</li>
    <li>Manzana</li>
    <li>Durazno</li>
</ul>`
        ]
    },
    {
        id: 21,
        title: "Listas de definicion",
        desc: [
            `El elemento HTML <dl>  representa una lista descriptiva. El elemento encierra una lista de grupos de términos (especificados con el uso del elemento <dt>) y de descripciones (proveídas con elementos <dd>). Algunos usos comunes para este elemento son implementar un glosario o para desplegar metadatos (lista de pares llave-valor).`,
            `El  elemento HTML <dt> especifica un término en una descripción o lista de definiciones, y como tal debe utilizarse dentro de un elemento <dl> Es usualmente seguido por un elemento <dd>; sin embargo, múltiples elementos <dt>  en un renglón indican diferentes términos los cuales todos son definidos por el siguiente elemento <dd>.`,
            `El elemento HTML <dd> provee detalles acerca de o la definición de un término precedente (<dt>) en una lista de descripciones (<dl>).`

        ],
        code: [
            `<dl>
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>

    <dt>Morgawr</dt>
    <dd>A sea serpent.</dd>

    <dt>Owlman</dt>
    <dd>A giant owl-like creature.</dd>
</dl>`
        ]
    },
    {
        id: 22,
        title: "Tablas",
        desc: [
            `La etiqueta <table> sería el elemento que contendría todos los elementos de la tabla, mientras que <th> y <td> se utilizarían para cada uno de los campos de la tabla (cabecera y celda respectivamente). Cada vez que se quisiera añadir una nueva fila, habría que incluirlo todo dentro de una etiqueta <tr>.`,
            `<tr> Table Row. Etiqueta contenedora de cada fila de la tabla.`,
            `<th> Table Header. Cada una de las celdas de cabecera de la tabla.`,
            `<td> Table Data. Cada una de las celdas de la tabla.`

        ],
        code: [
            `<table>
<!-- Cabecera -->
<tr>
    <th>Título columna 1</th>
    <!-- Celda de cabecera de la columna 1 -->
    <th>Título columna 2</th>
    <!-- Celda de cabecera de la columna 2 -->
    <th>Título columna 3</th>
    <!-- Celda de cabecera de la columna 3 -->
</tr>
<!-- Primera fila -->
<tr>
    <td>Celda 1x1</td>
    <!-- Primera celda de la primera fila -->
    <td>Celda 2x1</td>
    <!-- Segunda celda de la primera fila -->
    <td>Celda 3x1</td>
    <!-- Tercera celda de la primera fila -->
</tr>
<!-- Segunda fila -->
<tr>
    <td>Celda 1x2</td>
    <!-- Primera celda de la segunda fila -->
    <td>Celda 2x2</td>
    <!-- Segunda celda de la segunda fila -->
    <td>Celda 3x2</td>
    <!-- Tercera celda de la segunda fila -->
</tr>
</table>`
        ]
    },
    {
        id: 23,
        title: "Combinar celdas",
        desc: [
            `Cada etiqueta <td> y <th> puede incluir una serie de atributos para modificar su comportamiento o para establecer relaciones semánticas entre celdas. Probablemente, las más interesantes sean colspan y rowspan:`,
            `colspan Número de columnas que la celda abarcará..`,
            `rowspan Número de filas que la celda abarcará.`,
        ],
        code: [
            `<table>
<!-- ... -->
<tr>
    <td colspan="3">Datos adicionales</td>
    <!-- Abarca 3 celdas -->
</tr>
<!-- Primera fila -->
<tr>
    <td>Celda 1x1</td>
    <!-- Primera celda de la primera fila -->
    <td>Celda 2x1</td>
    <!-- Segunda celda de la primera fila -->
    <td>Celda 3x1</td>
    <!-- Tercera celda de la primera fila -->
</tr>
<!-- ... -->
</table>`
        ],
        subDesc: [
            `El atributo rowspan actuaría exactamente igual, pero abarcando filas en vertical, en lugar de columnas en horizontal. También se podrían combinar. Los atributos colspan y rowspan podrán tener como máximo el número de columnas o filas de la tabla, si tuviera un número mayor, simplemente se utilizará el máximo de la tabla.`
        ]
    },
    {
        id: 24,
        title: "Organización de tablas",
        desc: [
            `Por defecto, al crear una tabla, el navegador se encarga de crearla a medida que va leyendo las etiquetas, por lo que la tabla se crea en el orden que se han especificado sus elementos, de arriba a abajo. Sin embargo, podemos utilizar una serie de etiquetas contenedoras que establecerán la zona de la tabla donde deben aparecer su contenido:`,
            `<thead> Etiqueta contenedora de la cabecera de la tabla. Parte superior de la tabla.`,
            `<tbody> Etiqueta contenedora del cuerpo de la tabla. Parte central de la tabla.`,
            `<tfoot> Etiqueta contenedora del pie de la tabla. Parte inferior de la tabla.`,
            `<caption>	Establece un título de la tabla, independientemente de su posición.`
        ],
        code: [
            `<table>
<!-- Table footer: pie de la tabla (tfoot) -->
<tfoot>
    <tr>
    <td>Pie de tabla 1</td>
    <td>Pie de tabla 2</td>
    </tr>
</tfoot>
<!-- Table header: cabecera de la tabla (thead) -->
<thead>
    <tr>
    <th>Columna 1</th>
    <th>Columna 2</th>
    </tr>
</thead>
<!-- Table body: cuerpo de la tabla (tbody) -->
<tbody>
    <tr>
    <td>Celda 1</td>
    <td>Celda 2</td>
    </tr>
</tbody>
<!-- Leyenda o título de la tabla -->
<caption>
    Título de la tabla
</caption>
</table>`
        ],
        subDesc: [
            `En este ejemplo, a pesar de seguir el orden tfoot, thead, tbody, caption definido en el HTML, el navegador lee la tabla y la redistribuye según su significado semántico, de modo que lo organiza dejándolo con el orden caption, thead, tbody, tfoot. De esta forma, estas etiquetas nos pueden servir para indicar secciones concretas de la tabla, independientemente del lugar donde estemos escribiendo, algo que puede ser muy útil si estamos creando la tabla de forma dinámica mediante algún lenguaje de programación.`
        ]
    },
    {
        id: 25,
        title: "Agrupación de columnas",
        desc: [
            `Las tablas, al definirse en el código siguiendo una estructura horizontal, hacen complejo el aplicar o realizar una serie de cambios a una columna. Existe una serie de etiquetas para agrupar o seleccionar columnas y así poder realizar tareas sobre ellas, como por ejemplo, asociarle una clase específica o darle estilos CSS a una columna concreta de la tabla, sin necesidad de ir celda por celda.`,
            `<colgroup>	Etiqueta contenedora de columnas. Crea una agrupación de columnas.`,
            `<col>	Etiqueta que representa a una columna de la tabla.`
        ],
        code: [
            `<table>
<tr>
    <th>Columna 1</th>
    <th>Columna 2</th>
    <th>Columna 3</th>
</tr>
<tr>
    <td>Data 1</td>
    <td>Data 2</td>
    <td>Data 3</td>
</tr>
<tr>
    <td>Data 4</td>
    <td>Data 5</td>
    <td>Data 6</td>
</tr>
<colgroup>
    <col style="background:red">
    <col span="2" style="background:yellow">
</colgroup>
</table>`
        ]
    },
    {
        id: 26,
        title: "Enlaces",
        desc: [
            `El Elemento HTML Anchor <a> crea un enlace a otras páginas de internet, archivos o ubicaciones dentro de la misma página, direcciones de correo, o cualquier otra URL.`,
        ],
        code: [
            `<ul>
<li><a href="https://example.com">Website</a></li>
<li><a href="mailto:m.bluth@example.com">Email</a></li>
<li><a href="tel:+123456789">Phone</a></li>
<li><a href="#enlace-interno">ir a una etiqueta con el id enlace-interno</a></li>
</ul>`
        ]
    },
    {
        id: 27,
        title: "Elementos interactivos",
        desc: [
            `La etiqueta de HTML <button> representa un elemento cliqueable de tipo botón que puede ser utilizado en formularios o en cualquier parte de la página que necesite un botón estándar y simple de aplicar. De forma predeterminada, los botones HTML se presentan con un estilo similar en todas las plataformas, estos estilos se pueden cambiar utilizando CSS.`,
            `El elemento HTML Details <details> es usado como un widget de revelación a través del cual el usuario puede obtener información adicional.`
        ],
        code: [
            `<button>Soy un boton</button>`,
            `<details>
    <summary>Some details</summary>
    <p>More info about the details.</p>
</details>`
        ]
    },
    {
        id: 28,
        title: "Audio y video",
        desc: [
            `El elemento audio se usa para insertar contenido de audio en un documento HTML o XHTML. El elemento audio se agregó como parte de HTML 5.`,
            `El elemento video se utiliza para incrustar vídeos en un documento HTML o XHTML.`
        ],
        code: [
            `<audio src="" controls></audio>`,
            `<video src="" poster="posterimage.jpg" controls></video>`
        ]
    },
    {
        id: 29,
        title: "Elementos de formulario",
        desc: [
            `El elemento HTML <input> se usa para crear controles interactivos para formularios basados en la web con el fin de recibir datos del usuario.Hay disponible una amplia variedad de tipos de datos de entrada y widgets de control, que dependen del dispositivo y el agente de usuario (user agent).El elemento <input> es uno de los más potentes y complejos en todo HTML debido a la gran cantidad de combinaciones de tipos y atributos de entrada.`,
        ],
        code: [
            `<input type="text" /> <!-- Campo de texto de línea simple. -->
<input type="button" /> <!-- Botón sin un comportamiento específico. -->
<input type="color" /> <!-- Control para espicificar un color. -->
<input type="date" /> <!-- Control para introducir una fecha (año, mes y día, sin tiempo). -->
<input type="email" /> <!-- Campo para introducir una dirección de correo electrónico. -->
<input type="password" /> <!-- Control de línea simple cuyo valor permanece oculto. -->
<input type="submit" /> <!-- Botón que envía el formulario. -->
`
        ]
    },
    {
        id: 30,
        title: "Select",
        desc: [
            `El elemento <select> de HTML representa un control que muestra un menú de opciones. Las opciones contenidas en el menú son representadas por elementos <option>, los cuales pueden ser agrupados por elementos <optgroup>. La opcion puede estar preseleccionada por el usuario.`,
        ],
        code: [
            `<select name="select">
    <option value="value1">Value 1</option>
    <option value="value2" selected>Value 2</option>
    <option value="value3">Value 3</option>
</select>`
        ]
    },
    {
        id: 31,
        title: "Radio",
        desc: [
            `El elemento input, teniendo el valor "radio" en su atributo type, representa una opción que pertenece a un grupo en el que no más de una opción puede ser seleccionada al mismo tiempo. Estos grupos están normalmente conformados por un número de botones de opción, todos compartiendo el mismo valor en el atributo name.`,
            `En contraste con las casillas de verificación, el valor del atributo value juega un papel fundamental para los botones de opción. Cuando el formulario es enviado solo la opción seleccionada es enviada con el formulario al agente procesador, quien no tiene otra forma de decidir qué opción ha sido seleccionada más que mirando al valor (value) del control enviado. Este es el motivo por el cual el atributo value de cada opción debe ser único en el grupo.`,
            `Para que un conjunto de botones de opción pertenezcan al mismo grupo, todos ellos deberían tener el mismo valor en el atributo name.`
        ],
        code: [
            `<form action="../../form-result.php" method="post" target="_blank">
    <p>
    Empleo actual:<br>
        <input type="radio" name="empleoactual" value="tiempocompleto"> Tiempo completo<br>
        <input type="radio" name="empleoactual" value="mediodia"> Medio día<br>
        <input type="radio" name="empleoactual" value="sinempleo"> Sin empleo
    </p>
    <p><input type="submit" value="Enviar datos"></p>
</form>`,
            `<form action="../../form-result.php" method="post" target="_blank">
<p>
Empleo actual:<br>
    <label><input type="radio" name="empleoactual" value="tiempocompleto"> Tiempo completo</label><br>
    <label><input type="radio" name="empleoactual" value="mediodia"> Medio día</label><br>
    <label><input type="radio" name="empleoactual" value="sinempleo"> Sin empleo</label>
</p>
<p><input type="submit" value="Enviar datos"></p>
</form>`
        ],
        subDesc: [
            `Como puedes ver en el primer ejemplo, el texto junto a cada botón de opción no responde a los clics como cualquiera podría esperarse. En el siguiente ejemplo, resolveremos este problema convirtiendo este texto regular en una etiqueta para el botón.`,
            `Para lograr esto, encerraremos al texto y al control correspondiente con un elemento label. De esta forma, asociaremos al botón de opción con todo lo demás que esté dentro del elemento label.`
        ],
    },
    {
        id: 32,
        title: "Checkbox",
        desc: [
            `El elemento HTML <input type="checkbox"> es un elemento de entrada que te permite insertar un vector o array de valores. El atributo value es usado para definr el valor enviado por el checkbox. El atributo checked se usa para indicar que el elemento está seleccionado. El atributo indeterminate se usa para indicar que el checkbox esta en un estado indeterminado (en la mayoria de las plataformas, esto dibuja una linea horizontal que atraviesa el checkbox).`,
        ],
        code: [
            `<label><input type="checkbox" id="cbox1" value="first_checkbox"> Este es mi primer checkbox</label><br>
<input type="checkbox" id="cbox2" value="second_checkbox"> <label for="cbox2">Este es mi segundo checkbox</label>`
        ]
    },
    {
        id: 33,
        title: "DataAtributtes",
        desc: [
            `HTML5 está diseñado de forma tal que sea fácil extender los datos asociados a un elemento en particular sin necesidad de que tengan un significado definido. Los atributos data-*  permiten almacenar información adicional sobre un elemento HTML cualquiera sin tener que recurrir a artilugios tales como la utilización de atributos no estándar, propiedades adicionales en el DOM `,
            `La sintáxis es simple. Un atributo cualquiera cuyo nombre comience con data-es un atributo de datos. Supongamos que tenemos un artículo y deseamos almacenar información adicional que no tiene ninguna representación visual. En ese caso, alcanza con que hagamos uso de los atributos data:`
        ],
        code: [
            `<article id="electriccars" data-columns="3" data-index-number="12314" data-parent="cars"> ... </article>`,
            `<ul>
    <li data-animal-type="bird">Owl</li>
    <li data-animal-type="fish">Salmon</li>
    <li data-animal-type="spider">Tarantula</li>
</ul>`
        ]
    },
    {
        id: 34,
        title: "Metaetiquetas para SEO y moviles",
        desc: [
            `Las metaetiquetas, etiquetas meta o elementos meta (también conocidas por su nombre en inglés, metatags o meta tags) son etiquetas HTML que se incorporan en el encabezado de una página web y que resultan invisibles para un visitante, pero de gran utilidad para navegadores u otros programas que puedan valerse de esta información.`,
        ]
    },
]

const css = [
    {
        id: 1,
        title: "Que es css 3?",
        desc: [
            `CSS es un lenguaje de diseño gráfico que permite definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado. Es muy usado para establecer el diseño visual de los documentos web e interfaces de usuario escritas en HTML.`
        ]
    },
    {
        id: 2,
        title: "Sintaxis basica",
        desc: [
            `La meta básica del lenguaje Cascading Stylesheet (CSS) es permitir al motor del navegador pintar elementos de la página con características específicas, como colores, posición o decoración. La sintaxis CSS refleja estas metas y estos son los bloques básicos de construcción.`,
            `El selector que puede ser una etiqueta`,
            `Bloque de declaraciones, cada uno de los atributos que vamos a modificar`
        ],
        code: [
            `p{
    background-color: red
}

h1{
    color: red;
    font-size: 1rem;
}
`
        ]
    },
    {
        id: 3,
        title: "Comentarios en css",
        code: [
            `p{
    background-color: red; /* Este es un comentario en CSS */
}

/* Este es un comentario en CSS */

`
        ]
    },
    {
        id: 4,
        title: "Formas de invocacion de css",
        desc: [
            `Existen 3 maneras de aplicar estilos css: En linea, Interna o Externa`
        ],
        code: [`<p style="background-color:red; color:black;">Soy un texto en negro con fondo rojo</p>`,
            `<head>
    <style>
        p{
            background-color: red;
            color: black;
        }
    </style>            
</head>`,
            `<head>
    <link rel="stylesheet" src="index.css" />
</head>
`
        ]
    },
    {
        id: 5,
        title: "Selectores basicos: Etiqueta, Identificadores, Clases",
        desc: [
            `Existen 3 maneras de aplicar estilos css`
        ],
        code: [`/*Etiqueta*/
p{
    color: red;
    font-size: 18px;
}

/*Identificador - ID*/
#soyUnIdentificador{
    color: red;
    font-size: 18px;
}

/*Clase - class*/
.soyUnaClase{
    color: red;
    font-size: 18px;
}
`
        ]
    },
    {
        id: 6,
        title: "Selectores avanzados",
        desc: [
            `Los selectores de hijos: Selector de hijo directo y descendientes`,
            `Los selectores de hermanos en general y adyacentes`,
            `Selectores por atributos`
        ],
        code: [`.hijos-directos > p {
    color: red;
}

.hijos-descendientes p {
    color: red;
}
`,
            `/*Los selectores de hermanos van a aplicar a los elementos que son hermanos y que esten por debajo del elemento de referencia*/
.hermanos ~ p{
    background-color: red;
}

.hermanos-adyacentes + p{
    background-color: red;
}
`,
            `.selectores-atributos a[href]{
    color: blue;
}

.selectores-atributos a[target="_blank"]{
    color: red;
}

/* El * aplica el estilo si contiene el texto en cuestion en cualquier parte*/
.selectores-atributos a[href*="goo"]{
    font-size: 24px;
}

/* El ^ aplica el estilo si contiene el texto en cuestion al inicio */
.selectores-atributos a[href^="http:"]{
    text-decoration: none;
}

/* El $ aplica el estilo si contiene el texto en cuestion al final */
.selectores-atributos a[href$=".com"]{
    font-size: 27px;
    background: red;
    color: black;
}

/* El ~ aplica el estilo si contiene el texto en cuestion en una lista separada por espacios */
.selectores-atributos a[class~="cursos"]{
    font-size: 27px;
    background: steelblue;
    color: black;
}

/* El | aplica el estilo si contiene el texto en cuestion en una lista separada por espacios y que despues del texto en cuestion pueda venir un guion medio */
.selectores-atributos a[class|="menu"]{
    font-style: italic;
    background-color: pink;
}
`
        ]
    },
    {
        id: 7,
        title: "Selector universal",
        code: [`/* El * es el selector universal y aplica a todas la etiquetas HTML  */
*{
    font-family: sans-serif, Arial;
    margin: 0;
    padding: 0;
}

.selector-universal * {
    font-size: 20px;
    color: lightgreen;
}

`
        ]
    },
    {
        id: 8,
        title: "Pseudoclases",
        desc: [
            `Una pseudoclase CSS es una palabra clave que se añade a los selectores y que especifica un estado especial del elemento seleccionado. Por ejemplo,  :hover aplicará un estilo cuando el usuario haga hover sobre el elemento especificado por el selector.`,
            `Las pseudoclases, junto con los pseudoelementos, permiten aplicar un estilo a un elemento no sólo en relación con el contenido del árbol de documento, sino también en relación a factores externos como el historial del navegador (:visited, por ejemplo), el estado de su contenido (como :checked en algunos elementos de formulario), o la posición del ratón (como :hover que permite saber si el ratón está encima de un elemento o no).`
        ],
        code: [`/*Pseudoclases de estados*/
selector:pseudoclase { propiedad: valor; }
selector:active      { propiedad: valor; }
selector:checked     { propiedad: valor; }
selector:hover       { propiedad: valor; }
selector:visited     { propiedad: valor; }
selector:required    { propiedad: valor; }
selector:focus       { propiedad: valor; }
`,
            `/*Pseudoclases de posicion y tipos*/
selector:pseudoclase           { propiedad: valor; }
selector:first-child           { propiedad: valor; }
selector:last-child            { propiedad: valor; }
selector:nth-child(posicion)   { propiedad: valor; }
selector:first-of-type         { propiedad: valor; }
selector:last-of-type          { propiedad: valor; }
selector:nth-of-type(posicion) { propiedad: valor; }
selector *:not(p)              { propiedad: valor; }
`]
    },
    {
        id: 9,
        title: "Pseudoelementos",
        desc: [
            `Al igual que las pseudo-clases, los pseudo-elementos se añaden a los selectores, pero en cambio, no describen un estado especial sino que, permiten añadir estilos a una parte concreta del documento. Por ejemplo, el pseudoelemento ::first-line selecciona solo la primera línea del elemento especificado por el selector.`
        ],
        code: [`
selector::pseudoelementos { propiedad: valor; }
selector::placeholder     { propiedad: valor; }
selector::after           { propiedad: valor; }
selector::before          { propiedad: valor; }
selector::first-line      { propiedad: valor; }
selector::first-letter    { propiedad: valor; }  
`]
    },
    {
        id: 10,
        title: "El algoritmo de CSS",
        desc: [
            `El algoritmo de CSS: Es la forma en que el navegador aplica los estilos al documento HTML. Es vital entender este concepto para que entiendas como se aplican y en algunas ocasiones se sobreescriben las reglas CSS.`,
            `Cascada: En un primer nivel de simplicidad, la cascada en las hojas de estilo significa que el orden de las reglas importa en CSS: cuando dos reglas tienen la misma especificidad, se aplica la que aparece en último lugar en el CSS.`,
            `Especificidad: Es el modo que tiene el navegador de decidir qué regla se aplica si diversas reglas tienen selectores diferentes pero podrían aplicarse a un mismo elemento. Básicamente, la especificidad mide cuán específica es la selección de un selector:`,
            `Herencia: La herencia también debe entenderse en este contexto: algunos valores de las propiedades CSS que se han establecido para los elementos padre los heredan los elementos hijo, pero otros no.`
        ],
        code: [`/*Especificidad*/
Etiquetas y pseudoelementos --------------- 0,0,0,1
Clases, atributos y pseudoclases ---------- 0,0,1,0
Identificadores --------------------------- 0,1,0,0
Estilos en linea -------------------------- 1,0,0,0
!important -------------------------------- Rompe la especificidad
`]
    },
    {
        id: 11,
        title: "Prefijos de los navegadores",
        desc: [
            `Actualmente los navegadores tienen implementadas muchas de las nuevas características de CSS3 utilizando sus propias versiones de cada propiedad mediante prefijos. Esto se hace así para evitar los posibles errores ocasionados por las primeras implementaciones que aún no son estables. Por ello, los navegadores proporcionan valores utilizando sus prefijos propios y una declaración sin prefijo.`,
        ],
        code: [`
        -moz-     Firefox
        -webkit-  Safari y Chrome
        -o-       Opera
        -chrome-  Google Chrome
        `]
    },
    {
        id: 12,
        title: "Modelo de caja",
        desc: [
            `Todo en CSS tiene una caja alrededor, y comprender estas cajas es clave para poder crear diseños con CSS o para alinear elementos con otros elementos. En este artículo, echaremos un vistazo más de cerca al modelo de cajas en CSS con el que vas a poder crear diseños de compaginación más complejos con una comprensión de cómo funciona y la terminología relacionada.`,
            `El contenido de la caja (o content box): El área donde se muestra el contenido, cuyo tamaño puede cambiarse utilizando propiedades como width y height.`,
            `El relleno de la caja (o padding box): El relleno es espacio en blanco alrededor del contenido; es posible controlar su tamaño usando la propiedad padding y otras propiedades relacionadas.`,
            `El borde de la caja (o border box): El borde de la caja envuelve el contenido y el de relleno. Es posible controlar su tamaño y estilo utilizando la propiedad border y otras propiedades relacionadas.`,
            `El margen de la caja (o margin box): El margen es la capa más externa. Envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos. Es posible controlar su tamaño usando la propiedad margin y otras propiedades relacionadas.`
        ],
        img: './img/css/modelo-caja.jpg'
    },
    {
        id: 13,
        title: "Caja de linea vs Caja de bloque",
        desc: [
            `Caja en linea ocupan el espacio de su contenido, no tienen por qué comenzar en una nueva línea, sólo pueden contener a otros elementos inline y sus dimensiones no se pueden especificar mediante CSS. Ejemplos: a, br, img, input, label, select, span, strong…`,
            `Los bloques ocupan todo el ancho de pantalla y siempre comienzan en una línea nueva. Estos elementos pueden contener a otros elementos de bloque o en línea y su altura varía en función de su contenido. Ejemplos son div, form, h1-h6, ol, p, table o li. Podemos especificar su tamaño en pantalla mediante CSS como hemos visto con width y height.  `
        ]
    },
    {
        id: 14,
        title: "Propiedad display",
        code: [
            `/*Es la encargada de decir como se va a comportar un elemento HTML*/
            Propiedad Display
            inline
            block
            inline-block
            dimensiones (alto y ancho)
            none
            table
            list-item
            flex
            grid
            `
        ]
    },
    {
        id: 15,
        title: "Tamaño de la caja",
        desc: [
            `La propiedad CSS box-sizing como el user agent (en-US) debe calcular el ancho y alto total de un elemento.`,
            `Por defecto en el modelo de caja de CSS, el ancho y alto asignado a un elemento es aplicado solo al contenido de la caja del elemento. Si el elemento tiene algun borde (border) o relleno (padding), este es entonces añadido al ancho y alto a alcanzar el tamaño de la caja que es desplegada en pantalla. Esto significa que cuando se definen el ancho y alto, se tiene que ajustar el valor definido para permitir cualquier borde o relleno que se pueda añadir.`,
            `content-box es el comportamiento CSS por defecto para el tamaño de la caja (box-sizing). Si se define el ancho de un elemento en 100 pixeles, la caja del contenido del elemento tendrá 100 pixeles de ancho, y el ancho de cualquier borde o relleno ser añadirá al ancho final desplegado.`,
            `border-box le dice al navegador tomar en cuenta para cualquier valor que se especifique de borde o de relleno para el ancho o alto de un elemento. Es decir, si se define un elemento con un ancho de 100 pixeles. Esos 100 pixeles incluíran cualquier borde o relleno que se añadan, y la caja de contenido se encogerá para absorber ese ancho extra. Esto típicamente hace mucho más fácil dimensionar elementos.`
        ],
        img: './img/css/box-sizing.jpg'
    },
    {
        id: 16,
        title: "Propiedades float y clear",
        desc: [
            `La propiedad CSS float ubica un elemento al lado izquierdo o derecho de su contenedor, permitiendo a los elementos de texto y en línea aparecer a su costado. El elemento es removido del normal flujo de la página, aunque aún sigue siendo parte del flujo (a diferencia del  posicionamiento absoluto).`,
            `La propiedad CSS clear especifica si un elemento puede estar al lado de elementos flotantes que lo preceden o si debe ser movido (cleared) debajo de ellos. La propiedad clear aplica a ambos elementos flotantes y no flotantes.`
        ],
        img: './img/css/float.png'
    },
    {
        id: 17,
        title: "Posicionamiento CSS",
        desc: [
            `Las propiedades FLOAT y POSITION nos permiten la posicion natural de cualquier elemento del documento HTML`,
            `El navegador coloca cada elementos teniendo en cuenta el orden en el que aparecen en el documento y su tipo de visualizacion dependiendo si es un elemento de linea o bloque`,
            `Con FLOAT y POSITION podemos modificar su comportamiento`,
        ]
    },
    {
        id: 18,
        title: "Elementos Flotantes",
        desc: [
            `float: Convierte un elemento en flotante desplazandolo hasta la zona mas a la izquierda o mas a la derecha de la posicion en al que originalmente se encontraba.`,
            `clear: Limpia la flotacion(left, right, both)`
        ]
    },
    {
        id: 19,
        title: "Tipos de posicionamiento",
        code: [
            `- static: Es el valor por defecto, significa que el elemento respeta el flujo del documento HTML, por lo que no se puede mover ni posicionar
- relative: Conserva sus dimensiones y posicion original en el flujo del documento. Si se mueve toma como referencia su posicion original
- absolute: El elemento pierde sus dimensiones y posicion original en el flujo del documento. Si se mueve puede tomar como referencia 2 elementos:
            1) El primero ancestro por posicionamiento relativo
            2) Si no encuentra un ancestro relativo, se mueve respecto del documento HMTL.
- fixed: El elemento pierde sus dimensiones y posicion original en el flujo del documento. Si se mueve toma como referencia el documento HTML y queda fijo en la posicion, cuando el scroll se mueva, el elemento no lo hara, queda FIJO
- sticky: Es una combinacion de posicionamiento relative y fixed, para este posicionamiento las propiedades de top, left, bottom y right no mueven el elemento, sirven como un punto de referencia, mientras no lleguen a ese valor el elemento se comporta como relative, cuando llega se convierte en fixed

Para que este comportamiento funcione el elemento sticky debe ser hijo directo del body o su elemento contenedor debe tener dimensiones definidas y solo sera sticky dentro de las dimensiones de su contenedor padre.
`,
            `/*Para mover los elementos posicionados se activan las propiedades:*/
- top (vertical - eje Y)
- bottom (vertical - eje Y)
- left (horizontal - eje X)
- right (horizontal - eje X)
- z-index (profundidad - eje Z)

/*Las propiedades top y left van a tener preferencia por sobre bottom y right respectivamente.*/
/*Estas 5 propiedades no funcionan con el valor de static.*/
`
        ]
    },
    {
        id: 20,
        title: "Z-index",
        desc: [
            `Propiedad que permite controlar la profundidad de los elementos posicionados, su valor por defecto es auto, acepta numerso positivos, negativos y cero.`,
            `A mayor valor el elemento esta mas al frente, a menor valor mas al fondo`,
            `Un elemento padre nunca podra estar sobre sus elementos hijos, sin embargo los elementos hijos si pueden dandoles un valor negativo.`
        ],
        img: "./img/css/z-index.jpg"
    },
    {
        id: 21,
        title: "Colores en CSS",
        desc: [
            `Los colores en CSS se pueden indicar de cuatro formas diferentes: palabras clave, hexadecimal, RGB y HSL. Aunque el método más habitual es el del RGB hexadecimal, a continuación se muestran todas las alternativas que ofrece CSS.`,
        ],
        code: [
            `/*Palabras clave*/
p{
    color: red;
    color: blue;
    color: green;
    color: black;
}

/*Sistema hexadecimal*/
p{
    color: #ff000;
    color: #0000ff;
    color: #00ff00;
    color: #000000;
}

/*Sistema RGB*/
p{
    color: rgb(255, 0, 0);
    color: rgb(0, 0, 255);
    color: rgb(0, 255, 0);
    color: rgb(0, 0, 0);
}

/*Sistema HSL (tono, saturacion y luminosidad)*/
p{
    color: hsl(0, 100%, 50%);
    color: hsl(240, 100%, 50%);
    color: hsl(120, 100%, 50%);
    color: hsl(120, 0%, 0%);
}
`
        ]
    },
    {
        id: 22,
        title: "Transparente y CurrentColor",
        code: [
            `p{
    color: blue;
    background-color: red;
    /*transparent: color transparente es igual a aplicar rgba(0,0,0,0)*/
    background-color: transparent;

    /*currentColor: Hereda el color por defecto o asignado de la propiedad color, del ancestro que tenga definida esta propiedad mas cercano*/
    background-color: currentColor;
}
`
        ]
    },
    {
        id: 23,
        title: "Propiedad opacity",
        desc: [
            `La propiedad CSS opacity define la transparencia de un elemento, esto es, en qué grado se superpone el fondo al elemento.`
        ],
        code: [
            `p{
    background-color: green;
    opacity: 0.5;
}
`
        ]
    },
    {
        id: 24,
        title: "Unidades de medidas CSS",
        code: [
            `1) Absolutas (Su valor no cambia, son unidades del mundo real)
    pc, cm, mm, in, Q
    pt(1/72in)
    px(1/96in)

2) Relativas (Su valor es relativo a un contexto)
    em, rem, ex, ch - al tamaño de la fuente
    em  - Basada en la anchura de la "m" de la fuente del elemento
    rem - Basada en la anchura de la "m" de la fuente del elemento raiz (html)
    ex  - Basada en la altura de la "x" de la fuente del elemento
    ch  - Basada en la anchura del "0" de la fuente del elemento
    %   - Al tamaño del viewport

    vw, vh, vmin, vmax - al tamaño del viewport
    vw   - ancho del viewport van de 1 a 100
    vh   - alto del viewport van de 1 a 100
    vmax - entre vw y vh toma el que tenga mayor valor
    vmin - Entre vw y vh toma el que tenga menor valor  
`
        ]
    },
    {
        id: 25,
        title: "Variables y funciones CSS",
        desc: [
            `En CSS, las propiedades personalizadas (también conocidas como variables) son entidades definidas por autores de CSS que contienen valores específicos que se pueden volver a utilizar en un documento. Se establecen mediante la notación de propiedades personalizadas (por ejemplo, --main-color: black;) y se acceden mediante la función var() (por ejemplo, color: var (--main-color);).`,
            `Estas funciones realizan una acción muy sencilla que se traduce en un valor para la propiedad que estemos usando. De esta forma hacemos que nuestro código sea más flexible y genere o recoja valores de forma automática. Ya vimos una mecánica similar en el artículo de las variables de CSS. La idea es básicamente la misma. Lo que hacemos con estas funciones es crear una especia de “programa” que realiza una operación por nosotros, ya sea un cálculo matemático o la toma de un valor variable.`
        ],
        code: [`/*La funcion var() es para cargar variables*/
.custom-props{
    --primary-color: gray;
    --font-size: 32px;
}

.custom-prop-1{
    background-color: var(--gray);
    font-size: var(--font-size);
}

.custom-prop-id-1{
    background-color: var(--gray, blue);
}`,
            `/*La funcion url() es para cargar contenido externo*/
/*Son mala practica por que son bloqueantes a la hora de que el navegador lee esta instruccion*/
@import url("otra-hoja.css");
`,
            `/*La funcion calc() es para hacer calculos matematicos*/
.calculo{
    width: calc(100px + 100px);

}
`,
            `/*La funcion min() y max() es para tener diferentes valores*/
.min-max{
    width: min(300px, 20vw);
    height: max(200px, 25vh);
}
`,
            `/*La funcion clamp() que recibe tres valores tamanio minimo, tamanio ideal y tamanio maximo*/
h1{
    font-size: clamp(2rem, 1rem + 3vw, 3rem);
}
`,
        ]
    },
    {
        id: 26,
        title: "Estilo de Fuentes y textos",
        desc: [
            `Las propiedades que se usan son font-family, font-size, font-weight, font-style, font-variant, line-height y font
            `
        ]
    },
    {
        id: 27,
        title: "Fuentes externas",
        desc: [
            `@font-face permite al autor especificar fuentes online para visualizar en sus páginas web. Al permitir a los autores proporcionar sus propias fuentes, @font-face elimina la necesidad de depender del numero limitado de fuentes de usuarios instaladas en sus computadoras.
            `
        ],
        code: [`@font-face {
    font-family: "Chalet";
    src: url("../assets/font/Chalet.woff") format("woff"),
         url("../assets/font/Chalet.woff2") format("woff2");
    font-display: swap;
}`,
            `font-display:
    auto - Permite que el navegador utilice el metodo predeterminado que suele ser block.
    block - Oculta brevemente el texto hasta que la fuente haya sido descargada por completo.
    swap - Indica al navegador que utilice la fuente alternativa para mostrar el texto hasta que la fuente personalizada se haya cargado por completo.
    fallback - Es una mezcla de auto y swap.
    optional - Ocultara el texto, luego lo cargara con la fuente alternativa y finalmente aplicara la fuente personalizada.
`
        ]
    },
    {
        id: 28,
        title: "Estilos de textos",
        desc: [
            `Las propiedades que se usan son text-align, text-decoration, text-indent, text-overflow, text-transform, white-space y letter-spacing
            `
        ],
        code: [`text-align: Establece la alineación del contenido de un elemento de bloque.
text-decoration: Establece la decoración que se añade al texto de un elemento.
text-indent: Establece la tabulación o indentación de la primera línea del texto de un elemento.
text-overflow: Determina como el contenido que se desborda y que no es mostrado, va a hacérsele notar a los usuarios.
text-transform: Especifica el cambio entre mayúsculas y minúsculas del texto de un elemento.
white-space: Determina cómo se maneja el espacio en blanco dentro de un elemento.
letter-spacing: Establece la separación entre las letras del texto.
        `
        ]
    },
    {
        id: 29,
        title: "border y outline",
        desc: [
            `La propiedad border es una de las "propiedades shorthand" que define CSS y que se utilizan para establecer de forma abreviada el valor de una o más propiedades individuales. En este caso, se trata de una de las propiedades shorthand más completas, ya que permite establecer hasta 12 propiedades de forma simultánea.
            `,
            `Podemos crear esquinas redondeadas en el CSS utilizando la propiedad border-radius.`,
            `La propiedad CSS outline es una forma reducida para establecer una o más de las propiedades individuales de contorno outline-style, outline-width y outline-color en una sola declaración. En la mayoría de los casos el uso de este atajo es preferible y más conveniente.`
        ],
    },
    {
        id: 30,
        title: "Estilos de fondo",
        code: [
            `background-color: define el color de fondo del elemento
background-image: define la imagen de fondo del elemento
background-repeat: define como se repite la imagen de fondo en el elemento
background-size: define el tamanio de la imagen de fondo, primer valor x, segundo y
    - cover: cambia el tamanio de la imagen de fondo para asegurarse de que permanezca completamente visible.
    - contain: cambia el tamanio de la imagen de fondo para asegurarse de que el elemento este completamente cubierto.
background-position: define la posicion de la imagen de fondo, primer valor x, segundo y, si no se especifica un segundo valor este sera center. Aparte de valores numericos podemos indicar el posicionamiento con palabras: center, top, left y right.
background-clip: define cuanto debe extenderse el fondo dentro del elemento.
background-origin: define el origen de la imagen de fondo.
background-attachment: define como se comportara la imagen de fondo al desplazarse por la pagina.
`
        ]
    },
    {
        id: 31,
        title: "Estilos de imagenes",
        desc: [
            `La propiedad CSS object-fit indica cómo el contenido de un elemento reemplazado, por ejemplo un <img> o <video>, debería redimensionarse para ajustarse a su contenedor.`,
            `Se puede alterar la alineación del contenido del elemento reemplazado utilizando la propiedad object-position.`
        ],
        code: [
            `contain: El contenido reemplazado está dimensionado para mantener su
         relación de aspecto mientras se ajusta dentro del cuadro de contenido del elemento:
         su tamaño de objeto concreto se resuelve como una restricción de contenido contra el ancho y la altura utilizados del elemento.

cover: El contenido reemplazado se dimensiona para mantener su relación de
       aspecto mientras llena el cuadro de contenido completo del elemento.
       Si la relación de aspecto del objeto no coincide con la relación de aspecto de su caja, entonces el objeto se recortará para que se ajuste.
    
fill: Modifica el tamaño del elemento remplazado para llenar el cuadro de contenido.
      El objeto completo ocupará todo el espacio de la caja. 
      Si el tamaño del elemento no concuerda con el de su caja, se estirará para llenarlo.

none: El contenido reemplazado no se redimensiona.

scale-down: El contenido se dimensiona como si none o contain estuvieran
            especificados, lo que resultaría en un tamaño de objeto concreto más pequeño.
`
        ]
    },
    {
        id: 32,
        title: "Estilos de listas CSS",
        desc: [
            `Las propiedades que se usan son list-style-type, list-style-image, list-style-position y list-style`
        ],
    },
    {
        id: 33,
        title: "Texto en columnas",
        desc: [
            `Las propiedades que se usan son column-count, column-gap, column-rule y column-width`
        ],
        code: [
            `.text-columns{
    column-count: 4;
    column-gap: 2rem;
    column-rule: medium dotted red;
    column-width: 100px; /*Tamanio minimo de anchura de las columnas*/
}         
`
        ]
    },
    {
        id: 34,
        title: "Estilos de tabla",
        code: [
            `.table{
    font-size: 3rem;
    border-collapse: separate; /*default*/
    border-collapse: collapse;
}

.table,
td,
th{
    border: medium solid black;
    border-spacing: 1rem;
    border-spacing: 0;
}
`
        ]
    },
]

const javascript = [
    {
        id: 1,
        title: "En construcción",
    }
]

const typescript = [
    {
        id: 1,
        title: "En construcción",
    }
]

const sass = [
    {
        id: 1,
        title: "En construcción",
    }
]

const react = [
    {
        id: 1,
        title: "En construcción",
    }
]

const github = [
    {
        id: 1,
        title: "En construcción",
    }
]

export default function getData(value) {

    const object = {
        html,
        css,
        javascript,
        typescript,
        sass,
        react,
        github
    }

    return object[value];
}