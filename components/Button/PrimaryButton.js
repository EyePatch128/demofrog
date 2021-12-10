function PrimaryButton(props){
    return(
        <a
            href={props.href || "#"}
            className={`w-full flex retro-shadow items-center justify-center border-2 border-gray-primary text-base font-medium box-border px-6 py-3 md:py-3 md:px-10 md:text-lg  ${props.style? props.style : "text-white bg-green-600 hover:bg-green-700"}`}
        >
            {props.children}
        </a>
    )
}


export default PrimaryButton;