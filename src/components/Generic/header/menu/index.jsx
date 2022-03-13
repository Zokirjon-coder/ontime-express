import React from 'react'
import { Container } from './styled'
import close from '../../../../assets/icons/Path 582.svg';
import menu from '../../../../assets/icons/Group 61.svg';
import { motion } from 'framer-motion';

const Menu = ({ action, dropType, changeSection }) => {
    const [activeDropDown, setActiveDropDown] = action;
    const [type, setType] = dropType;
    const closeMenu = () => setActiveDropDown(false);

    const onClick = (section) => {
        closeMenu();
        changeSection(section);
    }

    return (
        <Container as={motion.div} layout type={type} action={String(activeDropDown)}>
            <div className="container">
                <img src={menu} alt="" />

                <div className="menus">
                    <div className="menu1">
                        <div className="menu_item" onClick={() => setType('about')}>About Us</div>
                        <div className="menu_item" onClick={() => onClick('ontime')} >What We Offer</div>
                        <div className="menu_item" onClick={() => onClick('quote')} >Get Quatation</div>
                        <div className="menu_item" ><a href='#'>Company policy</a></div>
                    </div>
                    <div>
                        <div className="menu1">
                            <div className="menu_item" onClick={() => onClick('offer')}>Jobs We Offer</div>
                            <div className="menu_item" onClick={() => onClick('truck')}>Our Trucks</div>
                            <div className="menu_item" onClick={() => onClick('ontime')}>Why drive with us?</div>
                            <div className="menu_item" onClick={() => onClick('join')}>Driver Application</div>
                        </div>
                    </div>
                    <div className='contact'>
                        <div className="flex">
                            <div>Contact</div>
                            <a className='phone' href="tel: + 1 (937) 360-8005">ph: + 1 (937) 360-8005</a>
                            <a className='email' href="mailto:hr@ontimeexpress.org">hr@ontimeexpress.org</a>
                            <span>10432 Balls Ford Road <br />
                                Manassas, VA, US 20109</span>
                        </div>
                    </div>
                </div>

                <button onClick={() => setActiveDropDown(false)} >
                    <img src={close} alt="" />
                </button>
            </div>
        </Container>
    )
}

export default React.memo(Menu)