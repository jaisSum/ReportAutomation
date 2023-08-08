import styles from '../styles/header.module.scss'
import data from '../api/dashboard.json'
import Image from 'next/image'
  
const Header = () => {
    return (
        <header className={`${styles.mainHeader} container colorOutlineBot`}>          
          {
            data.map((item) => {
                return (
                    <>
                        <h1 className="colorHeading font-extrabold">{item.common.title}</h1>  
                        <Image src={item.common.org_logo} alt="Logo" width={150} height={40}></Image>
                    </>
                )
            })
          }
        </header>
    )
}

export default Header;