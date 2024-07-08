"use client"
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import './style.css';
import Video from 'next-video'
import SliderImages from './components/SliderImages';
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

import { IoMdHome } from "react-icons/io";
import Link from 'next/link'

export default function page({params , name}) {
  const paramsName = usePathname()
  const searchParams = useSearchParams();

  const isServer = typeof window === 'undefined'
  // const arr = searchParams.getAll("data");
  // console.log(paramsName.slice(1))
  const [codeData , setCodeData] = useState( !isServer ? JSON.parse(localStorage.getItem(paramsName.slice(1))):"");
  const [tags , setTags] = useState([]);
  const [poster,setPoster] = useState("");
  const [screenshots , setScreenshots] = useState([])
  const [actress , setActress] = useState([]);
  const [playlistNames , setPlaylistNames] = useState(!isServer ? localStorage.getItem("playlists")?.split(','): [])
  const [showPlaylist , setShowPlaylist] = useState(false)

  

  useEffect(()=>{
    
    // document.title(codeData["id"])
    const decodedData = JSON.parse( !isServer ? localStorage.getItem(paramsName.slice(1)):"");
    console.log(decodedData)
    setCodeData(decodedData)
    setScreenshots(decodedData?.screenshots)
    setActress(decodedData?.actress);
    // console.log(decodedData?.screenshots)
    setTags(decodedData?.tags)
    setPoster(decodedData?.poster)
  },[codeData])
    // console.log(searchParams.get("actress"))
  const url = "https://cc3001.dmm.co.jp/litevideo/freepv/d/das/dass00388/dass00388hhb.mp4";
  return (
    <div className='max-w-screen overflow-x-hidden overflow-y-scroll scrollbar-hide flex flex-col items-center   h-screen bg-neutral-900' >
          <div className='w-screen flex flex-row justify-between  p-4 bg-black' >
            <Link href={{
              pathname : '/'
            }} className='bg-yellow-700 rounded-xl w-fit p-2' >
                <IoMdHome size={24} />
            </Link>
            <div className='p-2 cursor-pointer bg-blue-700 text-nowrap rounded-xl ' >
               <div 
               onClick={()=>{
                setShowPlaylist(!showPlaylist)
               }}
               className='w-32 flex flex-row justify-between items-center' >
                Playlist {showPlaylist ? <BiSolidUpArrow /> : <BiSolidDownArrow/>}

               </div>
               <div className='bg-black absolute top-14 right-0 p-2 rounded-lg flex gap-3 flex-col h-auto w-64' >
                   {
                     showPlaylist && playlistNames.map((item,key)=>{
                        const codelist = localStorage.getItem(item)?.split(',');

                        return ( item &&
                          <div className='bg-gray-700 p-2 rounded-lg cursor-pointer  ' onClick={()=>{
                            if(codelist.includes(codeData["id"]))
                              {
                                alert(`already added to ${item}`)
                  
                              }
                            else{

                              if(!isServer)localStorage.setItem(item,[...codelist , codeData["id"]])
                              alert(`added to ${item} successfully`)
                            }
                          }} >
                          {item} {
                            codelist?.includes(codeData["id"]) ? "✅" : ""
                          }
                        </div>
                        )
                      })

                   }
               </div>
            </div>
          </div>
          <div className='w-screen ' >

          </div>
          <div className=' h-[calc(70%)]  w-[calc(60%)]  border-white rounded-xl  flex justify-center mt-10' >
          <Video poster={poster} src={codeData["preview"]}
            className="rounded-lg task-video "
          ></Video>
              {/* <Image src={poster}  
                 className="w-auto  h-auto    object-cover rounded-lg overflow-hidden object-center"
                  width={1080} height={1250} alt={"poster"} quality={100} loader={``}
              ></Image> */}
         </div>
        <div className=' pl-60 pr-60 mb-20 pt-10 w-screen '>
          <p className='font-semibold text-xl text-center ' >
            {
             "[" + codeData["id"] + "] " + codeData["title"]
            }
          </p>
        </div>
        <div className='w-screen pl-60 pr-60 flex flex-wrap justify-center items-center flex-row gap-4' >
           
            {
              tags.map((item,index)=>{
                  return <div key={index} className='bg-slate-600 w-auto  h-fit text-nowrap text-white pl-2 pr-2 pt-1 pb-1 rounded-lg' >
                            {
                              item
                            }
                          </div>
              })
            }
        </div>
        {/* Screenshots */}
        <div className='w-screen pl-60 pr-60 h-fit mt-4' >
            <SliderImages images={screenshots} ></SliderImages>
        </div>
        <div className=' pl-60 pr-60 mb-20 pt-10 w-screen' >
          <p className='text-3xl'>Actress</p>
          <div className='flex flex-row gap-10 mt-10'>

            { actress.map((item,index)=>
              <div key={index} className='w-fit flex justify-center items-center flex-col gap-2  h-fit  '>
                <div className='w-fit h-fit rounded-2xl overflow-hidden  ' >
                    <Image src={item?.image}  className='w-auto  h-auto object-cover rounded-lg overflow-hidden object-center' width={200} height={200} alt={"actress image"} ></Image>
                </div>
                <div>
                    {
                      item?.name
                    }
                </div>
              </div>
                  )
            }
            </div>
        </div>
    </div>
  )
}
