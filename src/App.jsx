import { useState } from 'react'
import 'filepond/dist/filepond.min.css';
import { FilePond, registerPlugin } from 'react-filepond';

import './App.css'
import Upload from './components/Upload';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Upload />
    </div>
  )
}

export default App
