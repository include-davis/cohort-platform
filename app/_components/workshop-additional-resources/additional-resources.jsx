import Image from 'next/image';
import styles from './additional-resources.module.scss';
import Card from './card'
import cards from './cards.json';


export default function AdditionalResources() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.tabContainer}>
                <div className={styles.tab}></div>
                <div className={styles.notch}></div>
            </div>
            <div className={styles.mainBodyContainer}>
                
                <h3>Additional Resources</h3>
                <div className={styles.cardsContainer}>
                    {cards.map((card, index) => (
                        <Card   
                            key={index}
                            title={card.title}
                            type={card.type}
                            image={card.image}
                            link={card.link}
                        />
                    ))}
                </div>
            </div>
        </div> 
    );
}