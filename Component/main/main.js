import styles from '../../Component/main/main.module.css'
import React, {useState} from 'react'


export default function Main (){


    const [name, setName] = useState('train.jpg')

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>О нас </div>
                <div className={styles.description}>Наша цель — взаимовыгодное сотрудничество на основе долгосрочных контрактов. 
                Мы представлены на рынке с 2006 года и не перестаем развиваться, совершенствовать качество своих услуг, оптимизировать затраты для снижения стоимости продукции.</div>
            </div>
            <div className={styles.block}>
                <div className={styles.block_img}> 
                <img src="imgOne.jpg" alt="Здесь должна быть картинка" width="620px" height= '580px'  />
                </div>
                    <div className={styles.block_description}>
                        <div className={styles.block_p_action}> Выполняем все работы по проектированию систем, закупке необходимых материалов, производству, установке, наладке, гарантийному и внегарантийному обслуживанию. Уникальный парк оборудования позволяет находить решения для любых производственных задач клиентов.</div>
                        <br/>
                        <div className={styles.block_p}> Также мы берем на себя все сложности, связанные с сертификацией нестандартного оборудования. В этом процессе принимают участие инженеры и юристы с многолетним опытом работы. Клиенты получают все нужные документы для того, чтобы использование оборудования было полностью законным. <p>
                            Выпускаемая нашей компанией продукция разрешена к применению Ростехнадзором. На производстве внедрен жесткий менеджмент качества — по международному стандарту ГОСТ Р ИСО 9001. </p><br/></div>
                    </div>
                </div>
                <div className={styles.block_service}>
                    <div className={styles.title}>Транспорт </div>
                        <div className={styles.blockTwo}>
                            <div className={styles.blockTwoImg}>
                            <img src={name} alt="Здесь должна быть картинка" width="620px" height= '580px'  />
                            </div>
                            <div className={styles.transport}>
                            <div className={styles.blockTwoDescription } onMouseOver={ (e) => setName('logoTwo.jpg')}>
                                    <div className={styles.blockTwo_header}>Автотранспорт</div>
                                    <ul className={styles.blockTwo_spisok}>
                                        <li>— Собственная автотранспортная компания</li>
                                        <li>— Перевозка негабаритных и тяжеловесных грузов</li>
                                        <li>— Доставка в любую точку России</li>
                                    </ul>
                            </div>
                            <div className={styles.blockTwoDescription} onMouseOver={ (e) => setName('train.jpg')}>
                                 <div className={styles.blockTwo_header}>Железнодорожный <br/>
                                                        транспорт</div> 
                                <ul className={styles.blockTwo_spisok}>
                                        <li>На заводе имеется ж/д ветка, заходящая в производственное здание</li>
                                 </ul>
                            </div>
                            </div>

                        </div>
                </div>
                <div className={styles.service_mobile_content}>
                <div className={styles.service_mobile_header} > Транспорт</div>
                    <div className={styles.service_mobile}>
                        <div className={styles.service_mobile_container}> 
                            <div className={styles.service_mobile_numder}>01/02</div>
                            <div className={styles.service_mobile_img}>
                                <img src='logoTwo.jpg' alt="Здесь должна быть картинка" width="230px" height= '260px' />
                                </div>
                        <div className={styles.service_mobile_tittle}>Автотранспорт</div>
                            <div className={styles.service_mobile_description}>
                                <ul>
                                    <li>— Собственная автотранспортная компания </li>
                                    <li>—Перевозка негабаритных  и тяжеловесных грузов</li>
                                    <li>—Доставка в любую точку России</li>
                                </ul>
                                </div>
                        </div>
                        <div className={styles.service_mobile_container}> 
                            <div className={styles.service_mobile_numder}>02/02</div>
                            <div className={styles.service_mobile_img}>
                                <img src='train.jpg' alt="Здесь должна быть картинка" width="230px" height= '260px' />
                                </div>
                        <div className={styles.service_mobile_tittle}>Железнодорожный транспорт</div>
                            <div className={styles.service_mobile_description}>
                                <ul>
                                    <li>На заводе имеется ж/д ветка, заходящая в производственное здание </li>
                                </ul>
                                </div>
                        </div>
                    </div>   
                    </div>
 
        </div>
        
    )
}