'use client'
export default function Page() {

const verifyIf = 0;

   function verify(){
         if (verifyIf == 0) {
              return(<>
              
              </>)
         }else{
              return (<button className="w-1/3 h-2/12 bg-sky-500 hover:bg-sky-300 rounded-xl">Login</button>);
         }
   }
   
    return (
        <>
        <div className="h-full flex justify-center items-center">
            <div className="h-3/5 w-1/4  flex justify-center items-center bg-gradient-to-r from-sky-500 to-blue-900">
            {verifyIf ==0?
                <button className="w-1/3 h-2/12 bg-sky-500 hover:bg-sky-300 rounded-xl" onClick={(e)=>{ verifyIf = 1;}}>Login</button>
                : <div>

                </div>}
            </div>
            <div className="h-3/5 w-1/4 flex justify-center items-center bg-blue-900">
           {verify()}
            </div>

        </div>
        </>
    )
}