const mongoose = require('mongoose')

// DO NOT SAVE YOUR PASSWORD TO GITHUB!!




const creditSchema = new mongoose.Schema({
  date: String,
  credits: [{
    id: Number,
    credit: Number
  }]
})

creditSchema.set('toJSON', {
  transform: (document, retunrValue) => {
    returnedObject.id =  returnValue._id.toString()
    delete returnValue._id
    delete returnValue.__v
  }
})   

mongoose.models = {}

const Credit = mongoose.model('Credit', creditSchema)


 

export default Credit;