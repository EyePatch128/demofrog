import Image from "next/image";

function Audit(props){
    return(
        <div className="group my-6 flex-shrink-0 cursor-pointer">
            {/* <Image
                src={props.imageSrc}
                alt={props.imageAlt}
                priority={true}
                layout="responsive"
                width={192}
                height={320}
                objectFit="contain"
                className="select-none"
            /> */}
            <div className="shadow-retro-green retro-btn max-h-96">

            <a href="/audits" className="">
                <img 
                    src={props.imageSrc}
                    alt={props.imageAlt}
                    className="object-contain select-none shadow-retro-green retro-btn max-h-96"

                />
                
            </a>
            </div>
        </div>
    );
}

export default Audit;