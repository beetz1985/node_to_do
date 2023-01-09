

function wrapper(func) {
    return async (req, res, next)=>{
        try {
            func(req, res, next)
        } catch(err) {
            console.log(err)
        }
    }
}

module.exports = wrapper