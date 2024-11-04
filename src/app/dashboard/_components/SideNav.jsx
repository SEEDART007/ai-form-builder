'use client'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { AntennaIcon, ArrowUpRightFromSquareIcon, CommandIcon, LibraryBig } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {
  const path = usePathname()
  const menuList=[
    {
      id:1,
      name:'MY FORM',
      icon:LibraryBig,
      path:'/dashboard'
    },
    {
      id:2,
      name:'Responses',
      icon:CommandIcon,
      path:'/dashboard/responses'
    },
    {
      id:3,
      name:'Analytics',
      icon:AntennaIcon,
      path:'/dashboard/analytics'
    },
    {
      id:4,
      name:'Upgrade',
      icon:ArrowUpRightFromSquareIcon,
      path:'/dashboard/upgrade'
    },
  ]
  useEffect(()=>{
console.log(path)
  },[path])
  return (
    <div className='h-screen shadow-md border '>
      <div className='m-5 space-y-5 underline'>
        {
          menuList.map((el)=>(
            <h2 className={`flex items-center p-3 justify-center gap-3 hover:rounded-lg hover:shadow-lg font-semibold hover:bg-red-300 hover:text-black hover:font-bold ${path==el.path&& 'bg-red-300 rounded-lg shadow-lg'}`} key={el.id}>
              <el.icon/>
              {el.name}
            </h2>
          ))
        }
      </div>
      <div className='fixed bottom-10 p-6 w-64 '>
        <Button className='bg-red-400 w-full text-black font-bold hover:bg-red-300 '>+ Create Form</Button>
        <div className='w-52 mt-4'>
          <Progress className='text-red-500 w-full' value={43}/>
        </div>
        <h2 className='text-sm mt-2 text-slate-600 font-medium'>2 out of 3 created</h2>
      </div>
    </div>
  )
}

export default SideNav