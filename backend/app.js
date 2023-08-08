//http ka kaam tabhi tak hai jab tak express nahi hai, express install krne ke baad
//ab sirf port value ki need hai mujhe bas! 

const express = require('express');
const app = express()
const port = 5000;
const mongoose = require("mongoose");
const { mongoUrl } = require("./keys");
const cors = require("cors");

app.use(cors())
require('./models/model')
require('./models/post')
app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/createPost"))
app.use(require("./routes/user"))
mongoose.connect(mongoUrl);

//basically data fetch api ke liye baat itni si hi hoti hai ki maine ek data format create kiya
//or phir use export krke app file me import kr liya jisse use json format me present kr saku kisi
//bhi route ke action par!

mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongo")
})

mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})


app.listen(port, () => {
    console.log("server is running on port" + " " + port)

})