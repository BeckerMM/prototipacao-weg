export default function Header() {

    return (<>
        <div className="h-1/6 bg-gradient-to-r from-sky-500 to-sky-800 flex justify-center items-center">
            <div className="w-11/12 h-full items-center flex justify-center">
                <div className="flex justify-between items-center w-full">
                    <p>LOgo</p>
                    <div className="w-9/12 flex justify-end space-x-7">
                        <div className="w-2/12 flex justify-center hover:bg-sky-700">
                            <p>Link-Page</p>
                        </div>

                        <div className="w-2/12 flex justify-center">
                            <p>Link-Page</p>
                        </div >

                        <div className="w-2/12 flex justify-center">
                            <p>Link-Page</p>
                        </div>

                        <div className="w-2/12 flex justify-center">
                            <p>Link-Page</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </>)
}