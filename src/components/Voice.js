import React from 'react';

const Voice = props => {
    const handleKeyPress = e => {
      if (e.keyCode === props.keyTrigger) {
        playSound();
      }
    };
  
    React.useEffect(() => {
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    });
  
    const playSound = e => {
      const sound = document.getElementById(props.text);
      sound.currentTime = 0;
      sound.play();
      props.click(props.id)
    };
    
  
    return (
      <>
        <div id={props.id} className="drum-pad" onClick={playSound}>
          {props.text}
          <audio className="clip" src={props.url} id={props.text} />
        </div>
      </>
    );
  };
  export default Voice;