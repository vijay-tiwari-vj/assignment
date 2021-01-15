import React from 'react';

export const Wave = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#702CC8',stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3B58C8',stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path fill="url(#grad)" fillOpacity="1" d="M0,32L48,74.7C96,117,192,203,288,202.7C384,203,480,117,576,69.3C672,21,768,11,864,37.3C960,64,1056,128,1152,149.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
  )
}

export default Wave;
