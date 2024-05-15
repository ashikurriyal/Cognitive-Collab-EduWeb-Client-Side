/* import { Link } from "react-router-dom"; */
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


const ViewAssignment = () => {
    return (
        <div className="max-w-3xl mx-auto card shadow-xl mb-12 px-10 border-2 border-gray-300 bg-stone-100 flex flex-col gap-6">
            {/* <div className="flex justify-center"><img className="rounded-md shadow-lg " src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></div> */}
            {/* <div className="card-body flex flex-col gap-5">
                <h2 className="card-title">Assignment Title</h2>
                <hr className="border-gray-300" />
                <div className="flex">
                    <p className="text-gray-500">Marks: </p>
                    <p className="text-gray-500">Difficulty Level: </p>
                </div>
                <hr className="border-gray-300" />
                <div className="flex items-center gap-5">
                    Actions:
                    <button className="btn btn-sm border-green-500 hover:bg-gradient-to-r from-green-500  to-green-600">Update</button>
                    <button className="btn btn-sm border-red-500 hover:bg-gradient-to-r from-red-500  to-red-600">Delete</button>
                </div>

                <div className="w-full">
                    <Link to="/viewAssignment"><button className="btn w-full border-2 border-black hover:bg-black hover:text-white">
                        <p className="">View Details</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 hover:text-white h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    </Link>


                </div>

            </div> */}

            <div className="card-body flex flex-col items-center">
                <h2 className="card-title ">Assignment Title</h2>
                <div className="flex flex-col items-center">
                    <p className="text-gray-500">Marks: </p>
                    <p className="text-gray-500">Difficulty Level: </p>

                </div>

            </div>
            <hr className=" border-gray-300" />
            <div className="">
                <h2 className="text-lg font-medium ">Assignment Description: </h2>
                <p>Assignment Details</p>

            </div>

            <div className="flex justify-center"><img className="rounded-md shadow-lg lg:max-w-xl" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></div>

            <div className="flex justify-center mb-8">
                <button className="btn btn-wide border-green-500 hover:bg-gradient-to-r from-green-500  to-green-600"><FaAngleRight /> Take Assignment <FaAngleLeft /></button>
            </div>
        </div>
    );
};

export default ViewAssignment;