"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function SliderImages({images}) {
    // const [images , setImages] = useState([])
    // useEffect(()=>{
        // setImages(images);
    // },[])
    const hqimages = images?.map(function(item){return item.includes("jp-") ?  item : item.replace("-","jp-") });
    const [currentImageidx , setCurrentImageidx]  = useState(0);
    const [displayScreen , setDisplayScreen] = useState(false)
    // console.log(hqimages)
    document.addEventListener("keyup",(e)=>{
        console.log(e.key ) 
        if(e.key == "ArrowRight")
            setCurrentImageidx(Math.min(images.length-1,currentImageidx + 1));
        if(e.key == "ArrowLeft")
            setCurrentImageidx(Math.max(0,currentImageidx - 1));
        console.log(currentImageidx)
    })

    // console.log(event.key)
    useEffect(()=>{

    },[])
  return (
    <div className='mt-10 text-3xl flex justify-center flex-col items-center  w-full h-auto' >
        <div className=' w-full'>

        Screenshots
        </div>
        <div className={`absolute ${displayScreen ? "" : "hidden"}      left-0 top-0 bg-[#000000da] flex justify-between p-10 items-center w-screen h-screen`}>
            <div onClick={()=>{
                setDisplayScreen(!displayScreen)
            }}  className={`absolute top-5 left-5 cursor-pointer bg-white p-3 rounded-lg w-fit h-fit text-black`} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            {/* /* // left arrow */ }
            <div
            onClick={()=>{
                setCurrentImageidx(Math.max(0,currentImageidx - 1));
               
            }} 
            
            className={`${currentImageidx == 0 ? "bg-gray-400  pointer-events-none ": "bg-white"} cursor-pointer  p-3 rounded-lg w-fit h-fit text-black`} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
            </div> 
            {/* /* image center */ }
             <div className=' h-[calc(98%)] flex justify-center '>
                    <div className='absolute top-3 text-[calc(17px)] ' >
                        ({currentImageidx+1}/{images.length})
                    </div>
                    <Image src={hqimages[currentImageidx]} 
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto',borderRadius:'10px' }}
                   //  fill      
                   quality={100}      
                   alt='ffffff'  
                   loading='eager'
                   priority={true}
                   unoptimized={false}
                    ></Image>
            </div> 
            {/* /* right arrow */ }
             <div
              onClick={()=>{
                setCurrentImageidx(Math.min(images.length-1,currentImageidx + 1));
                
            }}  
             
            className={`${currentImageidx == images.length - 1 ? "bg-gray-400 pointer-events-none ": "bg-white"}  p-3 rounded-lg cursor-pointer w-fit h-fit text-black`} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </div>
        </div>  
        
        <div className='flex mt-10 flex-row items-center gap-3 flex-wrap' >
            {
                hqimages.map((item,key)=>{
                    return (
                        <div key={key} onClick={()=>{
                            setCurrentImageidx(key)
                            setDisplayScreen(!displayScreen)
                            }} className={` max-h-32   bg-red-400 flex justify-center rounded-lg overflow-hidden  `} >
                            <Image
                             src={item} 
                             width={0}
                             height={0}
                             sizes="12vw"
                             style={{ width: '100%', height: 'auto' }}
                            //  fill            
                            alt='ffffff'                 
                             >

                            </Image>
                        </div>
                    )
                })
            }
        </div>
        
    </div>
  )
}
