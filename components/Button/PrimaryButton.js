import Link from "next/link";
function PrimaryButton(props){
    return(
        <Link href={props.href || "#"}><a
            className={`w-full flex items-center justify-center border-2 border-gray-primary box-border px-6 py-3 md:py-3 md:px-10   ${props.style? props.style : "text-white bg-green-600 hover:bg-green-700"}`}
        >
            {props.children}
        </a>
        </Link>
    )
}


export default PrimaryButton;