# ZingMp3 Backend
## 1. Introduction
## 2. Requirements
To run this project, you need to have the following software installed:
- Docker: [Docker Installation Guide](https://docs.docker.com/get-docker/)
- Docker Compose: [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

## Installation

### 1. Run the db with docker
```bash
cd init
docker-compose up -d
cd ..
```
### 2. Run with docker
```bash
docker-compose up -d
```

### 3. Application URLs
- Discovery Service: http://localhost:8761
- Api Gateway: http://localhost:8081
- Keycloak: http://localhost:8080