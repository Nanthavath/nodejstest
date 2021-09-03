const express=require('express');

const app=express();
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`Express server is running on port ${port}`);
})

