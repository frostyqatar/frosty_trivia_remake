declare module 'react-snowfall' {
  import React from 'react';

  interface SnowfallProps {
    /**
     * Color of the snowflake, can be any valid CSS color
     */
    color?: string;
    
    /**
     * Array of images to use as snowflakes instead of the default circle
     */
    images?: HTMLImageElement[];
    
    /**
     * Number of snowflakes to render
     */
    snowflakeCount?: number;
    
    /**
     * Additional styling for the canvas element
     */
    style?: React.CSSProperties;
    
    /**
     * Change the radius of the snowflake
     */
    radius?: number | [number, number];
    
    /**
     * Change the speed of the snowflakes
     */
    speed?: number | [number, number];
    
    /**
     * Change the wind of the snowflakes
     */
    wind?: number | [number, number];
  }

  const Snowfall: React.FC<SnowfallProps>;
  
  export default Snowfall;
} 