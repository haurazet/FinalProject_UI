import React,{useState} from 'react'
import styles from './Dashboard.module.css'



const Dashboard=()=>{
    const [isManageTransaksi,setManageTransaksi]=useState(false)
    const [isManageUser,setIsManageUser]=useState(false)
    const [isManageReward,setIsManageReward]=useState(false)
    const [isManageProgram,setIsManageProgram]=useState(false)
    const [isReport,setReport]=useState(true)



    return(
      <div className={styles.container}>
          <header className={styles.header}>Header</header>
    <aside className={styles.aside}>aside</aside>
          <main className={styles.main}>main</main>
          <footer className={styles.footer}>footer</footer>
      </div>
    )
}

export default Dashboard