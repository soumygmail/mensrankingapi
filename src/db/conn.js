const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Olympics")
.then(() => {
    console.log("connection successfull")
})
.catch((e)=> {
console.log("not connected successfully")

})