import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useScrollReveal, scrollVariants } from '../../utils/scrollReveal';
import config from '../../config';
import SocialIcon from '../ui/SocialIcon';

const Contact = () => {
  const { ref, controls } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Message sent successfully! Thank you for reaching out.');
      setFormData({ name: '', email: '', message: '' });

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <motion.div
          ref={ref}
          variants={scrollVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <FaEnvelope />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href={`mailto:${config.email}`} className="text-gray-600 dark:text-gray-300 hover:text-primary">
                    {config.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <FaPhone />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a href={`tel:${config.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-primary">
                    {config.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <FaMapMarkerAlt />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">{config.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {Object.entries(config.socialMedia).map(([platform, url]) => (
                  <a 
                    key={platform} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Connect on ${platform}`}
                    className="h-10 w-10 rounded-full bg-gray-200 dark:bg-dark-light flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <SocialIcon platform={platform} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-light dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-light dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-light dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex justify-center items-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
