'use client'
import IconButton from "@components/IconButton";
import Info from "@components/Info";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "@components/Nav";




const Sign = () => {
  const [user,setUser]=useState({
    email:'',
    password:'',
    phone:'',
    firstname:'',
    lastname:'',
     });
const router = useRouter();

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/user/new',{
        method:'POST',
        body:JSON.stringify({
          firstname:user.firstname,
          lastname:user.lastname,
          email:user.email,
          phone:user.phone,
          password:user.password
        })
      });
      if(response.ok){
        router.push('/');
      }
    } catch (error) {
    alert(error);
    }
   

    
   
  };
 
  return (
    <section className="w-full flex-col">
        <Nav/>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-xl font-satoshi font-bold pt-5">Sign Up</h1>
            <h1 className="font-inter text-gray-500">Already have an account?<Link className="text-red-500 font-semibold " href={'/'}>Sign In</Link></h1>
            
            <div className="flex flex-col justify-start mt-8 w-[400px]">
              <form onSubmit={handleSubmit}>
                <div className="flex justify-center items-center gap-3 mb-4">
                  <div className=" flex flex-col">
                <label className="font-semibold font-inter text-lg max-w-full">
            FirstName
            </label>
              <input type="text" 
              value={user.firstname}
              required
              onChange={(e)=>setUser({...user, firstname:e.target.value})}
              className="text-black font-satoshi text-lg mt-2 ml-1 pl-1 w-full bg-gray-100 rounded py-1"
              />
                </div>
                <div className=" flex flex-col">
                <label className="font-semibold font-inter text-lg max-w-full">
            LastName
            </label>
              <input type="text" 
              value={user.lastname}
              required
              onChange={(e)=>setUser({...user,lastname:e.target.value})}
              className="text-black font-satoshi text-lg mt-2 pl-1 w-full mr-1 bg-gray-100 rounded py-1"
              />
                </div>
                </div>
           
               <label className="font-semibold font-inter text-lg max-w-full">
            Email
            </label>
              <input type="email" 
              value={user.email}
              required
              onChange={(e)=>setUser({...user,email:e.target.value})}
              className="text-black font-satoshi text-lg mt-2 mx-2 w-full pl-3 bg-gray-100 rounded py-1"
              />
                <div className="flex justify-center items-center gap-3 mb-4 mt-3">
                  <div className=" flex flex-col">
                <label className="font-semibold font-inter text-lg max-w-full">
            Country
            </label>
              <input type="text" 
              value={'Kenya +254'}
              required
              
              className="text-gray-300 font-satoshi text-lg mt-2 ml-1 pl-2 w-40 bg-gray-100 rounded py-1"
              />
                </div>
                <div className=" flex flex-col">
                <label className="font-semibold font-inter text-lg max-w-full">
            Mobile Number
            </label>
              <input type="text" 
              value={user.phone}
              required
              onChange={(e)=>setUser({...user,phone:e.target.value})}
              className="text-black font-satoshi text-lg mt-2 pl-1 w-full mr-1 bg-gray-100 rounded py-1"
              />
                </div>
                </div>
               <div className=" flex justify-between mx-2">
                <h1 className="font-semibold font-inter">Password</h1>
                <h1 className="font-inter text-sm font-bold text-gray-300">At least 8 characters</h1>
                </div> 
                <input type="password" 
              value={user.password}
              required
            onChange={(e)=>setUser({...user,password:e.target.value})}
              className="text-black font-satoshi text-lg mt-2 pl-2 w-full mr-1 bg-gray-100 rounded py-1"
              />
              <p className="desc">By tapping “Sign Up” or “Continue with Google, Facebook, or Apple,”
                 you agree to DoorDash’s <span className="text-blue-600 underline font-semibold ">Terms and Conditions</span> and <span className="text-blue-600 font-semibold underline">Privacy Policy.</span></p>

              <button
              type="submit"
              className="mt-8 text-center text-white bg-[#EB1700] w-full rounded-full py-3 font-bold font- "
              > Sign Up
              </button>
              </form>
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

export default Sign