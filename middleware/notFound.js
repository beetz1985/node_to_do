

function notFound(req, res) {
    res.status(404).json({msg: "Something Went Wrong"})
}

module.exports = notFound