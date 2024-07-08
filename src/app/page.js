"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { jav_codes } from "./notiondb";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Item } from "./components/Item";
import { useRef } from "react";

export default function Home() {
  // console.log(myPage)
  const isServer = typeof window === 'undefined'
  // const inputRef = useRef()
  // localStorage.setItem("codeList",jav_codes);
  const [codelist , setCodelist] = useState( !isServer ? localStorage.getItem("codeList").split(","):[])
  const [codeid , setCodeid] = useState("")
  useEffect(()=>{
   
  },[])
  return (
   <div className="w-screen h-screen overflow-x-hidden bg-neutral-900" >
      <div className="h-[82px] flex flex-row  justify-between pl-10 pr-10 items-center bg-[#2e2e2e]" >
        <div className="flex flex-row gap-2" >
          <input type="text" className="bg-neutral-900 rounded-lg  border-white border-1 p-3 pt-2 pb-2 w-96 " placeholder="Enter the code" ></input>
          <div 
          // onClick={()=>{
          //   // console.log(inputRef.current.value)
          //   const codename = codeid.toUpperCase()
          //   if(codelist.includes(codename))
          //   {
          //     alert("jav already added")
          //     return 0;
          //   }
          //   if(!isServer) localStorage.setItem("codeList",[codename,...codelist]);
          //   setCodelist( !isServer ? localStorage.getItem("codeList").split(","):[]);
          //   setCodeid("");
          //   window.location.reload()
          // }} 
          className="bg-yellow-700  h-full pt-2 pb-2 pl-2 pr-2 mt-0  w-fit  rounded-lg ml-4 ">
            Search
          </div>
        </div>
        <div className="hover:underline" >
        <Link href={{
                    pathname:`/collection`
  
                } } >collection</Link>
        </div>
      </div>
      <div className=" flex flex-wrap flex-row p-5 items-center gap-3  " > 
      {/* <Item code={"ure070"}></Item> */}
      {
        codelist?.map((items,index)=>{
          return <Item key={index} code={items}></Item>
        })
      }
          
      </div>
   </div>
  );
}
