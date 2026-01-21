import projectdata from "../../Data/projects"


export default function AndroidPage() {

    const allProject = [];

    // Flatten only Android projects
    Object.keys(projectdata).forEach(category => {
        if (category.toLowerCase() !== "android") return;

        const categoryProjects = projectdata[category];
        Object.keys(categoryProjects).forEach(projectId => {
            allProject.push({
                id: projectId,
                category: category,
                ...categoryProjects[projectId]
            });
        });
    });


    console.log(allProject);

    return (
        <div className=" min-w-full bg-gradient-to-br from-red-100 to-indigo-200 p-8 min-h-screen max-h-screen overflow-y-scroll overflow-hidden">
            {/* heading */}
            <h1 className="text-center sm:text-6xl font-bold">Android <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
           bg-clip-text text-transparent">Projects</span></h1>
            <p className="text-center text-[0.4rem] sm:text-xl mt-2 tracking-[4px] uppercase text-gray-700">A collection of my Android <span className="bg-gradient-to-r from-pink-500 via-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Projects</span></p>



            {/*  */}
            <div className="mt-10 grid sm:grid-cols-3 grid-cols-2 gap-4">
                <div className="border-2 border-gray-200 bg-gradient-to-br flex items-start justify-center flex-col from-indigo-100 to-purple-100 shadow-sm rounded-2xl h-30 p-4 pl-7">
                    <h1 className="sm:text-4xl text-[1.2rem] font-bold">{allProject.length}</h1>
                    <p className="sm:text-sm text-[0.8rem] text-gray-500 mt-1">Total projects</p>
                </div>
                <div className="border-2 border-gray-200 bg-gradient-to-br flex items-start justify-center flex-col from-indigo-100 to-purple-100 shadow-sm rounded-2xl h-30 p-4 pl-7">
                    <div className="sm:text-3xl text-[1.2rem] font-bold text-gray-900">
                        {Math.max(...allProject.map(p => p.downloads ? parseFloat(p.downloads) : 0)) / 1000}K+
                    </div>
                    <div className="text-gray-600 sm:text-sm mt-2 text-[0.8rem]">Total Downloads</div>
                </div>
                <div className="border-2 border-gray-200 bg-gradient-to-br flex items-start justify-center flex-col from-indigo-100 to-purple-100 shadow-sm rounded-2xl h-30 p-4 pl-7">
                    <div className="sm:text-3xl text-[1.2rem] font-bold text-gray-900">
                        {allProject.filter(p => p.featured).length}
                    </div>
                    <div className="text-gray-600 sm:text-sm mt-2 text-[0.8rem]">Featured</div>
                </div>

            </div>
        </div>
    );
}