import { useLoaderData } from "react-router-dom";
import AssignmentsCard from "./AssignmentsCard";



const Assignments = () => {

    const assignments = useLoaderData();

    console.log(assignments)


    return (
        <div className="flex flex-col items-center mb-12" >
            {/* <div className="text-center mb-10">
                <h1 className="lg:text-5xl text-3xl font-playfair font-bold text-sky-600">All Tourists Spot</h1>
            </div> */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
                {
                    assignments.map(assignment => <AssignmentsCard key={assignments.id} assignment={assignment}></AssignmentsCard>)
                }
            </div>

        </div>
    );
};

export default Assignments;

