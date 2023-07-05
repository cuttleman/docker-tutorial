import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
  port: 5432,
  host: process.env.DB_HOST,
  username: "test",
  password: "test",
  database: "test",
});
