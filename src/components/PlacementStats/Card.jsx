
import React from 'react';
import { motion } from 'framer-motion';
const Card = ({ image, name, batch, branch, testimonial }) => {
  return (
    <motion.div
      className="shadow-lg rounded-lg overflow-hidden w-full px-2 bg-white/70"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={name} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 mb-2">Batch: {batch}</p>
        <p className="text-gray-600 mb-4">Branch: {branch}</p>
        <p className="text-gray-800">{testimonial}</p>
      </div>
    </motion.div>
  );
};

const CardList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 justify-items-center">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

const CardView = () => {
  const data = [
    {
      image: 'https://example.com/image1.jpg',
      name: 'John Smith',
      batch: 2019,
      branch: 'Computer Science',
      testimonial:
        'I had a wonderful learning experience during my time at the university. The faculty members were highly knowledgeable and supportive. The practical exposure provided in the Computer Science program helped me develop strong technical skills. I\'m grateful for the opportunities I received and the lifelong friendships I made.'
    },
    {
      image: 'https://example.com/image2.jpg',
      name: 'Sarah Johnson',
      batch: 2020,
      branch: 'Electrical Engineering',
      testimonial:
        'Studying Electrical Engineering at this university was an amazing journey. The coursework was challenging yet rewarding, and the professors were always available to clarify doubts. The hands-on projects allowed me to apply theoretical concepts and enhance my problem-solving abilities. I\'m proud to be an alumnus of this institution.'
    }
  ];

  return (
    <div className="container mx-auto py-8">
              <CardList data={data} />
    </div>
  );
};

export default CardView;