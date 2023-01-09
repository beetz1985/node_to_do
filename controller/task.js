const Task = require('../model/schema')
const wrapper = require('../middleware/async')


const getAllItems = wrapper(async (req, res, next) => {
    const result = await Task.find({})
    res.json(result)
})

const postToAllItems = wrapper(async (req, res, next) => {
    const data = req.body
    const result = await Task.create(data)
    res.json(result)
})

const getSingleItem = wrapper(async (req, res, next) => {
    const {id} = req.params
    const result = await Task.findOne({_id:id})
    res.json(result)
})

const deleteSingleItem = wrapper(async (req, res, next) => {
    const {id} = req.params
    const result = await Task.findOneAndDelete({_id:id})
    res.json(result)
})

const editSingleItem = wrapper(async (req, res, next) => {
    const {id} = req.params
    const result = Task.findOneAndUpdate({_id:id}, req.body, {
        new:true,
        runValidators: true
    })
    res.json(result)
})


module.exports = {
    getAllItems,
    postToAllItems,
    getSingleItem,
    deleteSingleItem,
    editSingleItem
}