# Cumplo - Desafío Frontend

¡Estamos contentos de que hayas llegado a esta instancia!. Para continuar en el proceso de selección te pediremos que resuelvas una prueba que utilizaremos para medir tus capacidades técnicas. 

Tendrás **3 días para resolverla**, dentro de los cuales puedes hacernos cualquier consulta.

## 📄 Descripción

Queremos que construyas una aplicación web cuyo diseño encontrarás en el archivo Figma que está en la carpeta ```design```.

> Si quieres aprender como importar archivos en Figma, visita https://help.figma.com/hc/en-us/articles/360041003114-Import-files-into-Figma

## ✅ Funciones de la aplicación

Esta aplicación web se diseñó para modernizar el proceso de selección del empleado del mes, en ella podrás:

- Ver los candidatos.
- Votar por un candidato.
- Ver el candidato ganador.

Vale la pena mencionar que:

- Puedes ver cómo interactúa la aplicación utilizando el **prototipo de Figma**.
- No existe **ningún tipo de autenticación** para acceder a la aplicación.
- **Existe una cuenta atrás** que inicia desde el momento en que se levanta el servicio. Corresponde al tiempo por el cual se prolongará la votación. Una vez que acabe, los votantes deberán ver al ganador.
- **No tendrás que preocuparte del backend**. Tenemos un servicio que te entregará toda la información que necesites. Revisa la documentación.

## 👀 Observaciones

- Usa algún framework moderno para construir interfaces de usuario en Javascript como ```Vue``` o ```React```.
- Puedes hacer uso las bibliotecas que necesites (siempre y cuando puedas justificar su uso).

## 📦 Entregables
### Requeridos
- Repositorio git privado con el proyecto (revisaremos los commits, así que intenta describirlos bien).
- Documentación básica e instrucciones para levantar el proyecto.
- Pruebas unitarias (donde creas que sea importante tenerlas)
### Geniales
- Aplicación funcional accesible vía internet.
- Pruebas e2e.

Puedes aplicar algunos cambios menores en la aplicación, por ejemplo: no te gustaron los colores o encuentras que puedes mejorar la experiencia de usuario con algunas mejoras en la UI.

## ▶️ Ejecución

En el archivo ```package.json``` encotrarás el comando ```start``` que levanta concurrentemente el proceso del servicio (```start:backend```) y la ejecución del frontend (```start:frontend```). 

**Haz que el comando ```start:frontend```** inicie tu aplicación en la carpeta ```client```.

> El servicio backend correrá por defecto en el puerto 3001, asegúrate de tenerlo disponible y de que tu aplicación haga las consultas a la URL correspondiente.

> Hay dos parámetros de configuración que te serán útiles: ```COUNTDOWN_SECONDS``` y ```INITIAL_CANDIDATES```. El primero determina en segundos el tiempo de la cuenta atrás y el segundo la cantidad de candidatos que serán generados.

## 🔩 Servicio backend

Como verás hay una carpeta llamada ```server``` que contiene el servicio que necesitarás para obtener los datos desde la aplicación. 

### Endpoints

> Recuerda agregar la cabecera `Content-Type: application/json`.

#### **GET** `/api/v1/candidates`.

_Obtiene los candidatos._
```javascript
/* Respuesta 200 en caso exitoso */
[
  {id: 'asdf', name: 'John Sotello', store: 'New York',  votes: 4},
  {id: 'qwera', name: 'Peter Clark', store: 'Santiago',  votes: 2},
]

```

#### **GET** `/api/v1/candidates/winner`.

_Obtiene el candidato ganador._
```javascript
/* Respuesta 200 en caso exitoso */
{id: 'asdf', name: 'John Sotello', store: 'New York', votes: 4}

/* Respuesta 400 en caso de que aun no haya un ganador */
{message: 'Voting in progress'}
```

#### **POST** `/api/v1/candidates/vote`.

_Vota por un candidato._

```javascript
/* Cuerpo de la petición */
{ id: "asdf" }

/* Respuesta 200 en caso existoso */
{id: 'asdf', name: 'John Sotello', store: 'New York', votes: 4}

/* Respuesta 400 en caso de que la votación haya terminado  */
{message: 'Voting has finished'}

/* Respuesta 404 en caso de que el candidato no exista */
{message: 'Candidate does not exist'}
```

> Recuerda agregar la cabecera `Content-Type: application/json`.

#### **GET** `/api/v1/countdown`.

_Obtiene información sobre la cuenta atrás._
```javascript
/* Respuesta 200 en caso exitoso */
{ secondsLeft: 56 }
```
## 🗂️ Proceso

Si finalizaste, avísanos. Te pediremos que nos invites al repositorio en el que tienes la aplicación o que nos compartas un archivo comprimido conteniendo todo el proyecto (incluyendo la historia en git).

Si no alcanzaste, avísanos también. Evaluaremos el caso de todas maneras 🙂.

Si tienes preguntas no dudes en enviarlas a <agustin.bustos@cumplo.com>.

**¡Mucho éxito!**