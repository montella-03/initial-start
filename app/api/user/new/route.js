import User from "@models/user";
import { connectDB } from "@utils/database";

export const POST = async (req) => {
    const { firstname,lastname,email,phone,password } = await req.json();

    try {
        await connectDB();
        const newUser = new User({ firstname,lastname,email,phone,password });

        await newUser.save();
        return new Response(JSON.stringify(newUser), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to create a user", { status: 500 });
    }
}