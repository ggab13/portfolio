import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        contentStyle={{ background: '#009572', color: '#FFFFFF' }}
        contentArrowStyle={{ borderRight: '10px solid #ffffff' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className=" z-20 flex justify-center items-center w-full h-full">
                <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[85%] h-[85%] object-contain"
                />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">
                {experience.title}
            </h3>
            <p className="text-[16px] font-semibold">
                {experience.company_name}
            </p>
            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    </VerticalTimelineElement>
);

const Experience = () => {
    return (
        <>
            <motion.div>
                <p className={styles.sectionSubText}>What I have done </p>
                <h2 className={styles.sectionHeadText}>Work experiences</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, 'work');
