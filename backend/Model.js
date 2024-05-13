const mongoose=require("mongoose")

const Order=mongoose.Schema(
    {
        "id": {
          "type": String,
          "required": true
        },
        "category": {
          "type": String,
          "required": true
        },
        "name": {
          "type": String,
          "required": true
        },
        "price": {
          "type": Number,
          "required": true
        },
        "url": {
          "type": String,
          "required": true
        },
        "table": {
          "type": Number,
          "required": true
        },
        "customername": {
          "type": String,
          "required": true
        },
        "customermobile": {
          "type": String,
          "required": true
        }
      }
      
)

module.exports=mongoose.model("orders",Order)