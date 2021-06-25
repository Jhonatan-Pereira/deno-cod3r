import { Client } from "https://deno.land/x/mysql@v2.9.0/mod.ts";
import Aula from "../model/Aula.ts";

export default async (): Promise<Aula[]> => {
  const client = await new Client().connect({
    hostname: "127.0.0.1",
    username: "root",
    password: "12345",
    db: "db-deno"
  });

  const registros = await client.query("select id, name from lessons");

  const aulas: Aula[] = registros.map((reg: Aula): Aula => {
    return {
      id: reg.id,
      name: reg.name
    }
  })

  return aulas;
}