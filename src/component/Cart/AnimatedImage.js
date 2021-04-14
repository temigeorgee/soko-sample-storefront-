import React from 'react';
import Lottie from 'react-lottie';
import * as sadbag from './lottie.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: sadbag.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function Animatedimage() {
  return (
    <>
      <Lottie options={defaultOptions} height={320} width={320} />
    </>
  );
}

export default Animatedimage;
