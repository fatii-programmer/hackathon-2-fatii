import React from 'react';
import Image from 'next/image'; 


function HeroSection() {
  return (
    <div>
    
    <div className="bg-[#FFF2CC] flex flex-col md:flex-row justify-center items-center px-6 md:px-12 py-8">
        {/* Left Content */}
        <div className="md:max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold mb-8">Rocket single seater</h1>
          <button className="text-xl md:text-2xl border-b-2 border-black hover:text-gray-700 hover:border-gray-500 mb-8">
            Shop Now
          </button>
        </div>
        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/chair.jpg"
            alt="Rocket single seater"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="bg-[#FAF4F4] py-8 px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {/* Item 1 */}
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Image
              src="/t1.jpg"
              width={300}
              height={200}
              alt="Side Table"
              className="object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">Side Table</h3>
            <button className="underline hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded mt-4">
              View More
            </button>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Image
              src="/s1.jpg"
              width={300}
              height={200}
              alt="Sofa"
              className="object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">Side Table</h3>
            <button className="underline hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded mt-4">
              View More
            </button>
          </div>
        </div>
  </div>



 {/* Related Products Section */}
  <div className="mt-20 ">
    <h2 className="text-center text-4xl font-bold ">Top Pics For You</h2>
    <h3 className='text-center mt-4 '>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights. </h3>
    <div className="flex justify-center mt-8 space-x-4 lg:space-x-8">
      <div className="text-center">
        <Image src="/image1.jpg" alt="Trenton modular sofa" width={350} height={200} />
        <p>Trenton modular sofa_3</p>
        <p className="font-bold">Rs. 25,000.00</p>
      </div>
      <div className="text-center">
        <Image src="/image2.jpg" alt="Granite dining table" width={350} height={200} />
        <p>Granite dining table with dining chair</p>
        <p className="font-bold">Rs. 25,000.00</p>
      </div>
      <div className="text-center">
        <Image src="/image3.jpg" alt="Outdoor bar table" width={350} height={200} />
        <p>Outdoor bar table and stool</p>
        <p className="font-bold">Rs. 25,000.00</p>
      </div>
      <div className="text-center">
        <Image src="/image4.jpg" alt="Plain console" width={350} height={200} />
        <p>Plain console with teak mirror</p>
        <p className="font-bold">Rs. 25,000.00</p>
      </div>
    </div>
    <div className="text-center mt-16 mb-12">
      <button className="text-black-500 underline">View More</button>
    </div>
  </div>

      <section className="bg-[#FFF9E5] py-10 ">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/asgardsofa.jpg"
                width={800}
                height={800}
                alt="Asgaard Sofa"
                className="w-20px h-auto mb-4"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="  mb-4 sm:text-4xl md:text-5xl">New Arrivals</p>
              <h1 className="text-5xl font-bold mb-6 sm:text-6xl md:text-7xl lg:text-8xl">Asgaard sofa</h1>
              <button className="border-2 border-black text-black py-2 px-4  hover:bg-gray-800">Order Now</button>
            </div>
          </div>
        </div>


        
       
        <div className="bg-[#FAF4F4] py-4 px-4">
  <h2 className="text-center text-4xl font-bold ">Top Pics For You</h2>
  <h3 className='text-center mt-4 '>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights. </h3>
  <div className="flex justify-evenly gap-4 mt-12"> {/* justify-between ko justify-evenly se replace kiya gaya */}
    <div className="flex flex-col items-center justify-center w-[300px]"> {/* Box 1 */}
      <div className="w-full h-[300px]  rounded-lg flex justify-center items-center">
        <Image
          src="/13.jpg"
          width={300}
          height={300}
          alt="Side Table"
          className="object-cover rounded-lg"
        />
      </div>
      <h4 className="text-1xl font-bold mt-4">Going all-in with millennial design</h4>
      <button className="underline hover:bg-gray-300 text-black-800 py-4 px-4 rounded mt-1 text-2xl font-poppins- font-bold">
        Learn More
      </button>
    
     
      <div>
     
    </div>
     
    
    </div>

    <div className="flex flex-col items-center justify-center w-[300px]"> {/* Box 2 */}
      <div className="w-full h-[300px]  rounded-lg flex justify-center items-center">
        <Image
          src="/14.jpg"
          width={300}
          height={300}
          alt="Sofa"
          className="object-cover rounded-lg"
        />
      </div>
      <h4 className="text-1xl font-bold mt-4">Going all-in with millennial design</h4>
      <button className="underline hover:bg-gray-300 text-black-800 py-4 px-4 rounded mt-1 text-2xl font-poppins- font-bold">
        Learn More
      </button>
    </div>

    <div className="flex flex-col items-center justify-center w-[300px]"> {/* Box 3 */}
      <div className="w-full h-[300px]  rounded-lg flex justify-center items-center">
        <Image
          src="/15.jpg"
          width={300}
          height={300}
          alt="Coffee Table"
          className="object-cover rounded-lg"
        />
      </div>
      <h4 className="text-1xl font-bold mt-4">Going all-in with millennial design</h4>
      <button className="underline hover:bg-gray-300 text-black-800 py-4 px-4 rounded mt-1 text-2xl font-poppins- font-bold">
        Learn More
      </button>
      
     
    </div>
  </div>






        </div>
      </section>
      <div className="bg-cover bg-center py-16 px-12" style={{ backgroundImage: "url('/instabg.jpg')" }}>
        <div className="flex flex-col items-center justify-center text-center text-[#000000]">
          <h1 className="text-[24px] md:text-[36px] font-bold">Our Instagram</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2">
            Follow our store on Instagram
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-black font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
            Follow Us
          </button>
        </div>
        </div>
        </div>
  )
}

export default HeroSection;
