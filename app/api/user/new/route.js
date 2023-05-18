import User from "@models/User";
import { connectDB } from "@utils/database";

export const POST = async (request) => {
    const { firstname,lastname,email,phone,password } = await request.json();

    try {
        await connectDB();
        const newUser = new User({ firstname,lastname,email,phone,password });

        await newUser.save();
        return new Response(JSON.stringify(newUser), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a user", { status: 500 });
    }
}