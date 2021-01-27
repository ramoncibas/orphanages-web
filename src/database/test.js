const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db =>{
    //inserting data into the table
    await saveOrphanage(db,{    
        lat: "-27.2226333",
        lng: "-49.6455874",
        name: "Lar das Crianças",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "11997315604",
        images: [
            "https://images.unsplash.com/photo-1611153394979-3a717e750c5f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1519&q=80",
            "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",

            "https://images.unsplash.com/photo-1451481454041-104482d8e284?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "https://images.unsplash.com/photo-1440288736878-766bd5839edb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",

        ].toString(),
        instructions: "Venha como se sentir a vontade e traga mito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até 18hr",
        open_on_weekends: "1"
    });

    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages)
})