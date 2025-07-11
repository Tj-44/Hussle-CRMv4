import React from 'react';
import Logo from '/hussle-logo-top-left.png';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Twitter, GitHub, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function HussleSolutionsLandingPage() {
  const calendlyLink = 'https://calendly.com/taranjit-a/30min';

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <motion.header
        className="bg-white shadow-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <motion.img
            src={Logo}
            alt="Hussle Solutions Logo"
            className="h-10 transition-transform duration-200 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
          <ul className="hidden md:flex space-x-8 font-medium">
            {['home', 'features', 'about', 'contact'].map((section) => (
              <motion.li
                key={section}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href={`#${section}`}
                  className="capitalize transition-colors duration-200 hover:text-blue-600"
                >
                  {section}
                </a>
              </motion.li>
            ))}
          </ul>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
            <Button className="transition-transform duration-200 hover:scale-105">
              Book Free Demo
            </Button>
          </a>
        </nav>
      </motion.header>

      <main>
        {/* ... truncated middle sections for brevity ... */}
        <motion.footer
          className="bg-gray-900 text-gray-400 py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <motion.img
              src={Logo}
              alt="Hussle Solutions Logo"
              className="h-8 mb-4 md:mb-0 transition-transform duration-200 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />
            <div className="space-x-4">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: GitHub, label: 'GitHub' },
                { Icon: Linkedin, label: 'LinkedIn' }
              ].map(({ Icon, label }, idx) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="transition-colors duration-200 hover:text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                >
                  <Icon className="inline h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
          <p className="mt-6 text-center text-sm">© 2025 Hussle Solutions. All rights reserved.</p>
        </motion.footer>
      </main>
    </div>
  );
}
