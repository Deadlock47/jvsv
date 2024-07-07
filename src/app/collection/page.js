"use client"
import { useEffect, useState } from "react";
import './style.css'
import { Item } from "../components/Item";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import { code } from "@nextui-org/react";
export default function Page(){

    const [playlistNames , setPlaylistNames] = useState(localStorage.getItem("playlists").split(","));
    const [activeName, setActiveName] = useState("maid")
    const [playlistName , setPlaylistName] = useState("");
    const [currentPlaylistDetails ,setCurrentPlaylistDetails] = useState(localStorage.getItem(activeName).split(","));
    const [ codename , setCodename] = useState("")
    // console.log(localStorage.getItem("playlists").split(','))
    useEffect(()=>{
        setCurrentPlaylistDetails(localStorage.getItem(activeName).split(','))
    },[activeName])
    return (
        <div className="w-screen h-screen overflow-x-hidden bg-neutral-900" >
            <div className="h-[82px] flex flex-row  justify-between pl-10 pr-10 items-center bg-[#2e2e2e]" >
                <div className="flex text-4xl font-bold flex-row gap-2" >
                Collections
                </div>
                <div className=" w-fit flex flex-row gap-2 ">
                    <input type="text" onChange={(e)=>setPlaylistName(e.target.value)}   placeholder="New playlist" className="p-2 pt-1 pb-1 text-black rounded-xl" ></input>
                    <div onClick={()=>{
                        if(!playlistNames.includes(playlistName))
                            {
                                localStorage.setItem("playlists",[...playlistNames,playlistName]);
                                setPlaylistNames(  localStorage.getItem("playlists").split(','))
                                alert("Playlist created ✅✅")
                            }
                        else{
                            alert("playlist already exists")
                        }
                    }} className="bg-yellow-500 text-4xl w-10 h-10 rounded-xl pl-2  font-bold" >
                                    +
                    </div>
                </div>
            </div>
            {/* playlist names */}
            <div className="w-screen h-fit flex gap-4  flex-row p-6 pl-4" >
                {
                    playlistNames?.map((item,index)=>{
                        return item.length ? (
                            <div onClick={()=>setActiveName(item)} key={index} className={` cursor-pointer p-4 pt-2 pb-2 ${activeName == item ? " bg-yellow-600 " : "bg-gray-300"}  rounded-xl xl`} >
                                <span class="hover-underline-animation text-black"> {
                                    item
                                }
                                </span>
                            </div>
                        ) : <></>
                    })
                }
            </div>
            <div className=" w-screen flex pr-8 flex-row items-center justify-between" >
                <div className=" p-4 flex  flex-row gap-2" >

                    <input type="text" onChange={(e)=>{
                        setCodename(e.target.value)
                    }} className="h-10 text-black pl-2 rounded-md" placeholder="Add Codes" ></input>
                    <div
                    onClick={()=>{
                            if(currentPlaylistDetails.includes(codename)|| codename.length == 0)
                                {
                                    alert("Already Added")
                                }
                            else{

                                localStorage.setItem(activeName,[...currentPlaylistDetails,codename])
                                alert("Added successfully")
                                setCurrentPlaylistDetails(localStorage.getItem(activeName))
                            }
                        }}
                        className=" h-max font-bold p-1 rounded-md bg-red-300" >
                        <IoMdAdd size={32} ></IoMdAdd>
                    </div>
                </div>
                <div className="flex flex-row-reverse  gap-3" >
                    <div className="p-3 rounded-md flex h-fit flex-row gap-2 bg-red-700 " >
                        Delete Playlist <MdDelete></MdDelete>
                    </div>
                    <div className="p-3 rounded-md flex h-fit flex-row gap-2 bg-black border-2 border-white " >
                        Edit Playlist <FaEdit></FaEdit>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap flex-row  items-center gap-3 " >

            {
                currentPlaylistDetails?.map((item,index)=>{
                        const code = item.replace('-','');
                        console.log(code)
                        if (code.length)
                        return( 
                            <div className="w-fit h-fit  " >
                                <div
                                onClick={()=>{
                                    let idx = currentPlaylistDetails.indexOf(code,0)
                                    // if(idx > 0) idx-=1;
                                    
                                    setCurrentPlaylistDetails(currentPlaylistDetails.splice(idx,1));
                                    localStorage.setItem(activeName,[...currentPlaylistDetails]);
                                    setCurrentPlaylistDetails(localStorage.getItem(activeName).split(','));
                                    alert("deleted successfully " + code)
                                }}
                                className="relative w-fit h-fit top-14  bg-black rounded-full z-50">
                                    <MdDelete size={32} color="red" ></MdDelete>
                                </div>
                                <Item code={code} key = {index} >
                                </Item>
                            </div>
                            
                        )
                        
                    })
            }
            </div>
        </div>
    )
}