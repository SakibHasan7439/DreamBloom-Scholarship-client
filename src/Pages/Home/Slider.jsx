/* eslint-disable react/prop-types */
const Slider = ({ image, text, subText }) => {
    return (
        <div className="w-full bg-center h-[600px]" style={{ background: `url(${image})`}}>
            <div className="flex items-center object-contain justify-center w-full h-full bg-gray-900/60">
                <div className="text-center md:w-3/4 lg:w-[60%]">
                    <h1 className="md:text-5xl mb-4 text-2xl font-playfair text-white">
                        {text}    
                    </h1>
                    <p className="text-white md:text-xl md:w-[90%] mx-auto">{subText}</p>
                </div>
            </div>
        </div>
    );
};

export default Slider;