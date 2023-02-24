const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://guilhermesegura26:<password>@node-express.w7y62ih.mongodb.net/task-manager?retryWrites=true&w=majority'


mongoose.connect(connectionString).then(()=>console.log('Connected to the db')).catch((err)=>console.log(err))