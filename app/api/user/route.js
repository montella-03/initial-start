import User from "@models/user";
import { connectDB } from "@utils/database";
//GET(read)
export const GET = async (request) => {
try {
    await connectDB();
    const user = await User.find();
    if(!user) return new Response('user not found',{status:404});
    return new Response(JSON.stringify(user),{status:200});
    
} catch (error) {
    console.log(error);
    return new Response('failed to fetch data',{status:500})
    
}
}