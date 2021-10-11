const connection = require("./connection");
const { ObjectId } = require('mongodb');

const getAll = async () => {
return connection()
.then((db) => db.collection('books').find().toArray())
.then((books) => {
 return books
});
}

const getByAuthorId = async (author_id) => {
const author = await connection()
.then((db) => db.collection('books').findOne({ author_id: Number(author_id).toArray() }))
return author;
};


const findById = async (id) => {
  const authorData = await connection()
    .then((db) => db.collection('books').findOne(ObjectId(id)));
      if(!authorData) return null;
       return authorData;
};


const isValid = (title, author_id) => {
  if (!title) return false;
  if (!author_id) return false;
  return true;
};

const create = async (title, author_id) => {
 await connection()
 .then((db) => db.collection('books').insertOne({ title, author_id }));
};

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create,
};
