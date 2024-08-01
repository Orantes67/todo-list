
import Buttons from "../atoms/Buttons";
import Img from "../atoms/Img";

function ButtonIcon({ text, imge, onClick }) {
  return (
    <Buttons onClick={onClick}>{text}
      <Img src={imge} />
    </Buttons>
  );
}

export default ButtonIcon;
