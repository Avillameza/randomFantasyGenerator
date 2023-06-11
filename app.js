const express = require('express');

const app = express();
const { faker } = require('@faker-js/faker');
// or, if desiring a different locale
// const { fakerDE: faker } = require('@faker-js/faker');

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

app.use('/users',(req, res, next)=>{
  console.log(randomName);
  res.send('<h1>List of Users</h1>'); 
});

// app.use('/',(req, res, next)=>{
//   res.send('<h1>Dummy Response Return!</h1>');
// });

app.listen(3000);