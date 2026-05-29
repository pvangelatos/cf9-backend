import app from './app';
import { connectDB } from './utils/db';


const start = async() => {
  
  await connectDB();
  
  const port = process.env.PORT || 3000;
  app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
  })
}

start();
