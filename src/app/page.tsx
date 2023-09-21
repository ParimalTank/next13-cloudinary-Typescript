import Image from 'next/image'
import { store } from './store'
import { Counter } from '../components/Counter'
import styles from './page.module.css'
import { Providers } from './provider'
import { UserData } from '@/components/UserData'
import { Search } from '@/components/Search'
import { UploadFile } from '@/components/UploadFile'


export default function Home() {
  return (
    <>
      <Counter />
      <UserData />
      <Search />
      <UploadFile />
    </>
  )
}
