const connection = require('./connection');
const { ObjectId } = require('mongodb');
 
const create = async (_id, firstName, lastName, email) => {
  const date = await connection()
  .then((db) => db.collection('users').insertOne({_id, firstName, lastName, email }))
  .then((db) => ({ id: db.insertedId, firstName, lastName, email }));
  return date;
}

const getAllUser = async () => {
  return connection()
  .then((db) => db.collection('users').find().toArray())
  .then((users) => {
    return users;
  });
}

const getById = async (id) => {
  const userData = await connection()
  .then((db) => db.collection('users').findOne(ObjectId(id)));
  if(!userData) return null;
  return userData;
}

const updatedUser = async (id, { firstName, lastName, email, password }) => {
   const newUser = await connection()
  .then((db) => {
  const userId =  new ObjectId(id);
  const newData = { firstName, lastName, email, password };
  return db.collection('users').findOneAndUpdate({ _id: userId }, { $set: newData }, { returnOriginal: false })
  .then((result) => result.value);
});
  if (!newUser) return null;
  return newUser;
  }

const deleteUser = async (id) => {
const idUser = await connection()
.then((db) => db.collection('users').findOneAndDelete({_id: new ObjectId(id)}));
return idUser;
}  

module.exports = {
  create,
  getAllUser,
  getById,
  updatedUser,
  deleteUser,
}