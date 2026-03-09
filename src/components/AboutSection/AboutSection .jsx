import React from "react";
import "./AboutSection.scss";
import { motion } from 'framer-motion';
import AboutImage1 from '../../assets/New folder/Group 36869 (1).jpg'
import AboutImage2 from '../../assets/New folder/Group 36869.jpg'
import AboutImage3 from '../../assets/New folder/Group 36870.jpg'

import icon1 from '../../assets/New folder (2)/Group.svg'
import icon2 from '../../assets/New folder (2)/fi_3468825.svg'
import icon3 from '../../assets/New folder (2)/fi_535239.svg'


const AboutSection = () => {
    const contentVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: i * 0.15 }
        })
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.6 + i * 0.1 }
        }),
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
    };

    return (
        <section className="about">
            <div className="about__container">

                <motion.div className="about__content" variants={contentVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                    <h2>About Chair Location</h2>

                    <p>
                        “Chair location” is a website where you can search, find and reserve
                        co-working space, including co-working offices, private offices,
                        meeting rooms, and virtual offices near you. It shows the features
                        and amenities this space can provide. Professionals and businesses
                        can then compare all available co-working spaces to find one with
                        the services and facilities that best suit their requirements.
                    </p>

                    <h3>Why Chair Location</h3>

                    <ul>
                        <motion.li
                            custom={0}
                            variants={listItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <img src={icon1} alt="icon" className="list-icon" />
                            More Than (4652) Location
                        </motion.li>
                        <motion.li
                            custom={1}
                            variants={listItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <img src={icon2} alt="icon" className="list-icon" />
                            We Offer All Amenities in Our All Location
                        </motion.li>
                        <motion.li
                            custom={2}
                            variants={listItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <img src={icon3} alt="icon" className="list-icon" />
                            All Kinda Of Supports 24/7
                        </motion.li>
                    </ul>

                    <div className="about__buttons">
                        <motion.button
                            custom={0}
                            variants={buttonVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="whileHover"
                            whileTap="whileTap"
                            viewport={{ once: true, margin: "-100px" }}
                            className="btn btn--primary">
                            View products
                        </motion.button>
                        <motion.button
                            custom={1}
                            variants={buttonVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="whileHover"
                            whileTap="whileTap"
                            viewport={{ once: true, margin: "-100px" }}
                            className="btn btn--secondary">
                            Book now
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div className="about__images" variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                    <img src={AboutImage3} alt="workspace" />
                    <img src={AboutImage2} alt="workspace" />
                    <img src={AboutImage1} alt="workspace" />
                </motion.div>

            </div>
        </section>
    );
};

export default AboutSection;