import  express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.mjs';
import blogRouter from './routes/blog-routes.mjs';
const app=express();
app.use(express.json());
app.use("/api/user",router)
app.use("/api/blog",blogRouter)
mongoose.connect('mongodb+srv://eftekheraliefte2000:efte2000@cluster0.xcifaw8.mongodb.net/Blog_app?retryWrites=true&w=majority').then(()=>{
    app.listen(5000);
}).then(()=>{console.log("connected to Database and listening localhost 5000");}).catch((err)=>{
    console.log(err);
})

