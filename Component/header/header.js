import styles from '../../Component/header/header.module.css'

export default function Header (){


    return (
            <div className={styles.container}>
                <div className={styles.block__left}> 
                    <div className={styles.wrapper}>
                        <div className={styles.logo}>
                            <div className={styles.title}> ПензГидроМаш </div>
                            <div className={styles.burger}> 
                                <img src='burger.svg'></img>
                            </div>
                        </div>    
                        <div className={styles.menu}>
                          <div className={styles.glav}><a href="">  Главная</a> </div> 
                          <div className={styles.action}> <a href=""> Компания</a> </div> 
                        </div>
                        <div  className={styles.h1}>Компания</div>
                        
                    </div>
                    <div className={styles.description}>Основная сфера деятельности «ПензГидромаш» —  создание систем для нефтяной, газовой, химической и нефтехимической сфер промышленности. </div>
                    
                </div>
                <div className={styles.block__right}>
                    <div className={styles.nav}>
                    <div className={styles.item}> <a href=""> компания </a></div>
                    <div className={styles.item}><a href=""> продукты и услуги </a> </div> 
                    <div className={styles.item}><a href=""> проекты </a></div> 
                    <div className={styles.item}><a href=""> новости </a></div>
                    <div className={styles.item}> <a href="">контакты</a> </div> 
                    </div>
                </div>
            </div>
    )}
