"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import Video from 'next-video'
import Link from 'next/link'



export const Item = ({code})=>{
    const [loading,setLoading] = useState(true)
    const [javData , setJavData] = useState(JSON.parse(localStorage.getItem(code))||"")
  
  
    const router = useRouter()
    useEffect( ()=>{
      
      async function getInfo(code)
      {
        
  
          try{
            setLoading(false)
            const res = await fetch(`http://localhost:8080/jav/search?code=${code}&provider=r18`);
            const data = await res.json();
            setJavData(data);
            // lsJavData[code] = JSON.stringify(data);
            localStorage.setItem(code,JSON.stringify(data));
            setJavData(data)
            // console.log(javData)
            setLoading(true)
            // return data;
        }
        catch (error) {
          console.log("error aa gaya")
          setLoading(true)
        }
      
      }
      // console.log(localStorage.getItem(code));
      // console.log(javData)
      if(!javData)
        {
          getInfo(code) 
        }
        
  
     
    },[])
    return (
      
        loading ? (
        <div title={javData?.title} 
        className=" group transition-all  w-[350px] h-[230px] mt-10  shadow-[0px_0px_5px_3px_#00000024]  shadow-slate-600  bg-red-400  rounded-2xl" >
          <div className="w-full h-full z-30  relative">
            <div className="bg-yellow-300 -top-2 overflow-hidden z-50 text-black font-semibold w-fit h-fit pl-1 pr-1 -translate-x-1/2 -right-12 text-nowrap rounded-2xl absolute"> 
                <Link href={{
                    pathname:`/${code}`
  
                } } >{code}</Link>
            </div>
            <Image
              src={ javData?.poster ? javData?.poster : "https://t3.ftcdn.net/jpg/01/38/48/40/360_F_138484065_1enzXuW8NlkppNxSv4hVUrYoeF8qgoeY.jpg"}
              fill alt="Not Available"
              className="w-full h-full  object-cover rounded-lg overflow-hidden object-center"
            />        
            <div className=" group-hover:hidden transition w-full font-semibold ease-in-out hover:text-transparent z-40 text-center content-center bottom-0 p-3  bg-gradient-to-t from-black via-[#000000ce] to-[#00000000] absolute" >
              <p className="">{
              javData?.title ? javData?.title?.length>80 ? javData?.title?.slice(0,80) : javData?.title : "Not Available" }</p>
            </div>
          </div>
      </div>
        ) :
        <div 
        className=" group transition-all  w-[350px] h-[230px] mt-10  shadow-[0px_0px_5px_3px_#00000024]  shadow-slate-600 flex justify-center items-center  bg-transparent  rounded-2xl" 
        >
          <div className="w-fit h-fit flex justify-center items-center  ">
  
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 auto auto"><circle fill="#817d7d" stroke="#817d7d" stroke-width="2" r="6" cx="50%" cy="50%"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#817d7d" stroke="#817d7d" stroke-width="2" r="6" cx="40%" cy="50%"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#817d7d" stroke="#817d7d" stroke-width="2" r="6" cx="60%" cy="50%"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
        </div>
          </div>
    )
  }