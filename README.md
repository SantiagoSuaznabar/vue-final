# Crypto Tracker - Vue 3 + JSON Server Auth

## Descripción

Este proyecto forma parte del módulo de **Vue 3** del Diplomado Fullstack.  
Tiene como objetivo desarrollar una aplicación web moderna para el **seguimiento de portafolios de criptomonedas**, donde los usuarios puedan gestionar sus inversiones y activos digitales de manera eficiente y privada.

La aplicación permite realizar operaciones CRUD con múltiples entidades relacionadas, autenticación de usuarios y consumo de API, aplicando buenas prácticas de desarrollo frontend.

---

## Configuración del entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:3000
```

## Instalación del proyecto

```bash
npm install
```

## Ejecucion en Desarrollo

```bash
npm run dev
```

## Backend

El proyecto incluye un archivo db.json que simula la base de datos relacional.

Instalar json server version 0.17.1

```bash
npm install -g  json-server@0.17.1
```

```bash
npm install -g json-server-auth@2.1.0
```

```bash
npm install -g express@4
```

## Ejecutar el Backend

```bash
json-server-auth db.json --port 3000 -r routes.json
```