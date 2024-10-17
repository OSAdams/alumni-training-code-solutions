import { useState } from 'react';
type Props = {
  text: string;
  color: string;
};

export default function ToggleButton({ text, color }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <button
        style={
          !isClicked
            ? { backgroundColor: 'white', color }
            : { backgroundColor: color }
        }
        onClick={handleClick}>
        {!isClicked ? 'Click  Me!' : text}
      </button>
    </>
  );
}
