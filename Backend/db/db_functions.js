module.exports = {
  getAll: function (db, sql, params, response) {
    db.all(sql, params, (error, result) => {
      if (error) {
        console.log(error);
        response.status(500).send({
          error: 'Pending Implementations'
        })
      } 
      response.status(200).send(result)
    })
  },

  get: function (db, sql, params, response) {
    db.get(sql, params, (error, result) => {
      if (error) {
        console.log(error);
        response.status(500).send({
          error: 'Pending Implementations'
        })
      }
      response.status(200).send(result) 
    })
  },

  run: function (db, sql, params, response) {
    db.run(sql, params, (error, result) => {
      if (error) {
        console.log(error);
        response.status(500).send({
          error: 'Pending Implementations'
        });
      }
      response.status(200).send(result)
    })   
  }
};