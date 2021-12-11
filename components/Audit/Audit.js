
function Audit(props){
    return(
        <div className="group my-6 flex-shrink-0 cursor-pointer shadow-retro-green retro-btn min-w-36 w-48 max-w-72 sm:w-auto">
            <img
                src={props.imageSrc}
                alt={props.imageAlt}
                className="sm:max-h-3/5 md:max-h-full"
            />
        </div>
    );
}

export default Audit;