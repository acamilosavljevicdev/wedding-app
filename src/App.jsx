import { useState } from 'react'
import 'filepond/dist/filepond.min.css';
import { FilePond, registerPlugin } from 'react-filepond';

import './App.css'
import Upload from './components/Upload';
import { Gallery } from './components/Gallery';

function App() {
  const [count, setCount] = useState(0)
  const [isUploadVisible, setIsUploadVisible] = useState(true);

  return (
    <div className='flex flex-col p-5'>
      <div className='flex flex-row gap-5 w-full justify-center'>
        <p className={`${isUploadVisible && 'text-blue-500'}`} onClick={() => setIsUploadVisible(true)}>Upload</p>
        <p className={`${!isUploadVisible && 'text-blue-500'}`} onClick={() => setIsUploadVisible(false)}>Gallery</p>
      </div>
      {isUploadVisible ? <Upload /> : <Gallery />}
    </div>
  )
}

export default App
