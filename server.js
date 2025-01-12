import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

/*app.use(cors({
  origin: 'http://localhost:3000',  // Permite apenas o front-end no localhost:3000
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite apenas esses métodos
  allowedHeaders: ['Content-Type', 'Authorization'] // Permite apenas esses cabeçalhos
}))*/


app.post('/usuarios', async (req,res)=>{
  
  await prisma.user.create({
    data:{
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(req.body)
})

app.put('/usuarios/:id', async (req,res)=>{
  
  await prisma.user.update({
    where:{
      id: req.params.id 
    },
    data:{
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(req.body)
})


app.get('/usuarios', async (req, res) => {
    let users;

    if (req.query.name) {
      users = await prisma.user.findMany({
        where: {
          name: req.query.name
        }
      });
    } else {
      users = await prisma.user.findMany();
    }
    res.status(200).json(users);
});


app.delete('/usuarios/:id', async( req, res)=>{
  await prisma.user.delete({
    where: { 
      id: req.params.id
    }
  })

  res.status(200).json({message: "usuario foi de vasco"})

})

app.listen(3000)