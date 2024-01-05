import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';

const CreateBook = () => {

  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const[publishYear,setpublishYear]=useState();
  const[loading,setLoading]=useState(false);
  const navigate=useNavigate();
  handleSaveBook=() => {
    const data={
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.put('http://localhost:5000/books',data)
    .then(() => {setLoading(false); navigate('/')})
    .catch((error) => {setLoading(false);
    alert('An error encountered, please check console');})
  } 


  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? (<Spinner/>):''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className='border-2 border-gray-500 px-4 py-2 w-full' /></div>
      </div>

      <div className='my-4'>
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input type="text"
                  value={title}
                  onChange={(e) => setAuthor(e.target.value)}
                  className='border-2 border-gray-500 px-4 py-2 w-full' />
       </div>
    
       <div className='my-4'>
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input type="text"
                  value={title}
                  onChange={(e) => setAuthor(e.target.value)}
                  className='border-2 border-gray-500 px-4 py-2 w-full' />
       </div>
    </div>

      
    
  )
}

export default CreateBook