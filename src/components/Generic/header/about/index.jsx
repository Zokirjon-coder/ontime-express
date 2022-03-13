import React from 'react'
import { Container } from './styled'
import close from '../../../../assets/icons/Path 582.svg';
import { motion } from 'framer-motion';

const About = ({ action, type }) => {
    const [activeDropDown, setActiveDropDown] = action;
    return (
        <Container as={motion.div} layout type={type} action={String(activeDropDown)}>
            <div className="container">
                <h1>About us</h1>
                <p>
                    Ontime Express Company has the most skilled and dedicated team of professional drivers on the road. Our drivers are our most valued assets and the reason for our growth and success.
                </p>
                <p>
                    Ontime Express LLC team takes great pride in the quality of hassle-free experienced management, dedicated dispatch, qualified drivers, and 24/7 office support, whose consolidated approach is directed to guarantee safe, effective and efficient service.
                </p>
                <p>
                    Our professional team operate daily checking calls, tracking loads, emailing updates and enabling all other communication options according to your unique needs. All in all, we assure your freight to arrive safe and on time.
                </p>
                <button onClick={() => setActiveDropDown(false)} >
                    <img src={close} alt="" />
                </button>
            </div>
        </Container>
    )
}

export default React.memo(About)