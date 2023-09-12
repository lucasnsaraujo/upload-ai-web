import { Button } from './components/ui/button'
import { Separator } from './components/ui/separator'
import { Github } from 'lucide-react'

export function App() {
  return (
    <>
      <div className='min-h-screen'>
        <div className='flex items-center justify-between border-b px-6 py-3'>
          <h1 className='text-xl font-bold italic'>upload.ai</h1>
          <div className='flex items-center gap-3'>
            <span className='text-sm text-muted-foreground'>Desenvolvido por @lucasnsaraujo</span>
            <Separator orientation='vertical' className='h-6' />
            <Button variant='outline'>
              <Github className='mr-2 h-4 w-4' />
              Github
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
