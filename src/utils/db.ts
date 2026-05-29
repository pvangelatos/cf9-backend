import mongoose from 'mongoose';
import dns from 'dns';
//import dotenv from 'dotenv';

//dotenv.config();

const MONGO_URI = process.env.MONGO_URI || '';

export const connectDB = async () => {
    // Force Node.js to use public DNS servers (Google and Cloudflare)
    // This bypasses local network routers that actively refuse SRV queries
    dns.setServers(['8.8.8.8', '1.1.1.1']);

    try {
        // Connect enforcing IPv4 in case of IPv6 routing issues
        await mongoose.connect(MONGO_URI, { family: 4 });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    
    }
}