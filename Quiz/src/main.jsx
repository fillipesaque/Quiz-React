import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QuizProvaider } from './Context/quiz.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvaider>
        <App />
    </QuizProvaider> 
  </React.StrictMode>,
)
