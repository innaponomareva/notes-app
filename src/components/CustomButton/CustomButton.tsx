import { MouseEvent } from "react";
import "./CustomButton.css";

interface CustomButtonProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: JSX.Element;
  label?: string;
  title?: string;
  onClickHandler: (() => void) | ((event: MouseEvent) => void);
  onMouseDownHandler?: (event: MouseEvent) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  style,
  icon,
  label,
  title,
  onClickHandler,
  onMouseDownHandler,
}) => {
  return (
    <div className="custom-btn-container">
      <button
        className={className ?? "custom-btn"}
        style={style}
        title={title}
        onClick={onClickHandler}
        onMouseDown={onMouseDownHandler}
      >
        {icon ?? label}
      </button>
    </div>
  );
};

export default CustomButton;
