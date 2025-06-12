# Diagrama de la arquitectura
![Arquitectura de despliegue](img/Diagrama.svg)

## Tabla de contenido

- [Descripción del proyecto](#descripción-del-proyecto)
- [Proyecto](#proyecto) 
- [Tecnologías utilizadas](#tecnologías-y-herramientas)

## Descripción del proyecto

Este proyecto consiste en el desarrollo, validación y despliegue automático de una aplicación web construida en Node.js (backend) y React (frontend), utilizando un ecosistema DevOps completo que automatiza desde el código fuente hasta la infraestructura en producción sobre AWS.

### ¿Qué voy aprender?

### Habilidades técnicas

- **Contenerización** con Docker
- **Infraestructura como código** con Terraform y Ansible
- **CI/CD Pipelines** con Jenkins
- **Cloud Computing** con AWS
- **Calidad del código** con SonarQube
- **Repositorio de artefactos** con sonatype nexus repositroy

## Proyecto

### Estructura
```
├── README.md       # Información del proyecto
├── Ansible
├── App-back    # app en NodeJs
├── app-front   # app en React
    ├── Dockerfile      # Contenerizar app
    ├── Jenkinsfile     # Pipeline validar calidad del código
    ├── Jenkinsfile-build       # Contenerizar y subir al repo nexus
    ├── nginx.conf      # Configuración nginx
    ├── sonar-project.properties        # Propiedades utilizas por SonarQube
├── Docker
    ├── app-back-compose.yml        # Ejecutar contenedor del back
    ├── db-compose.yml       # Ejecutar contenedor base de datos
    ├── nexus-compose.yml    # Ejecutar contenedor sonartype nexus repository
    ├── sonar-compose.yml    # Ejecutar contenedor sonarQube
├── img     # guardar imagenes del proyecto
├── Terraform

```

### 🏷️ Convenciones de Commits

```bash
# Formato recomendado
git commit -m "feat(semana-04): completar Pipelines"
git commit -m "docs(semana-07): agregar notas sobre Infraestructura como código"
git commit -m "fix(semana-10): corregir configuración Prometheus"
```

## Tecnologías y herramientas

### Infraestructura y contenedores
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)
![Ansible](https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white)

### Proveedores Cloud
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

### CI/CD & GitOps
![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)


### Programación & Scripting
![Shell Script](https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

### Gestión de artefactos
![Nexus](https://img.shields.io/badge/Nexus%20Repository-4B4E6D?style=for-the-badge&logo=sonatype&logoColor=white)

### Calidad del código y análisis
![SonarQube](https://img.shields.io/badge/SonarQube-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white)

