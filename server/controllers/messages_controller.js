const messages = [];
let id = 0;

const create = ( req, res ) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send( messages );
  }

const read = (req, res, next) => {
    res.status(200).json(messages)
}

const update = (req, res, next) => {
    const {text} = req.body;
    const updateID = req.params.id;
    let messageIndex = messages.findIndex( message => message.id == updateID)
    let message = messages [ messageIndex ];

        messages [messageIndex ] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).json(messages)
}
const destroy = (req, res, next) => {
    const deleteID = req.params.id;
    let messageID = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageID, 1);
    res.status(200).json(messages);
}


module.exports = {
    create, read, update, destroy
}