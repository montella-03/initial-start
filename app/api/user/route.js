import User from "@models/User";
import { connectDB } from "@utils/database";
//GET(read)
export const GET = async (request,{email}) => {
try {
    await connectDB();
    const user = await User.findOne({email});
    if(!user) return new Response('user not found',{status:404});
    return new Response(JSON.stringify(user),{status:200});
    
} catch (error) {
    return new Response('failed to fetch data',{status:500})
    
}
}