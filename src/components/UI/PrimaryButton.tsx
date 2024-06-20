import Button from "react-bootstrap/Button";

interface PrimaryButtonProps {
  title: string;
  onClick: () => void;
}

const PrimaryButton = ({ title, onClick }: PrimaryButtonProps) => {
  return (
    <Button className="primary-btn" onClick={onClick} variant="outline-secondary">
      {title}
    </Button>
  );
};

export default PrimaryButton;
