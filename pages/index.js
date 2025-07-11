import React from 'react';
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
            src="/hussle-logo-top-left.png"
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
        {/* Hero */}
        <motion.section
          id="home"
          className="bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto text-center py-24 px-6">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold"
              whileHover={{ color: '#2563EB' }}
            >
              Streamlining Veterinary Clinics
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Custom CRM & automation built for busy clinics — manage records, bookings, and communications all in one place.
            </motion.p>
            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Button className="mt-8 px-10 py-4 text-lg">
                  Book Free Demo
                </Button>
              </motion.div>
            </a>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          id="features"
          className="max-w-7xl mx-auto py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center">Key Features</h2>
          <div className="mt-12 grid gap-10 grid-cols-1 md:grid-cols-3">
            {[
              { title: 'Pet Records', desc: 'Unified patient profiles with medical history, vaccinations, and billing details.' },
              { title: 'Scheduling', desc: 'Online booking, automated SMS & email reminders to reduce no-shows.' },
              { title: 'Dashboards', desc: 'Real-time insights into appointments, revenue, and patient care metrics.' }
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="transition-shadow duration-200 hover:shadow-lg hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                <Card>
                  <CardContent>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
