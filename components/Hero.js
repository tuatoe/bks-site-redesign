import styles from '../styles/Hero.module.scss';
import Header from './Header';

const Hero = ({ }) => {
    return (
        <section className={`section ${styles.hero}`}>
            <Header />
        </section>
    )
}
export default Hero;