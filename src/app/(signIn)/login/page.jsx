'use client'
import React, { useState } from 'react';
export default function Page() {

    const [verifyIf, setVerify] = useState(0);



    return (
        <>
            <div className="h-full flex justify-center items-center">
                <div className="h-3/5 w-1/4  flex justify-center items-center bg-gradient-to-r from-sky-500 to-blue-900">
                    {verifyIf == 1 ?
                        <button className="w-1/3 h-2/12 bg-sky-500 hover:bg-sky-300 rounded-xl" onClick={() => setVerify(0)}>Login</button>
                        : <div className='w-5/6 h-5/6 bg-gray-200 rounded-lg flex flex-col justify-center items-center'>

                            <div className='h-1/6 w-full flex justify-center items-center text-5xl font-bold text-blue-900 '>
                                <p className=''>Sign In</p>
                            </div>

                            <div className='h-3/6 w-5/6 flex items-center '>

                                <div className='h-4/6 w-full flex justify-around flex-col '>

                                    <div className=' w-full '>
                                        <p>UserName</p>
                                        <input type="text" className='w-full rounded-sm'/>
                                    </div>

                                    <div className=' w-full'>
                                        <p>Password</p>
                                        <input type="password"  className='w-full rounded-sm'/>
                                        <p className=' text-sm text'>Forgot passwor?</p>
                                    </div>

                                </div>

                            </div>

                            <div className='h-1/6 w-full flex justify-center items-center'>
                                <button className='w-1/3 h-2/6  hover:bg-sky-200 rounded-xl bg-blue-900  text-gray-100'>Login</button>
                            </div>
                        </div>}
                </div>

                <div className="h-3/5 w-1/4 flex justify-center items-center bg-blue-900">

                    {verifyIf == 1 ?
                       <div className='w-5/6 h-5/6 bg-gray-200 rounded-lg flex flex-col justify-center items-center'>

                       <div className='h-1/6 w-full flex justify-center items-center text-5xl font-bold text-blue-900 '>
                           <p className=''>Register</p>
                       </div>

                       <div className='h-3/6 w-5/6 flex items-center '>

                           <div className='h-4/6 w-full flex justify-around flex-col '>

                               <div className=' w-full '>
                                   <p>UserName</p>
                                   <input type="text" className='w-full rounded-sm'/>
                               </div>

                               <div className=' w-full'>
                                   <p>Password</p>
                                   <input type="password"  className='w-full rounded-sm'/>
                               </div>

                               <div className=' w-full'>
                                   <p>Confirm Password</p>
                                   <input type="password"  className='w-full rounded-sm'/>
                               </div>

                           </div>

                       </div>

                       <div className='h-1/6 w-full flex justify-center items-center'>
                           <button className='w-1/3 h-2/6  hover:bg-sky-200 rounded-xl bg-blue-900  text-gray-100'>Login</button>
                       </div>
                   </div> : <button className="w-1/3 h-2/12 bg-sky-500 hover:bg-sky-300 rounded-xl" onClick={() => setVerify(1)}>Register</button>
                    }
                </div>

            </div>
        </>
    )
}