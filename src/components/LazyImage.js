import React, { useState, useEffect } from "react";

const LazyImage = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                loadImage(src).then(() => {
                  if (!didCancel) {
                    setImageSrc(src);
                  }
                });
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "75%",
          }
        );
        observer.observe(imageRef);
      } else {
        loadImage(src).then(() => {
          if (!didCancel) {
            setImageSrc(src);
          }
        });
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <div className=" flex justify-center items-center">

      {imageSrc ? null : (
        <i className=" fa-solid fa-circle-notch text-center text-4xl text-gray-500 animate-spin p-5" />
      )}
       
     
      <img
        ref={setImageRef}
        className={`w-full ${className}`}
        src={imageSrc}
        alt={alt}
        style={{
          filter: imageSrc ? "none" : "blur(20px)",
          transition: "filter 0.5s linear",
        }}
      />
    </div>
  );
  
};

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
}

export default LazyImage;
