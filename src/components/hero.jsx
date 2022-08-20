import React from "react";
import Typewriter from 'typewriter-effect';
const Hero = () => {
    return (
        <div className="bg-black bg-cover w-full h-full">
          <div className="relative overflow-hidden ">
          <div className="max-w-7xl mx-auto">
            <div className="">
              <div>
                    <div className=" text-green-400 hover:text-gray-200 text-center p-4 tracking-wider my-6">
                      <a href="#" className="font-medium mx-6 ">About</a>    
                      <a href="#" className="font-medium mx-6">Contact</a>    
                    </div>        
              </div> 
        
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-44 ">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-5xl tracking-tight font-extrabold text-green-500 sm:text-6xl md:text-7xl text-center ">
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
  
                  <h2 className="text-4xl tracking-normal text-green-500 sm:text-5xl md:text-6xl mt-5 text-center">
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
                  
                  <p className=" text-green-400 text-center p-4 text-xl sm:text-2xl md:text-3xl">
                    <Typewriter
                     onInit={(typewriter)=> {
                      typewriter.pauseFor(8000)
                      .typeString("I develop outstanding dapps and good-looking, responsive websites.")
                      .start();
                    }}
                    />
                  </p>
                  {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow"> 
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-white hover:bg-gray-200 md:py-4 md:text-lg md:px-10"> <img src={process.env.PUBLIC_URL+"upwork.png"} className="w-24" alt="" /></a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Contact me </a>
                    </div>
                  </div> */}
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          </div>
        </div>
        </div>
    )
}     
export default Hero;