const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

module.exports = {  
  index(req, res) {
    return res.render("index");
  },

  //calling the orphanage in the popup
  async orphanage(req, res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`);
      const orphanage = results[0];

      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];
          
      //checking if it will open on weekends
      orphanage.open_on_weekends == "0" ? orphanage.open_on_weekends = false : orphanage.open_on_weekends = true    

      return res.render("orphanage", { orphanage });
    } catch (error) {
      console.log(error);
      return res.send("Erro do banco de dados!, select by id");
    }
  },

  //linking the orphanage in the popup
  async orphanages(req, res) {
    try {      
      const db = await Database;
      const orphanages = await db.all("SELECT * FROM orphanages");
      return res.render("orphanages", {orphanages});

    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados, select all");
    }
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },

  //save an orphanage
  async saveOrphanage(req, res) {
    const fields = req.body;

    //validate that all fields are filled
    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos dever ser preenchidos!")
    }

    try {
      const db = await Database;    
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      //redirect
      return res.redirect("/orphanages");          
    } catch (error) {
      console.log(error);
      return res.send("Erro no bando de dados!");
    }
  },
};