import { motion } from 'framer-motion';
import React from 'react';

import { SectionWrapper } from '../../hoc';
import { fadeIn, textVariant } from '../../utils/motion';
import { testimonials } from '../Constants/index';
import { styles } from './styles';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-gray-100 p-10 rounded-3xl w-[320px] "
  >
    <p className="text-gray-900 font-gray text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-gray-900 tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-gray-900 font-medium text-[16px]">
            <span className="text-blue-600">@</span> {name}
          </p>
          <p className="mt-1 text-gray-500 text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-gray-300 rounded-[20px]`}>
      <div
        className={`bg-gray-400 rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');