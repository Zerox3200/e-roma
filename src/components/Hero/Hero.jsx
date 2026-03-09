import React, { useState } from "react";
import "./Hero.scss";
import { motion } from 'framer-motion';
import icon1 from '../../assets/icons/co-working.svg'
import icon2 from '../../assets/icons/conference.svg'
import icon3 from '../../assets/icons/video-call.svg'
import icon4 from '../../assets/icons/workplace.svg'

const Hero = () => {
    const [selectedOption, setSelectedOption] = useState("Shared Space");
    const [searchQuery, setSearchQuery] = useState("");

    const contentVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
        }
    };

    const buttonContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return <section className="hero">
        <motion.div className="hero__content" variants={contentVariants} initial="hidden" animate="visible">
            <h1>Office That Fit You</h1>
            <p>Creative Way To Work</p>
        </motion.div>
        <motion.div className="hero-form" variants={formVariants} initial="hidden" animate="visible">
            <motion.div className="hero-form-s1" variants={buttonContainerVariants} initial="hidden" animate="visible">
                <motion.button
                    variants={buttonVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`office-btn ${selectedOption === "Shared Space" ? "active" : ""}`}
                    onClick={() => setSelectedOption("Shared Space")}
                >
                    <img src={icon1} alt="Shared Space" className="btn-icon" />
                    Shared Space
                </motion.button>
                <motion.button
                    variants={buttonVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`office-btn ${selectedOption === "Private Offices" ? "active" : ""}`}
                    onClick={() => setSelectedOption("Private Offices")}
                >
                    <img src={icon4} alt="Private Offices" className="btn-icon" />
                    Private Offices
                </motion.button>
                <motion.button
                    variants={buttonVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`office-btn ${selectedOption === "Meeting Rooms" ? "active" : ""}`}
                    onClick={() => setSelectedOption("Meeting Rooms")}
                >
                    <img src={icon2} alt="Meeting Rooms" className="btn-icon" />
                    Meeting Rooms
                </motion.button>
                <motion.button
                    variants={buttonVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`office-btn ${selectedOption === "Virtual Offices" ? "active" : ""}`}
                    onClick={() => setSelectedOption("Virtual Offices")}
                >
                    <img src={icon3} alt="Virtual Offices" className="btn-icon" />
                    Virtual Offices
                </motion.button>
            </motion.div>
            <div className="hero-form-s2">
                <div className="hero-form-s2-inner">
                    <input
                        type="text"
                        placeholder="Search by location, distance, or amenities..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="search-btn">Search</button>
                </div>
            </div>
        </motion.div>
    </section>
};

export default Hero;