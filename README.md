# e-Commerce Gapsi - Examen práctico (Backend)

Backend realizado en **Java 11 + Spring Boot**, con base de datos en memoria **H2**

📦 **Repositorio oficial:**  
👉 [https://github.com/JoseBejar/prueba-tecnica-gapsi.git](https://github.com/JoseBejar/prueba-tecnica-gapsi.git)

---

## Tecnologías utilizadas

- Java 11  
- Spring Boot (Web, Data JPA, Validation)  
- H2 Database (en memoria)  
- Lombok  
- Maven  
- (Opcional) Springdoc OpenAPI para Swagger  

---

## Requisitos previos

- Java 11 instalado (`java -version`)  
- Maven 3.x (`mvn -version`)  
- (Opcional) Postman para probar los servicios con la Collection incluida  

---

## Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/JoseBejar/prueba-tecnica-gapsi.git
cd prueba-tecnica-gapsi

Ejecutar con Maven:
mvn spring-boot:run





# e-Commerce Gapsi - Examen práctico (Frontend)

Frontend desarrollado en **React** 

Este frontend consume los servicios REST del backend en Spring Boot y cumple con los requerimientos de:

- Pantalla de bienvenida (welcome page).
- Lista de proveedores con **virtual scroll**.
- Uso de **al menos 2 patrones de diseño**.
- Uso de **PWA (feature instalable)**.
- Uso de **Bootstrap** y **Font Awesome** desde CDN.

---

## 📦 Repositorio

Repositorio general del proyecto (backend + frontend):

👉 [https://github.com/JoseBejar/prueba-tecnica-gapsi.git](https://github.com/JoseBejar/prueba-tecnica-gapsi.git)

Se asume que el frontend está dentro de una carpeta similar a:

```text
prueba-tecnica-gapsi/
   └─ gapsi-examen-frontend/


Instalación y ejecución

git clone https://github.com/JoseBejar/prueba-tecnica-gapsi.git
cd prueba-tecnica-gapsi/gapsi-examen-frontend

npm install

npm start

http://localhost:3000