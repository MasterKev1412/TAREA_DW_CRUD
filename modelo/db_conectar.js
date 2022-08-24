import mysql from 'mysql2' 
var conectar = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'Sql2022*',
      database : 'db_empresa'
  });

  conectar.connect(function(err) {
      if (err) {
          console.error('Error en la conexion: ' + err.stack);
      return;
    }
 
        console.log('conexion exitosa ID: ' + conectar.threadId);
  });

  export {conectar}