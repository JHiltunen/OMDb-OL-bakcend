# OMDb-OL-bakcend
Rest API using IMDB Open API

## Environments
- OMDb-OL-backend  is running on [Heroku](https://omdb-ol-backend.herokuapp.com/)

## Usage
These endpoints allows you to interact with the backend.
## GET
`/getMovie/` returns results from IMDB open api. User can pass title of movie (t), year and version of plot to this endpoint.

**Parameters**


| Name          | Required      | Type  |
| ------------- |:-------------:| -----:|
| `t`           | true          |string |
| `year`        | true          |number |
| `plot`        | true          |string |

`/getBook/` returns information of book with specific isbn numer.

**Parameters**


| Name          | Required      | Type  |
| ------------- |:-------------:| -----:|
| `isbn`           | true          |string |

## POST
`/user/` Adds new user.

**application/x-www-form-urlencoded**


| Name          | Required      | Type  | Additional info:|
| ------------- |:-------------:| -----:| ---------------:|
| name          | true          |string |                 |
| email         | true          |string |  users email    | 
| password      | true          |string |   users password|

---
## Requirements

For development, you will only need Node.js and Node.js package manager, installed in your environement.

### Node
- #### Node installation on Windows
  Install [node.js](https://nodejs.org/en/) to get the package manager **npm**

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.14.0

    $ npm --version
    8.3.1

---

## Install

    $ git clone https://github.com/JHiltunen/coffee-lab-backend.git
    $ cd coffee-lab-backend
    $ npm install

## Configure app

Create `.env`. file You will need to add following fields to that file:
  API_KEY=
  DB_USER=
  DB_HOST=
  DB_NAME=
  DB_PASSWORD=
## Running the project

    $ node app.js

## Testing the project

    $ npm test

