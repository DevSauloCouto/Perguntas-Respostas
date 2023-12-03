import express from "express";
import { routes } from "./routes";
import bodyParser from "body-parser";
import { DataBase } from "./MySQL/index";

class App{
    
    server: express.Application;

    constructor(){
        this.server = express();
        this.configEjs();
        this.configStatic();
        this.configBodyParser();
        this.Routes();
    }

    configEjs(): void {
        this.server.set("view engine", "ejs");
    }

    configStatic(): void {
        this.server.use(express.static("public"));
    }

    configBodyParser(): void {
        this.server.use(bodyParser.urlencoded({extended: false}));
        this.server.use(bodyParser.json());
    }

    Routes(): void {
        this.server.use(routes);
    }

}

new DataBase().Auth();

new App().server.listen(80, () => console.log("Servidor Typescript rodando"));