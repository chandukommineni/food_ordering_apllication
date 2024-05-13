const express=require("express")
const mongoose=require("mongoose")
const orders=require("./Model")
const bodyParser = require('body-parser');
const app=express()

app.listen(3000,()=>{ console.log("server is running")})

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://chandu:8500@orders.xsbqmon.mongodb.net/?retryWrites=true&w=majority&appName=Orders").then(()=>console.log("database connetion established")).catch((err)=>console.log(err))

app.post('/orders', async (req, res) => {
    try {
      const order = req.body;
      const insertedOrders = await orders.insertMany(order);
      res.status(201).json(insertedOrders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.get('/orders',async(req,res) => {
   try{
    const order= await orders.find();
    return res.json(order)
   }
   catch(err){
    console.log(err)
   }
});
app.delete("/orders", async (req, res) => {
  try {
    console.log("Deleting all orders...");
    await orders.deleteMany({});
    console.log("All orders deleted successfully");
    res.status(200).json({ message: "All orders deleted successfully" });
  } catch (err) {
    console.error("Error deleting orders:", err);
    res.status(500).json({ error: "An error occurred while deleting orders" });
  }
});


// DELETE data by ID endpoint
app.delete('/orders/:id', async (req, res) => {
  const orderId = req.params.id;
  try {
    const deletedOrder = await orders.findOneAndDelete({ id: orderId });
    if (deletedOrder) {
      res.status(200).json({ message: `Order with ID ${orderId} deleted successfully` });
    } else {
      res.status(404).json({ message: `Order with ID ${orderId} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});







  