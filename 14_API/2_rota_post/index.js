const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

console.log("Arquivo carregado!");

// GET
app.get("/", (req, res) => {
  res.json({
    message: "Primeira rota criada com sucesso!",
  });
});

// POST
app.post("/createproduct", (req, res) => {
  console.log(req.body);
    const name = req.body.name
    const price = req.body.price

    console.log(name);

    console.log(price);
  
    res.json({message: `O produto ${name} está ${price} reais. `})

});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
