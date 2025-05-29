<h1 align="center">Alien Cruders</h1>

A lightweight and fun RESTful API built with Node.js, Express, and MongoDB for managing alien data through create, read, update, and delete operations.

## Features
- Create, Read, Update, and Delete (CRUD) alien data
- RESTful API design with clean endpoints
- JSON request and response format
- Error handling with appropriate HTTP status codes
- Built using JavaScript, Node.js, Express, MongoDB for flexibility.

## Tech Stack
- JavaScript  
- Node.js  
- Express.js (web framework)  
- MongoDB (database)  
- Postman (API testing)

## Getting Started
Follow these steps to get a local copy of the project up and running:


### Prerequisites

- [Node.js](https://nodejs.org/en/download/) installed (version 14 or higher recommended)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install) package manager
- Git installed
- (Optional) [Postman](https://www.postman.com/) or any API testing tool to test endpoints
- MongoDB installed and running locally or access to a MongoDB cloud instance

### Installation

1. **Clone the repository**  
```bash
git clone https://github.com/msaakaash/alien-cruders.git
cd alien-cruders
```
2. **Install dependencies**  
Run the following command to install all required packages, including Express and MongoDB drivers:  
```bash
npm install
```  
_or if you use yarn:_  
```bash
yarn install
```
3. **Run the application**  
Start the API server using:  
```bash
npm start
```  
_or if you have a custom start script, replace accordingly_

4. **Test the API**
> **Note:** By default, the server runs on `http://localhost:3000`. Use Postman or curl to interact with the API.

### Example cURL request to get all aliens
```bash
curl http://localhost:3000/aliens
```

Feel free to customize and extend the API as needed!

### API Endpoints


| Method | Endpoint     | Description                  |
|--------|--------------|------------------------------|
| GET    | /aliens      | Retrieve all alien records   |
| GET    | /aliens/:id  | Retrieve a specific alien by ID |
| POST   | /aliens      | Create a new alien           |
| PATCH  | /aliens/:id  | Update an alien by ID        |
| DELETE | /aliens/:id  | Delete an alien by ID        |


## Contributing
Contributions are welcome! Please see [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

## Code of Conduct
Please read our [Code of Conduct](docs/CODE_OF_CONDUCT.md) before contributing to this project.

## Security
If you discover a vulnerability, please refer to our [Security Policy](docs/SECURITY.md) for instructions on how to report it responsibly.

## License  
This project is licensed under the [MIT LICENSE](LICENSE).


## Author

[**Aakaash M S**](https://github.com/msaakaash)
