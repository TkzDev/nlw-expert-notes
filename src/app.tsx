import { NewNoteCard } from './assets/components/new-note-card'
import { NoteCard } from './assets/components/note-card'
import logo from './assets/logo-nlw-expert.svg'


export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt='NLW Expert' />

      <form className='w-full'>
        <input
          type='text' 
          placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNoteCard />
        <NoteCard 
          note={{
            date: new Date(),
            content: 'O Drizzle possui um plugin do ESLint para evitar que realizemos updates ou deletes sem where... Para configurar o plugin, é preciso instalar como abaixo',
          }}
        />
      </div>
    </div>
  )
}