import React from "react";

// Components
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer"


function Layout(props){
    return(
        <React.Fragment>
            <div className="w-full lg:w-4/5 py-2 mx-auto">
                <Navbar />

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        {props.children}
                    </main>

                <Footer />
            </div>
        </React.Fragment>
    );
}

export default Layout;