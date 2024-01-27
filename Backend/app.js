require('dotenv').config();
const express = require(`express`);
const app = express();
const port = 5000 || process.env.PORT;
const cors = require('cors');
const connectdb = require('./db/connect');
const bookRouter = require('./routers/bookRoutes');
const userRouter = require('./routers/userRoutes');
const orderRouter = require('./routers/orderRoutes');

// middleware
app.use(express.json());
app.use('/api/v1/book',bookRouter);
app.use('/api/v1/user',userRouter);
app.use('/api/v1/order',orderRouter);
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET',
    optionsSuccessStatus: 200
}));
app.get('/',async (req,res)=>{
    return res.status({msg:"hiii"});
})
app.get('/api/send-message', (req, res) => {
    const message = 'Hello from the backend!';
    res.json({ message });
});

// const start = async(url)=>{
//     await connectdb(url);
// }

app.listen(port,()=>{
    console.log(`App is listening at ${port}`);
})
// start(process.env.MONGO_URI);