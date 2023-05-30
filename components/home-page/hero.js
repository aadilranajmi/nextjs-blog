import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/aadil.png"
                    alt="An image showing Mohd Aadil Rana"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Mohd Aadil Rana</h1>
            <p>
                I blog about web development - especially frontend frameworks
                like React & NextJS.
            </p>
        </section>
    );
}

export default Hero;
