import './styles/global.css'

//import { Habit } from './components/Habit'

import logoHabits from './assets/logoHabits.svg'

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
        <img src={logoHabits} alt="Logo Habits"/>
      </div>
    </div>
  )
}

