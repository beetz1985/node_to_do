
const express = require('express')
const router = express.Router()

const {
    getAllItems,
    postToAllItems,
    getSingleItem,
    deleteSingleItem,
    editSingleItem
} = require('../controller/task')


router.get('/', getAllItems)
router.post('/', postToAllItems)
router.get('/:id', getSingleItem)
router.delete('/:id', deleteSingleItem)
router.put('/:id', editSingleItem)


module.exports = router
