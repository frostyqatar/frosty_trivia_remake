import Soundboard from './Soundboard';
import { useState } from 'react';
import { Button } from './common/Button';

const [showSoundboard, setShowSoundboard] = useState(false);

<Button 
  onClick={() => setShowSoundboard(!showSoundboard)}
>
  🔊 Soundboard
</Button>

{showSoundboard && (
  <div style={{ 
    position: 'fixed', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    zIndex: 1000,
    width: '90%',
    maxWidth: '500px'
  }}>
    <Soundboard />
    <Button
      onClick={() => setShowSoundboard(false)}
      variant="danger"
      style={{ 
        position: 'absolute', 
        top: '-15px', 
        right: '-15px',
        borderRadius: '50%',
        width: '36px',
        height: '36px',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      ✕
    </Button>
  </div>
)} 