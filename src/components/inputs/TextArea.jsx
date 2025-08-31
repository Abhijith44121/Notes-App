const TextArea = ({ name, value, onchange ,label, required=false}) => {
    return ( <div className='mb-4'>
        <label htmlFor={name} className='block font-semibold'>
         {label}
        </label>
        <textarea
          name={name}
          className='w-full p-2 border rounded-lg'
          value={value}
          required={required}
          onChange={onchange}></textarea>
      </div> );
}
 
export default TextArea;