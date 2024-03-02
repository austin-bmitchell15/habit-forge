import { ReactNode } from 'react'
import CustomNavbar from './CustomNavbar'

interface Props {
    children?: ReactNode
}
 
export default function Layout({ children } : Props) {
  return (
    <div className='flex flex-wrap'>
      <CustomNavbar />
      <main>{children}</main>
    </div>
  )
}