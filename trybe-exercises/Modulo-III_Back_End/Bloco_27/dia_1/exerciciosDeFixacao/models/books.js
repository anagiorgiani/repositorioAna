const connection = require("./conection");

const getAll = async () => {
  const [books] = await connection.execute(
    "SELECT * from model_example.books;"
  );
  return books;
};

const getByAuthorId = async (author_id) => {
  const [books] = await connection.execute(
    "SELECT * from model_example.books WHERE author_id=?;",
    [author_id]
  );
  return books;
};

const findById = async (id) => {
  const [books] = await connection.execute(
    "SELECT * from model_example.books WHERE id=?;",
    [id]
  );
  return books;
};

const isValid = (title, author_id) => {
  if (!title || title.length < 3) return false;
  if (!author_id) return false;
  return true;
};

const create = async (title, author_id) => {
  const [books] = await connection.execute(
    "INSERT INTO model_example.books (title, author_id) VALUES (?,?)",
    [title, author_id]
  );
  return books;
};

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create,
};
