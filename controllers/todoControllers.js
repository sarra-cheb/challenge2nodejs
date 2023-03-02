const Todo = require('../models/todo');

exports.readtodo = async (req, res) => {
  // Todo.find({}).then(function (todos) {
  //   res.send(todos);
  // }).catch((error)=> { res.status(500).send({message:'error server'}) });
  try {
    const todos = await Todo.find()
    res.send(todos)
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}
exports.gettodo = async (req, res) => {
  try {
    const todos = await Todo.findById(req.params.id)
    res.send(todos)
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}

exports.createtodo = async (req, res) => {
  try {
    await Todo.create(req.body)

    res.send({ message: 'ajouter avec succes' });

  } catch (error) {
    res.status(500).send({ message: error.message || 'error serveur ' })
  }
}
exports.modiftodo = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.send({ message: 'updated' })
  } catch (error) {
    res.status(500).send({ message: error.message || 'error serveur ' })
  }
}
exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndRemove(req.params.id)
    res.send({ message: 'deleted successfully' })
  } catch (error) {
    res.status(500).send({ message: error.message || 'error serveur ' })
  }
}