const db = require('./_database')

async function dropTables(){
  await db.connect()
  await db.query(`DROP TABLE if exists evento CASCADE`)
  await db.query(`DROP TABLE if exists participante CASCADE`)
  await db.query(`DROP TABLE if exists evento_participante CASCADE`)
  await db.end()

  console.log("Tabelas removidas");
}

dropTables()