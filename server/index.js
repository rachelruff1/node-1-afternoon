const express = require("express");
const { json } = require("body-parser");

const app = express();

app.use(json());
app.use(express.static('../public/build'))
const {create, read, update, destroy} = require("./controllers/messages_controller")

app.post('/api/messages', create);
app.get('/api/messages', read);
app.put('/api/messages/:id', update);
app.delete('/api/messages/:id', destroy);



const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
