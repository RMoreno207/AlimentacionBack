const queries = {
    "getUserByEmail": "SELECT * FROM users WHERE email=$1",
    "getBusinessByEmail": "SELECT * FROM business WHERE email=$1",
    "createUser": "INSERT INTO users (email,password,name,artesanal,basura0,km0,organico,productosFrescos,productosTemporada,saludable,sostenible,vegano,vegetariano) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",
    "updateUser": "UPDATE users SET email= $1 WHERE name=$2,artesanal=$3,basura0=$4,km0=$5,organico=$6,productosFrescos=$7,productosTemporada=$8,saludable=$9,sostenible=$10,vegano=$11,vegetariano=$12",
    "createBusiness": "INSERT INTO business (email,password,type) VALUES ($1,$2,$3)",
    "getRestaurants": "SELECT * FROM negocios WHERE resotie='Restaurante'",
    "getRestaurantById": "SELECT * FROM negocios WHERE place_id=$1",
    "getStores": "SELECT * FROM negocios WHERE resotie='Tienda'",
}

module.exports = queries;


