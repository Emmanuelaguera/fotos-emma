import React from 'react'
import { createRoot } from 'react-dom/client'
import { Photo } from './components/photo'
import { Photos } from './components/photos'

createRoot(document.getElementById('root')).render(
  <>
    <Photo />
    <Photos/>
  
  </>,
)
