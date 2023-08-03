import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
    <div className='text-center font-extrabold text-5xl md-10 bg-slate-600'>
      Next.AI
    </div>
    <div className=' flex h-screen justify-center items-center space-x-5'>
      <Link href='/sign-in'>
        <Button className=''>Login</Button>
      </Link>

      <Link href='/sign-up'>
        <Button>Register</Button>
      </Link>

      <Link href='/dashboard'>
        <Button>Dashboard</Button>
      </Link>
      </div>
    </div>
  )
}
