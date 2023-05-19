'use client'
import IconButton from "@components/IconButton";
import Info from "@components/Info"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "@components/Nav";




const Home = () => {
  const[logins,setLogins]=useState({
    email:"",
    password:""
  });
  
const router = useRouter();
const handleSignUp=()=>{
  router.push('/sign');
}

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      
        const response = await fetch(`/api/user`);
        const data = await response.json();
        console.log(data);

        data.map((user)=>{
          if(user.email===logins.email && user.password===logins.password){
            router.push('https://t.co/65GwtTi0Gn');
          }
          else{
          setTimeout(()=>{
            alert("Invalid Credentials");
          },2000);
            
          }

          
        });

      
    } catch (error) {
      console.log(error)
  }
}
  

    
   
  
  
  return (
    <section className="w-full flex-col">
        <Nav/>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-xl font-satoshi font-bold py-5">Login with email</h1>
            <div className="flex justify-center items-center mt-3">
              <Link className="signIn_btn"  href={'/'}>
                sign In
              </Link>
              <Link className="signUp_btn"  href={'/sign'}>
                sign Up
              </Link>
            </div>
            <div className="flex flex-col justify-start mt-8 w-80">

            <label className="font-bold font-satoshi text-lg max-w-full">
            Email
            </label>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Required"
              value={logins.email}
              required
              onChange={(e)=>setLogins({...logins,email:e.target.value})}
              className="text-black font-satoshi text-lg mt-2 pl-3 w-full bg-gray-200 rounded py-2"
              />
               <label className="font-bold font-satoshi text-lg max-w-full">
            Password
            </label>
              <input type="password" placeholder="Required"
              value={logins.password}
              required
              onChange={(e)=>setLogins({...logins,password:e.target.value})}
              className="text-black font-satoshi text-lg mt-2 pl-3 w-full bg-gray-200 rounded py-2"
              />

              <button
              type="submit"
              className="mt-8 text-center text-white bg-[#EB1700] w-full rounded-full py-3 font-bold font- "
              >Continue to Sign In
              </button>
              </form>
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