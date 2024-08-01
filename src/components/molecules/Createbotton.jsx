
import Buttons from "../atoms/Buttons"
function Createbotton({onClick}) {
  return (
    <div>
        <Buttons onClick={onClick}>Nuevo todolist</Buttons>
    </div>
  )
}

export default Createbotton