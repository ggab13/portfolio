import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { ModelCanvas } from './canvas';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: [value] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // 2S-493aCv6js-cUnV
        // template_hvw1k59
        // service_pv8lqlj

        emailjs
            .send(
                'service_pv8lqlj',
                'template_hvw1k59',
                {
                    from_name: form.name,
                    to_name: 'Gabor',
                    from_email: form.email,
                    to_email: 'gab95or@gmail.com',
                    message: form.message,
                },
                '2S-493aCv6js-cUnV'
            )
            .then(() => {
                setLoading(false);
                alert('Thank you! I will reply asap ! :)');

                setForm(
                    {
                        name: '',
                        email: '',
                        message: '',
                    },
                    (error) => {
                        setLoading(false);
                        console.log(error);

                        alert('Something went wrong. :(');
                    }
                );
            });
    };

    return (
        <div>
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact</h3>
            <div className="xl:mt-12 xl:flex-row  flex-col-reverse flex gap-10 overflow-hidden">
                <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    className="flex-[1] bg-matrix p-8 rounded-2xl"
                >
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col gap-8"
                    >
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your name"
                                className="bg-black py-4 px-6 placeholder:text-white text-white rounded lg outlined-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Email
                            </span>
                            <input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email"
                                className="bg-black py-4 px-6 placeholder:text-white text-white rounded lg outlined-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Message
                            </span>
                            <textarea
                                rows="7"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What would you like to say?"
                                className="bg-black py-4 px-6 placeholder:text-white text-white rounded lg outlined-none border-none font-medium"
                            />
                        </label>

                        <button
                            type="submit"
                            className="bg-black py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                        >
                            Send
                        </button>
                    </form>
                </motion.div>
                <motion.div variants={slideIn('right', 'tween', 0.2, 1)}>
                    <div className="planet">
                        <ModelCanvas />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');
