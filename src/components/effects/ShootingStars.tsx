import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;
`;

const StarsCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

interface ShootingStarsProps {
  active: boolean;
}

const ShootingStars: React.FC<ShootingStarsProps> = ({ active }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    if (!active || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl2');
    if (!gl) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Vertex shader - just passing through the position
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    if (!vertexShader) return;
    
    gl.shaderSource(vertexShader, `#version 300 es
      precision highp float;
      in vec4 position;
      void main() {
        gl_Position = position;
      }`
    );
    gl.compileShader(vertexShader);
    
    // Fragment shader - the star field effect with yellow trails
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fragmentShader) return;
    
    gl.shaderSource(fragmentShader, `#version 300 es
      precision highp float;
      out vec4 O;
      uniform vec2 resolution;
      uniform float time;
      
      #define FC gl_FragCoord.xy
      #define T time
      #define R resolution
      #define MN min(R.x,R.y)
      
      // Returns a pseudo random number for a given point (white noise)
      float rnd(vec2 p) {
        p=fract(p*vec2(12.9898,78.233));
        p+=dot(p,p+34.56);
        return fract(p.x*p.y);
      }
      
      // Returns a pseudo random number for a given point (value noise)
      float noise(in vec2 p) {
        vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
        float
        a=rnd(i),
        b=rnd(i+vec2(1,0)),
        c=rnd(i+vec2(0,1)),
        d=rnd(i+1.);
        return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
      }
      
      // Returns a pseudo random number for a given point (fractal noise)
      float fbm(vec2 p) {
        float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
        for (int i=0; i<5; i++) {
          t+=a*noise(p);
          p*=2.*m;
          a*=.5;
        }
        return t;
      }
      
      float clouds(vec2 p) {
        float d=1., t=.0;
        for (float i=.0; i<3.; i++) {
          float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
          t=mix(t,d,a);
          d=a;
          p*=2./(i+1.);
        }
        return t;
      }
      
      void main(void) {
        vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
        vec3 col=vec3(0);
        float bg=clouds(vec2(st.x+T*.5,-st.y));
        
        // Enhanced pulsation effect
        uv*=1.-.3*(sin(T*.3)*.5+.5);
        
        for (float i=1.; i<12.; i++) {
          // Make stars move faster with longer trails
          uv+=.13*cos(i*vec2(.1+.02*i, .8)+i*i+T*.7+.15*uv.x);
          vec2 p=uv;
          float d=length(p);
          
          // Increase yellow color (more red and green, less blue)
          vec3 starColor = vec3(1.0, 0.9, 0.5); // Yellow-gold color base
          col+=.002/d*(cos(sin(i)*vec3(0.8,0.6,0.2))+starColor);
          
          // Add more pronounced trails with a yellow-orange tint
          float b=noise(i+p+bg*1.731);
          vec3 trailColor = vec3(1.0, 0.7, 0.3); // Orange-yellow trail
          col+=.0035*b/length(max(p,vec2(b*p.x*.04,p.y*.9)))*trailColor;
          
          // Adjust background color to be more subtle
          col=mix(col,vec3(bg*.15,bg*.1,bg*.05)*0.3,d);
        }
        
        // Enhance brightness of stars
        col = pow(col, vec3(0.8));
        
        O=vec4(col,1);
      }
    `);
    gl.compileShader(fragmentShader);
    
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error("Fragment shader error:", gl.getShaderInfoLog(fragmentShader));
      return;
    }
    
    // Create and link program
    const program = gl.createProgram();
    if (!program) return;
    
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }
    
    // Create a buffer for the vertices
    const vertices = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    
    // Setup attributes and uniforms
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    
    const resolutionUniform = gl.getUniformLocation(program, 'resolution');
    const timeUniform = gl.getUniformLocation(program, 'time');
    
    // Animation loop
    startTime.current = Date.now();
    
    const animate = () => {
      gl.clearColor(0, 0, 0, 0); // Use transparent background
      gl.clear(gl.COLOR_BUFFER_BIT);
      
      gl.useProgram(program);
      
      // Update uniforms
      gl.uniform2f(resolutionUniform, canvas.width, canvas.height);
      gl.uniform1f(timeUniform, (Date.now() - startTime.current) / 1000);
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
      
      // Clean up WebGL resources
      if (program) gl.deleteProgram(program);
      if (vertexShader) gl.deleteShader(vertexShader);
      if (fragmentShader) gl.deleteShader(fragmentShader);
      if (buffer) gl.deleteBuffer(buffer);
    };
  }, [active]);
  
  return (
    <CanvasContainer style={{ opacity: active ? 1 : 0 }}>
      <StarsCanvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default ShootingStars; 