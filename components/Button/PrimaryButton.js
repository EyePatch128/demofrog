function PrimaryButton(props){
    return(
        <a
            href={props.href || "#"}
            className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow md:py-3 md:text-lg md:px-10 ${props.style? props.style : "text-white bg-green-600 hover:bg-green-700"}`}
        >
            {props.children}
        </a>
    )
}


export default PrimaryButton;