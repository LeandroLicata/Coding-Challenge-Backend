## Backend del CodingChallenge para StoryDots

Este proyecto consiste en un backend que proporciona operaciones CRUD (Crear, Leer, Actualizar, Borrar) para gestionar productos y marcas, además de autenticación de usuarios. Cada producto tiene un id único, nombre, descripción, imagen y precio, mientras que cada marca tiene un id, nombre y logo.

### Tecnologías Utilizadas

- Node.js
- PostgreSQL
- Express.js
- Sequelize

### Instrucciones de Uso

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias usando npm o yarn:

    ```
    npm install
    ```

    o

    ```
    yarn install
    ```

3. Crea un archivo `.env` en la raíz del proyecto y define la variable `DB_URL` con la URL de la base de datos PostgreSQL que deseas utilizar. Puedes utilizar la siguiente URL o modificarla según tus necesidades:

    ```
    DB_URL=postgres://dalugefk:3lTUsarKLa2pVvxHdYJgx0kywmOzFZx8@isabelle.db.elephantsql.com/dalugefk
    ```

4. Inicia el servidor con el siguiente comando:

    ```
    npm start
    ```

    o

    ```
    yarn start
    ```

    O si prefieres utilizar nodemon para reiniciar automáticamente el servidor en cada cambio:

    ```
    npm run dev
    ```

    o

    ```
    yarn dev
    ```

### Endpoints Disponibles

- `GET /products`: Obtiene todos los productos.
- `GET /products/:id`: Obtiene un producto por su ID.
- `POST /products`: Crea un nuevo producto.
- `PUT /products/:id`: Actualiza un producto existente.
- `DELETE /products/:id`: Elimina un producto por su ID.
- `GET /brands`: Obtiene todas las marcas.
- `GET /brands/:id`: Obtiene una marca por su ID.
- `POST /brands`: Crea un nuevo producto.
- `PUT /brands/:id`: Actualiza una marca existente.
- `DELETE /brands/:id`: Elimina una marca por su ID.
- `POST /users/register`: Registra un nuevo usuario.
- `POST /users/login`: Inicia sesión de un usuario registrado.

### Notas Adicionales

- Asegúrate de tener una instancia de PostgreSQL en funcionamiento y configurada correctamente antes de ejecutar el servidor.
- Puedes modificar y adaptar el código según tus necesidades o requerimientos específicos.

¡Disfruta explorando el backend del CodingChallenge para StoryDots! Si tienes alguna pregunta o comentario, no dudes en contactarme.
