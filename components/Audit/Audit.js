
function Audit(props){
    return(
        <div className="group flex-shrink-0 cursor-pointer h-96">
            <img
                src={props.imageSrc}
                alt={props.imageAlt}
                className="max-h-full"
            />
        </div>

        // <div className="group h-full flex flex-col justify-between  border-red-500 bg-white border-2 py-4 rounded-md shadow-2xl flex-grow md:flex-grow-0">
        //     <div className="w-1/2 h-1/2 mx-auto aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        //         <img
        //             src={props.imageSrc}
        //             alt={props.imageAlt}
        //             className="w-full h-full object-center object-contain"
        //         />
        //     </div>
            
        //     <div className="mt-16 flex justify-between flex-col text-center border-2 border-green-100">
        //         <div>
        //         <h3 className="text-xl font-bold text-gray-700">
        //             <a href={props.href}>
        //             {props.title}
        //             </a>
        //         </h3>
        //         <p className="mt-1 text-base text-gray-500">{props.subTitle}</p>
        //         </div>
        //     </div>

        //     <div className="mt-6 w-full">
        //         <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-full">{props.cta}</button>
        //     </div>
        // </div>
    );
}

export default Audit;