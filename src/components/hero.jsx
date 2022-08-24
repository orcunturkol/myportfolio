import React from "react";
import Typewriter from 'typewriter-effect';
const Hero = () => {
    return (  
      <div className="bg-black bg-cover w-full">       
          <div className="h-screen flex items-center justify-center">
            <div className="relative overflow-hidden ">
                  <div className="text-center md:text-left">
                    <h1 className="text-5xl tracking-tight font-extrabold text-green-500 sm:text-6xl md:text-7xl ">
                    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('Hi, I am Orçun')
          .callFunction(() => {
            console.log('String typed out!');
          })
          .start();
      }}
      options={{ delay: 250,}}
    />
                    </h1>
    
                    <h2 className=" tracking-normal text-green-500 text-3xl sm:text-5xl md:text-6xl mt-5">
                      <Typewriter
                      onInit={(typewriter)=> {
                        typewriter.pauseFor(5000)
                        .typeString("Full stack Web3 developer")
                        .pauseFor(3000)
                        .deleteChars(25)
                        .typeString("Software developer")
                        .pauseFor(3000)       
                        .start();
                      }}
                      options={{loop:true,}}
                      />
                    </h2>
                    
                    <p className=" text-green-400 mt-4 text-xl sm:text-2xl md:text-3xl">
                      <Typewriter
                       onInit={(typewriter)=> {
                        typewriter.pauseFor(8000)
                        .typeString("I develop outstanding dapps and good-looking, responsive websites.")
                        .start();
                      }}
                      />
                    </p>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            </div>
          </div>
          </div>
      </div>
    )
}     
export default Hero;