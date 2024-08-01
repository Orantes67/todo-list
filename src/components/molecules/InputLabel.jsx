import Input from "../atoms/Input";
import Label from "../atoms/Label";

function InputLabel({ text, type, placeholder, value, onChange }) {
  return (
    <div className="mb-4">
      <Label text={text} className="block mb-2 font-bold text-gray-700" />
      <Input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
      />
    </div>
  );
}

export default InputLabel;
