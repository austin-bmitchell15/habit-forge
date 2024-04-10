import { ReactNode } from 'react'
import NewCustomNavbar from './CustomNavbar'

interface Props {
    children?: ReactNode
}
 
export default function Layout({ children } : Props) {
  return (
    <div className='flex flex-wrap'>
      <NewCustomNavbar />
      <main>{children}</main>
    </div>
  )
}