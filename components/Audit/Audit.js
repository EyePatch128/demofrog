import Image from "next/image";

function Audit(props){
    return(
        <div className="group my-6 flex-shrink-0 cursor-pointer shadow-retro-green retro-btn min-w-36 w-48 max-w-72 sm:w-auto">
            <Image
                src={props.imageSrc}
                alt={props.imageAlt}
                layout="responsive"
                width={192}
                height={320}
                objectFit="contain"
            />
        </div>
    );
}

export default Audit;