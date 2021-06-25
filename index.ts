import obterAulas from "./logic/obterAulas.ts";

const aulas = await obterAulas();

const conteudo = aulas.map(aula => `${aula.id} - ${aula.name}`).join("\n");
Deno.writeTextFileSync('./aula.txt', conteudo);