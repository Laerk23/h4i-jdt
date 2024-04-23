import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Task from './components/tasks/tasks'
import { GrEmergency } from 'react-icons/gr'

function App() {
  const [task, setTasks] = useState([
    'Task1',
    'Task2',
    'Task3'
  ])

  return (
    <>
      <Navbar />
      <div className="seperator"></div>
      <main className="main">
        <section className='Todo'>{
          tasks.map((task, index) => {
            <Task key={index} name={task} />
          })
        }
        </section>
      </main>
      <FaBolt color='green' />
      <Footer />
    </>
  )
}

export default App
