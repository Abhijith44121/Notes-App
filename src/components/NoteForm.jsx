import { useState } from "react";
import TextField from "./inputs/TextField";
import SelectInput from "./inputs/SelectInput";
import TextArea from "./inputs/TextArea";
const NoteForm = ({ notes ,setNotes}) => {
  const [formData,setFormData] = useState({
    title: '',
    category: 'Work',
    priority: 'Medium',
    description: ''
  });
  const [isFormVisible,setisFormVisible] =useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    //Validation
    if(!formData.title || !formData.description) return;

    // Create a note object
    const newNotes = {id: Date.now(),...formData}
    //Add notes to state
    setNotes([newNotes,...notes]);
    //Reset the notes 
    setFormData({
      title: '',
    category: 'Work',
    priority: 'Medium',
    description: ''
    })
  }
  return (
    <>
    {/* Toggle Button */}
<button onClick ={ ()=> setisFormVisible(!isFormVisible)} className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4">
 { isFormVisible ? 'Hide Form ❌' : 'Add New Note ➕' }
</button>

     {/* Form */}
     {isFormVisible && (<form onSubmit = {handleSubmit} className='mb-6'>
      <TextField 
          label='Title'
          name='title'
          value={formData.title}
          onChange={handleChange}
          required />

      <SelectInput 
           label='Category'
           name='category'
           value={formData.category}
           onChange={handleChange}
           options={[
            {value: 'Personal', label: '👨‍💼Personal'},
            {value: 'Ideas', label: '💡Ideas'},
            {value: 'Work', label: '📁Work'}
           ]}   

              />
      <SelectInput 
           label='Priority'
           name='priority'
           value={formData.priority}
           onChange={handleChange}
           options={[
            {value: 'High', label: '🔴High'},
            {value: 'Medium', label: '🟠Medium'},
            {value: 'Low', label: '🟢Low'}
           ]}   

              />
      <TextArea 
        label='Description'
           name='description'
           value={formData.description}
           onchange={handleChange}
           required

        />
      <button className="bg-purple-600 w-full text-white py-2 rounded-lg cursor-pointer hover:bg-purple-800">Submit</button>


    </form>)}
    
    </>
  );
};
export default NoteForm
