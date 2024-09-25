import React from 'react'
import img from '../../images/haha1.webp'

function About() {
  return (
    <div className="py-16 bg-white mt-8">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:w-5/12 lg:w-5/12">
                <img
                    src={img}
                    alt="Stylish shoes"
                />
            </div>
            <div className="md:w-7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                    Discover the Latest Trends in Footwear
                </h2>
                <p className="mt-6 text-gray-600">
                    Explore our exclusive collection of shoes that combine comfort and style. Perfect for every occasion, our footwear is crafted with precision and care to meet your fashion needs.
                </p>
                <p className="mt-4 text-gray-600">
                    Whether you're looking for casual, formal, or sports shoes, we've got you covered. Step into the world of premium footwear today and experience unmatched quality.
                </p>
            </div>
        </div>
    </div>
</div>

  )
}

export default About