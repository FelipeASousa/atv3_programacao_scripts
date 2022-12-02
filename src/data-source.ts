import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
dotenv.config();

const AppDataSource = new DataSource({

    database: "databse_jwt.db",
    type: "sqlite",
    synchronize: false,
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"], 
    subscribers: [],
    maxQueryExecutionTime: 2000 // 2 seg.
});

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source inicializado!")
    })
    .catch((e) => {
        console.error("Erro na inicialização do Data Source:", e)
    });

export default AppDataSource;