import React, { useState } from 'react';
import '../styles/Slideshow.css';
import image1 from '../assets/images/PXL_20231111_012605842.jpg';
import image2 from '../assets/images/PXL_20230722_213748834.MP.jpg';
import image3 from '../assets/images/PXL_20231122_022716617.jpg';
import image4 from '../assets/images/PXL_20231217_231300316.jpg';
import image5 from '../assets/images/PXL_20240917_015358556.jpg';


const photos = [image1, image2, image3, image4, image5];
const delay = 2500;

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef<number | null>(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === photos.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {photos.map((image, index) => (
                    // <div /*className='imgbox'*/>
                    <img className='slide' src={image} key={index} />
                    // </div>
                    // <div


                    //     className="slide"
                    //     key={index}
                    // // style={{ backgroundColor }}
                    // ></div>
                ))}
            </div>

            <div className="slideshowDots">
                {photos.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;