import { useState, useEffect } from "react";
import React from "react";
import '../App.css'


const Carrusel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    return (
        <div className="carrusel h-full w[100%] lg:w-[70%] ">
            <div className="carrusel-imagenes" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} />
                ))}
            </div>
        </div>
    );
};

export default Carrusel;