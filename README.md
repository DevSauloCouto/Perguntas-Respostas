# Bem-vindos ao projeto GuiaPerguntas

### Sobre:

Este projeto foi criado em conjunto com o curso de formação Node.js do Guia do Programador. Basicamente foi criada uma plataforma de dúvidas, onde o usuário pode fazer uma pergunta e qualquer outro usuário pode responder. Lembrando que: é um projeto básico, não possui muitas funcionalidades, porém pretendo trabalhar com recursos e funcionalidades mais avançadas para adicionar neste projeto como: 

- **Integrar Socket.io**
- **Cadastro de usuários na plataforma**
- **Perfil de usuário**
- **Filtros de assuntos**
- **Campo de pesquisa sobre determinado assunto**

Bom essas são algumas ideias que eu tive. Ao longo da minha jornada nos estudos eu vou integrando aos poucos essas funcionalidades.

## Como Utilizar?

1. Clone este repositório na sua máquina
2. Em seu terminal, navegue até o diretório do projeto e digite "npm install" para instalar todas as dependências do projeto.
3. Configure o banco de dados MySQL na sua máquina, faça a alteração no MySQL/index.ts de acordo com as instruções: 
```typescript
import { Sequelize } from "sequelize";

class DataBase{
    database: Sequelize;

    constructor(){
        this.database = new Sequelize("nome do seu banco", "nome de usuário do MySQL", "senha do MySQL", {host: "localhost", dialect: "mysql"})
    }

    async Auth(): Promise<void> {
        try{
            await this.database.authenticate();
            console.log("Connection Database Success");
        }catch(err){
            console.log(err);
        }
    }

}

export { DataBase };
``` 
4. Agora está tudo pronto. Digite ***npm run start*** e acesse em seu navegador "localhost:8080".

### Agradecimentos

Obrigado por visualizar o repo deste projeto, espero que gostem e fiquem a vontade para reproduzi-lo com o intuito de melhorá-lo de acordo com suas ideias criativas.