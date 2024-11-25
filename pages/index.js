import Image from 'next/image';
import styles from '../styles/pages/index.module.scss';
import hero from '../public/images/hero-banner.png';
import soundwaves from '../public/images/soundwaves.jpg';
import { divinity, sun, synchronicity, undertaking } from '../public/images/albums/';

function Index() {
    return ( 
    <>
        <div className={styles.hero}>
            <Image layout="fill" src={hero} objectFit="cover" />
        </div>
        <div className={styles.cta}>
            <span className={styles.image}>
                <Image layout="fixed" width="200" height="200" src={divinity} />
            </span>
            <span className={styles.image}>
                <Image layout="fixed" width="200" height="200" src={synchronicity} />
            </span>
            <div className={styles.ctaText}>
                <div className={styles.ctaMainText}>
                    Your <em>album</em> and <em>artist</em> name
                </div>
                <div className={`${styles.ctaSubText}`}>
                    on <em>custom</em> album designs
                </div>
                <button class="cta">Shop Now</button>
            </div>
            <span className={styles.image}>
                <Image layout="fixed" width="200" height="200" src={undertaking} />
            </span>
            <span className={styles.image}>
                <Image layout="fixed" width="200" height="200" src={sun} />
            </span>
        </div>
        <div className={styles.soundwaves}>
            <Image layout="responsive" src={soundwaves} />
        </div>
    </>)
}

export default Index;