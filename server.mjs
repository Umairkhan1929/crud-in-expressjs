import express from 'express'

const PORT = 3000
const app = express()

 // json middleware
app.use(express.json())

app.get('/api/items', (req, res) => {
    res.status(200).json({ message: 'GET request - Fetching all items' });
})

// app.post('/api/items', (req, res) => {
//     const newItem = req.body;
//     newItem.id = 1;
//     res.status(201).json({ message: 'New item created!', data: newItem })
// })

// // update item
// app.put('/api/items/:id', (req, res) => {
//     const itemId = req.params.id
//     const updatedItem = req.body
//     res.status(200).json({ message: `PUT request - Updating item ${itemId}`, data: updatedItem })
// })

// // delete item
// app.delete('/api/items/:id', (req, res) => {
//     const itemId = req.params.id
//     res.status(200).json({ message: `DELETE request - Deleting item ${itemId}` })
// })

app.listen(PORT, () => {
    console.log(`Server is listening here: http://localhost:${PORT}`)
})