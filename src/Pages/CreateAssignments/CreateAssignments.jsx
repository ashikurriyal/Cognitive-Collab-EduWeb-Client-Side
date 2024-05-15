import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Swal from "sweetalert2";


const CreateAssignments = () => {

    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());

    const handleCreateAssignments = event => {
        event.preventDefault();
        const form = event.target;
        const assignmentTitle = form.assignmentTitle.value;
        const marks = form.marks.value;
        const difficultyLevel = form.difficultyLevel.value;
        const image = form.image.value;
        const assignmentDescription = form.assignmentDescription.value;
        const dueDate = form.dueDate.value;
        const email = form.email.value;

        const assignments = { assignmentTitle, marks, difficultyLevel, image, assignmentDescription, dueDate, email }

        console.log(assignments)

        fetch('http://localhost:5300/assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignments)
        })
            .then(res => res.json()
            )
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        // form.reset();



    }
    return (
        <form onSubmit={handleCreateAssignments} className="flex flex-col items-center mb-12">
            <div className="text-center mb-10 mt-6 ">
                <h1 className="lg:text-5xl text-3xl font-playfair font-bold text-black">Create Assignments</h1>
            </div>
            <div className="w-1/2 flex flex-col  gap-6">
                {/* first row */}
                <div className="flex flex-col lg:flex-row justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-medium">Assignment Title</span>
                            </div>
                            <input name="assignmentTitle" type="text" placeholder="Type here" className="border-2 border-fuchsia-700 px-4 py-3 rounded-md  bg-gray-50 text-gray-800 focus:border-fuchsia-700 w-full" />
                        </label>
                    </div>
                </div>
                {/* second row */}
                <div className="flex  flex-col lg:flex-row justify-between gap-5">

                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text text-lg font-medium">Assignment Marks</span>
                            </div>
                            <input name="marks" type="text" placeholder="Marks" className="border-2 border-fuchsia-700 px-4 py-3 rounded-md  bg-gray-50 text-gray-800 focus:border-fuchsia-700 w-full max-w-lg" />
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text text-lg font-medium">Difficulty Level</span>
                            </div>
                            <select name="difficultyLevel" className="select border-2 border-fuchsia-700 px-4 rounded-md  bg-gray-50 text-gray-800 focus:border-fuchsia-700 w-full">
                                <option value={'Easy'}>Easy</option>
                                <option value={'Medium'}>Medium</option>
                                <option value={'Hard'}>Hard</option>
                            </select>
                        </label>
                    </div>
                </div>

                {/* third row */}
                <div className="flex  flex-col lg:flex-row justify-between gap-5">

                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text text-lg font-medium">Thumbnail Image URL</span>
                            </div>
                            <input name="image" type="text" placeholder="Image URL" className="border-2 border-fuchsia-700 px-4 py-3 rounded-md  bg-gray-50 text-gray-800 focus:border-fuchsia-700 w-full max-w-lg" />
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text text-lg font-medium">Due Date</span>
                            </div>
                            <DatePicker name="dueDate" className="border-2 border-fuchsia-700 px-4 py-3 rounded-md  bg-gray-50 text-gray-800 focus:border-fuchsia-700 w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </label>
                    </div>
                </div>

                {/* fourth row */}
                <div className="flex  flex-col lg:flex-row justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-medium">Assignment Description</span>
                            </div>
                            <textarea rows={'10'} name="assignmentDescription" id="" placeholder="About this assignment" className="border-2 border-fuchsia-700 px-4 py-3 rounded-md  bg-gray-50 text-gray-800 focus:border-fuchsia-700 w-full"></textarea>
                        </label>

                    </div>
                </div>

                {/* last Row */}
                <div className="w-full">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg font-medium">User Email</span>
                        </div>
                        <input name="email" defaultValue={user?.email} disabled type="email" className="border-2 border-fuchsia-700 px-4 py-3 rounded-md  bg-gray-50 text-gray-800 focus:border-fuchsia-700 w-full" />
                    </label>
                </div>


                <div>
                    <input type="submit" value="Create Assignments" className="block w-full p-3 text-center text-lg font-normal shadow-xl rounded-md text-gray-50 bg-gradient-to-r from-fuchsia-800  to-pink-600 hover:font-semibold" />
                </div>
            </div>
        </form>
    );
};

export default CreateAssignments;