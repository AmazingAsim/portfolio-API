let express=require('express');
let app=express();
let port=process.env.PORT || 5000;
let projectrouter=require('./router/projectroute')
let dbconnection=require('./config/config');
let cors= require('cors');
app.use(express.json());
app.use(cors({
    origin:"*",
    methods:['POST','PUT','PATCH','DELETE']
}))




dbconnection.connect()   //connected to database

app.get('/',(req,res)=>{res.send('server is on')})



app.use('/api/project',projectrouter);

app.listen(port,()=>{
    console.log('server is mongo mongo');
})