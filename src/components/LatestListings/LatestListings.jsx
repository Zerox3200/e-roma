import React, { useState } from 'react'
import './LatestListings.scss'
import { motion } from 'framer-motion'
import CardImage from '../../assets/pexels-pixabay-265072.jpg'
import { FiHeart, FiShare2 } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

import Person from '../../assets/icons/fi_17848968.svg'
import OpenCalender from '../../assets/icons/fi_16350271.svg'
import CloseCalender from '../../assets/icons/fi_16350271 (1).svg'
import { FaShare } from "react-icons/fa";


const LatestListings = () => {
    const [listings] = useState([
        {
            id: 1,
            image: CardImage,
            title: 'Modern Co-working Space',
            description: 'Spacious and fully equipped co-working area with high-speed internet',
            capacity: '12 per',
            status: 'open',
            price: '20',
            currency: 'SAR',
            period: 'Hour'
        },
        {
            id: 2,
            image: CardImage,
            title: 'Executive Meeting Room',
            description: 'Professional meeting space with video conferencing equipment',
            capacity: '6 per',
            status: 'closed',
            price: '25',
            currency: 'SAR',
            period: 'Hour'
        },
        {
            id: 3,
            image: CardImage,
            title: 'Executive Meeting Room',
            description: 'Professional meeting space with video conferencing equipment',
            capacity: '6 per',
            status: 'closed',
            price: '25',
            currency: 'SAR',
            period: 'Hour'
        },
        {
            id: 4,
            image: CardImage,
            title: 'Executive Meeting Room',
            description: 'Professional meeting space with video conferencing equipment',
            capacity: '6 per',
            status: 'closed',
            price: '25',
            currency: 'SAR',
            period: 'Hour'
        }
    ])

    const headerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const gridContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        hoverScale: {
            y: -8,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.section className="latest-listings" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
            <motion.div className="latest-listings__header" variants={headerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <h2 className="latest-listings__title">Latest Listings</h2>
                <p className="latest-listings__subtitle">Check our latest listings</p>
            </motion.div>

            <motion.div className="latest-listings__grid" variants={gridContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                {listings.map((listing) => (
                    <motion.div
                        key={listing.id}
                        className="listing-card"
                        variants={cardVariants}
                        whileHover="hoverScale"
                    >
                        <div className="listing-card__image-wrapper">
                            <img src={listing.image} alt={listing.title} className="listing-card__image" />
                            <span className={`listing-card__status ${listing.status}`}>
                                {listing.status === 'open' ? 'Available' : 'Not available'}
                            </span>
                            <div className="listing-card__actions">
                                <button className="action-btn heart-btn">
                                    <FiHeart size={20} />
                                </button>
                                <button className="action-btn share-btn">
                                    <FaShare size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="listing-card__topDesc">
                            <div className="listing-card__badge">Shared area</div>
                            <div className="listing-card__rating">
                                <AiFillStar size={16} className="star-icon" />
                                <span style={{ fontSize: "16px" }}>4.9 </span>
                            </div>
                        </div>
                        <div className="listing-card__content">
                            <h3 className="listing-card__title">{listing.title}</h3>
                            <p className="listing-card__description">{listing.description}</p>

                            <div className="listing-card__icons">
                                <img src={Person} alt="person" className="icon-image" />
                                <span>Per</span>
                            </div>

                            <div className="listing-card__icons">
                                <img src={listing.status === 'open' ? OpenCalender : CloseCalender} alt="calendar" className="icon-image" />
                                <span>{listing.status === 'open' ? 'Open' : 'Closed'}</span>
                            </div>
                        </div>

                        <div className="listing-card__footer">
                            <div className="listing-card__price">
                                <span className="price-label">Starts from {listing.price}{" "}{listing.currency}/ {listing.period}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default LatestListings
