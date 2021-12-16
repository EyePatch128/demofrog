import Image from "next/image"
import Button from "../Button/PrimaryButton"


function Section(props){
    return(
        <section className="flex justify-between border-b pb-12">
            <div className="sm:text-center md:text-left">
            <h1 className="text-4xl font-retro text-shadow-retro-gray tracking-wide font-extrabold text-gray-primary sm:text-5xl md:text-6xl">
                <span className="block xl:inline text-shadow-retro-green">{props.title}</span>{' '}
                <span className="block text-green-600 xl:inline">{props.title_green}</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {props.subtitle}
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-start text-base font-medium md:text-lg">
                {props.buttons && props.buttons.map((elem, i)=>{
                    return(
                        <div key={i} className="mt-3 sm:mt-0 sm:ml-3 retro-btn">
                            <Button style={`${elem.type == "secondary" ? "text-green-700 bg-green-100 hover:bg-green-200": ""}`}>{elem.text}</Button>
                        </div>
                    )
                })}
            </div>
            </div>
            {props.illustration? 
                <div className="hidden lg:flex items-end justify-center">
                    <img src={props.illustration} className="object-contain"></img>
                </div>
            : null}
        </section>
    );
}

export default Section;