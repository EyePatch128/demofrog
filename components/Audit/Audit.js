import Image from "next/image";

function Audit(props){
    return(
        <div className="group my-6 flex-shrink-0 cursor-pointer shadow-retro-green retro-btn">
            <Image
                src={props.imageSrc}
                alt={props.imageAlt}
                priority={true}
                layout="responsive"
                width={192}
                height={320}
                objectFit="contain"
                className="select-none"
            />
        </div>
    );
}

export default Audit;