import React, { useState, useEffect } from "react";

const MyComponent = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('EVENT LISTENER ADDED!');

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('EVENT LISTENER REMOVED!');
        }
    }, []);

    useEffect(() => {
      document.title = `Size: ${width} x ${height}`  
    },[width, height])

    // window.addEventListener('resize', handleResize);

    // console.log('EVENT LISTENER ADDED!');

    function handleResize () {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

  return <div>
    <p>Window Width: {width}</p>    
    <p>Window Hight: {height}</p>    
  </div>;
};

export default MyComponent;
