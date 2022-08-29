import React from "react";

const About = () => {
    return(
        <div className=" bg-black mx-auto h-screen ">
    <hr className="border-2 border-green-400 mb-16 md:mb-24 w-1/2 mx-auto"/>
               <div className="flex flex-col items-center justify-center">
                    <h4 className="font-semibold uppercase text-2xl md:text-3xl lg:text-4xl text-center text-green-500 p-4 max-w-lg mx-auto">About me</h4>
                    <p className="text-green-400 text-center p-4 text-xl max-w-lg mx-auto"> 
                    In 2020, I graduated from Izmir University of Economics as a high honor student in the computer programming department. I'm a Software developer who worked in different teams on large-scale projects experienced in web development.                </p>
               </div>
        </div>
    )
}
export default About;