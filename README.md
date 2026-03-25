# 🚀 Projeto Fullstack Simples (React + Java + MySQL)

Este é um projeto simples desenvolvido para fins de estudo, com o
objetivo de praticar a comunicação entre **frontend** e **backend**,
além da persistência de dados em um banco de dados.

------------------------------------------------------------------------

## 📌 Tecnologias Utilizadas

### 🔹 Frontend

-   React
-   Vite
-   JavaScript

### 🔹 Backend

-   Java
-   Spring Boot
-   Spring Data JPA

### 🔹 Banco de Dados

-   MySQL

------------------------------------------------------------------------

## 🎯 Funcionalidade

O sistema consiste em:

-   Um formulário simples com:
    -   Campo de email
    -   Campo de senha
    -   Botão de envio
-   Ao enviar:
    -   Os dados são enviados para o backend
    -   O backend salva no banco de dados
    -   Um alerta é exibido: **"Conta Criada"**

------------------------------------------------------------------------

## 🧱 Estrutura do Projeto

/frontend → Aplicação React (interface)\
/backend → API em Java (Spring Boot)

------------------------------------------------------------------------

## ⚙️ Como Rodar o Projeto

### 🗄️ Banco de Dados

``` sql
CREATE DATABASE cadastro_db;

USE cadastro_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
    senha VARCHAR(255)
);
```

------------------------------------------------------------------------

### ☕ Backend (Spring Boot)

Configure o `application.properties`:

    spring.datasource.url=jdbc:mysql://localhost:3306/cadastro_db
    spring.datasource.username=SEU_USUARIO
    spring.datasource.password=SUA_SENHA

    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true

Execute a aplicação e acesse:

http://localhost:8080

------------------------------------------------------------------------

### ⚛️ Frontend (React + Vite)

``` bash
cd frontend
npm install
npm run dev
```

Acesse:

http://localhost:5173

------------------------------------------------------------------------

## 🔗 Integração

Requisição POST para:

http://localhost:8080/usuarios

Exemplo:

``` json
{
  "email": "teste@email.com",
  "senha": "123456"
}
```

------------------------------------------------------------------------

## 🧪 Testando

1.  Preencha email e senha
2.  Clique em enviar
3.  Veja o alerta: Conta Criada
4.  Verifique no banco:

``` sql
SELECT * FROM usuarios;
```

------------------------------------------------------------------------

## ⚠️ Observações

-   Senhas sem criptografia (apenas estudo)
-   Sem validações
-   Interface simples