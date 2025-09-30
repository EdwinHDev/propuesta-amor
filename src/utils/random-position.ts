export const randomNumber = () => Math.floor(Math.random() * 90) + 1;

export const randomPosition = (): React.CSSProperties => {
  const styles: React.CSSProperties = {
    top: `${randomNumber()}%`,
    left: `${randomNumber()}%`,
  };

  return styles;
}