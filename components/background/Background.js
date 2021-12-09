import Particles from "react-particles-js";

// config
import config from "./config";

function Background(){
    return(

        <div className="absolute w-full h-full z-0 left-0 top-0 opacity-60">
            <Particles params={config} />
        </div>

    );
}

export default Background