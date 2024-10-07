type Props = {
  color: string;
  onCustomClick: () => void;
};

export function CustomButton({ onCustomClick, color }: Props) {
  return (
    <>
      <button style={{ backgroundColor: color }} onClick={onCustomClick}>
        Click Me!
      </button>
    </>
  );
}
