'use client';

import { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { FaGithub, FaTelegram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function ContactPage() {
  const { lang } = useContext(LanguageContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {lang === 'en' ? 'Get In Touch' : 'Свяжитесь со мной'}
            </h1>
            <p className="text-lg text-gray-300">
              {lang === 'en' ? 'Have a project? Let\'s talk about it.' : 'Есть проект? Давайте об этом поговорим.'}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {lang === 'en' ? 'Send me a message' : 'Отправьте сообщение'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {lang === 'en' ? 'Name' : 'Имя'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
                    placeholder={lang === 'en' ? 'Your name' : 'Ваше имя'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {lang === 'en' ? 'Email' : 'Email'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
                    placeholder={lang === 'en' ? 'your@email.com' : 'ваш@email.com'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {lang === 'en' ? 'Message' : 'Сообщение'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 bg-white/10 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50 resize-none"
                    placeholder={lang === 'en' ? 'Your message...' : 'Ваше сообщение...'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200"
                >
                  {lang === 'en' ? 'Send' : 'Отправить'}
                </button>

                {submitted && (
                  <div className="text-center text-green-400 font-medium">
                    {lang === 'en' ? 'Message sent!' : 'Сообщение отправлено!'}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Direct Contacts */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {lang === 'en' ? 'Contact Info' : 'Контактная информация'}
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{lang === 'en' ? 'Email' : 'Email'}</p>
                    <a href="mailto:your@email.com" className="text-blue-400 hover:text-blue-300 font-medium">
                      your@email.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{lang === 'en' ? 'Phone' : 'Телефон'}</p>
                    <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300 font-medium">
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{lang === 'en' ? 'Location' : 'Местоположение'}</p>
                    <p className="text-gray-300 font-medium">{lang === 'en' ? 'City, Country' : 'Город, Страна'}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {lang === 'en' ? 'Follow Me' : 'Следите за мной'}
                </h2>
                <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 border border-gray-600/50 rounded-lg hover:scale-110 transition-all">
                    <FaGithub size={24} className="text-blue-400" />
                  </a>
                  <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 border border-gray-600/50 rounded-lg hover:scale-110 transition-all">
                    <FaTelegram size={24} className="text-blue-400" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 border border-gray-600/50 rounded-lg hover:scale-110 transition-all">
                    <FaLinkedin size={24} className="text-blue-400" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 border border-gray-600/50 rounded-lg hover:scale-110 transition-all">
                    <FaTwitter size={24} className="text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
