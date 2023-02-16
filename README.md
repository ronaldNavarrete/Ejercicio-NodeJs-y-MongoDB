<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://admisionuniandes.edu.ec/wp-content/uploads/2020/07/logo-azul-uniandes.png" width="360"/></a>
</p>

<p><b>Ronald Navarrete</b></p>
<p>En base a la siguiente lista, usted debe realizar el ejercicios propuesto con minimo 5 campos en la base de datos.
Usted debe subir solo el enlace del repositorio, sea en Github o Gitlab </p>

<p><b>Instalación</b></p>
<p><code>git clone https://github.com/ronaldNavarrete/Ejercicio-NodeJs-y-MongoDB.git</code></p>
<p><code>cd Ejercicio-NodeJs-y-MongoDB</code></p>
<p><code>npm install</code></p>
<p><code>npm start</code></p>

<br>
<p><b>Instrucciones</b></p>

<p>Listar todas las verduras</p>

```plain
MÉTODO  HTTP GET
URL     http://localhost:3000/tasks
```

<p>Buscar una verduras por su ID</p>

```plain
MÉTODO  HTTP GET
URL     http://localhost:3000/tasks/<_id DE LA VERDURA>
```

<p>Insertar verduras</p>

```plain
MÉTODO  HTTP POST
URL     http://localhost:3000/tasks
CUERPO
{
    "title": String,
    "description": String,
    "stock": Number,
    "medida": String,
    "precio": Number
}
```

<p>Modificar verdura</p>

```plain
MÉTODO  HTTP PUT
URL     http://localhost:3000/tasks/<_id DE LA VERDURA>
CUERPO
{
    "title": String,
    "description": String,
    "stock": Number,
    "medida": String,
    "precio": Number
}
```

<p>Eliminar verdura</p>

```plain
MÉTODO  HTTP DELETE
URL     http://localhost:3000/tasks/<_id DE LA VERDURA>
```
