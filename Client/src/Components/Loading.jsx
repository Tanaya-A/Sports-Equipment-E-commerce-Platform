import React from 'react';
import pic from '../assets/loading-rings.json'; 
import { useLottie } from "lottie-react";

const Loading = () => {
    const options = {
        animationData: pic,
        loop: true
      };
      const { View } = useLottie(options);
    return (
        <div className='w-1/5 mx-auto'>
            {View}
            
        </div>
    );
};

export default Loading;