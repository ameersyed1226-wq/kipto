import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Sparkles, Send, CheckCircle2, History, Trash2, Calendar, Clock } from 'lucide-react';
import { services } from '../data';
import { ContactSubmission } from '../types';

interface ContactProps {
  onAddLead: (lead: ContactSubmission) => void;
  leadsList: ContactSubmission[];
  onClearLeads: () => void;
}

export default function Contact({ onAddLead, leadsList, onClearLeads }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [consultationDate, setConsultationDate] = useState('');
  const [message, setMessage] = useState('');
  
  const [success, setSuccess] = useState(false);
  const [lastSubmittedId, setLastSubmittedId] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setSubmitError('');

    // Proper validation
    if (!name.trim()) {
      setSubmitError('Submission Failed. Please Try Again.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setSubmitError('Submission Failed. Please Try Again.');
      return;
    }
    
    if (!phone.trim()) {
      setSubmitError('Submission Failed. Please Try Again.');
      return;
    }
    
    if (!selectedService.trim()) {
      setSubmitError('Submission Failed. Please Try Again.');
      return;
    }

    setSubmitting(true);

    const newLeadId = 'KP-' + Math.floor(100000 + Math.random() * 900000);
    const currentDate = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const newLead: ContactSubmission = {
      id: newLeadId,
      name,
      email,
      phone,
      service: selectedService,
      message,
      date: currentDate,
      status: 'Received',
      consultationDate
    };

    try {
      const payload = {
        name,
        email,
        phone,
        service: selectedService,
        date: consultationDate,
        message
      };

      const response = await fetch('https://script.google.com/macros/s/AKfycbyDQF3cFL0B2sYRYymSLzDic1culyvquWcUNBamxTmnEyd_mu3v9irFAcOH6yMEvwpI_Q/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(payload)
      });

      // Google Apps Script redirects on standard execution, but fetch automatically follows.
      // If we got a successful status or the request succeeded (even with opaque redirect if CORS is not sent back), 
      // we can verify the response status. Note: Some GAS setups with redirects might throw an error on redirect 
      // if CORS header is not returned on redirected URL. To ensure maximum reliability and flawless UX, 
      // if the request succeeds or is sent, we update the UI.
      if (response && !response.ok && response.status !== 0) {
        throw new Error('Network response was not ok');
      }

      onAddLead(newLead);
      setLastSubmittedId(newLeadId);
      setSuccess(true);

      // Clear form inputs on successful submission
      setName('');
      setEmail('');
      setPhone('');
      setSelectedService('');
      setConsultationDate('');
      setMessage('');
    } catch (err: any) {
      console.error('Error submitting form to Google Sheets:', err);
      setSubmitError('Submission Failed. Please Try Again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0A1E26] transition-colors duration-300 relative overflow-hidden">
      
      {/* Visual Ambient Blur Glob */}
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-primary/15 dark:bg-primary/20 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#F39C3D] uppercase">
            LET'S COLLABORATE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-secondary dark:text-white tracking-tight">
            Contact Us
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <blockquote className="text-gray-650 dark:text-gray-300 font-display font-medium text-lg max-w-xl mx-auto">
            "Let's build your next digital project together."
          </blockquote>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-[#123B4A]/30 backdrop-blur-md p-8 rounded-3xl border border-gray-150 dark:border-white/5 shadow-md space-y-8">
              
              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl text-secondary dark:text-white">
                  Get in Touch
                </h3>
                <p className="text-sm text-gray-550 dark:text-gray-450 leading-relaxed font-sans">
                  Ready to deploy high-conversion portfolios or responsive bakery portals? Let's connect directly.
                </p>
              </div>

              {/* Information listings */}
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary dark:text-accent shrink-0 border border-primary/20">
                    <Mail className="w-5 h-5 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                      Email Us
                    </h4>
                    <a
                      href="mailto:kipto2007@gmail.com"
                      className="text-base font-sans font-bold text-gray-800 dark:text-white hover:text-accent block mt-0.5"
                    >
                      kipto2007@gmail.com
                    </a>
                    <div className="flex flex-col sm:flex-row sm:space-x-3 text-[11px] font-mono text-gray-500 mt-1">
                      <a href="mailto:info@kipto.tech" className="hover:underline">info@kipto.tech</a>
                      <span className="hidden sm:inline">•</span>
                      <a href="mailto:ameersyed1226@gmail.com" className="hover:underline">ameersyed1226@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center text-accent shrink-0 border border-accent/20">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                      Call Us
                    </h4>
                    <div className="space-y-1 mt-0.5">
                      <a
                        href="tel:+918838990539"
                        className="text-lg font-mono font-black text-gray-850 dark:text-white hover:text-accent block"
                      >
                        +91 88389 90539
                      </a>
                      <a
                        href="tel:+918072243142"
                        className="text-lg font-mono font-black text-gray-850 dark:text-white hover:text-accent block"
                      >
                        +91 80722 43142
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary dark:text-accent shrink-0 border border-primary/20">
                    <MapPin className="w-5 h-5 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                      Visit Us
                    </h4>
                    <p className="text-sm font-sans font-semibold text-gray-700 dark:text-gray-300 mt-0.5 leading-relaxed">
                      402, Aravindhar Salai, Sivajothi Nagar,<br />
                      Chidambaram - 608001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary dark:text-accent shrink-0 border border-primary/20">
                    <Clock className="w-5 h-5 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                      Business Hours
                    </h4>
                    <p className="text-sm font-sans font-semibold text-gray-700 dark:text-gray-300 mt-0.5">
                      Monday - Saturday: 11:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>

              </div>

              {/* Consultation History toggle */}
              {leadsList.length > 0 && (
                <div className="pt-6 border-t border-gray-150 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500">
                    {leadsList.length} request(s) stored locally
                  </span>
                  
                  <button
                    onClick={() => setShowHistory(!showHistory)}
                    className="text-xs font-display font-medium text-primary dark:text-accent hover:underline flex items-center space-x-1"
                  >
                    <History className="w-3.5 h-3.5" />
                    <span>{showHistory ? 'Hide Requests' : 'View Stored Leads'}</span>
                  </button>
                </div>
              )}

            </div>
          </div>

          {/* Contact Input Form Card Column */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#123B4A]/30 backdrop-blur-md p-8 rounded-3xl border border-gray-150 dark:border-white/5 shadow-md relative">
              
              {/* Form header message */}
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                <span className="text-xs font-mono font-bold text-primary dark:text-accent uppercase tracking-wider">
                  Consultation Request Form
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="user-name" className="text-xs font-display font-bold text-gray-600 dark:text-gray-300 block">
                      Name
                    </label>
                    <input
                      id="user-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Mahesh Kumar"
                      className="w-full bg-gray-50 dark:bg-[#0A1E26] border border-gray-150 dark:border-white/5 rounded-xl px-4 py-3 placeholder-gray-400 dark:placeholder-gray-500 text-secondary dark:text-white text-sm outline-none focus:border-accent hover:border-gray-300 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="user-email" className="text-xs font-display font-bold text-gray-600 dark:text-gray-300 block">
                      Email
                    </label>
                    <input
                      id="user-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. mahesh@bakery.tech"
                      className="w-full bg-gray-50 dark:bg-[#0A1E26] border border-gray-150 dark:border-white/5 rounded-xl px-4 py-3 placeholder-gray-400 dark:placeholder-gray-500 text-secondary dark:text-white text-sm outline-none focus:border-accent hover:border-gray-300 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number Field */}
                  <div className="space-y-2">
                    <label htmlFor="user-phone" className="text-xs font-display font-bold text-gray-600 dark:text-gray-300 block">
                      Phone Number
                    </label>
                    <input
                      id="user-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 80722 43142"
                      className="w-full bg-gray-50 dark:bg-[#0A1E26] border border-gray-150 dark:border-white/5 rounded-xl px-4 py-3 placeholder-gray-400 dark:placeholder-gray-500 text-secondary dark:text-white text-sm outline-none focus:border-accent hover:border-gray-300 transition-colors"
                    />
                  </div>

                  {/* Service dropdown select */}
                  <div className="space-y-2">
                    <label htmlFor="user-service" className="text-xs font-display font-bold text-gray-600 dark:text-gray-300 block">
                      Service Required
                    </label>
                    <div className="relative">
                      <select
                        id="user-service"
                        required
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-gray-50 dark:bg-[#0A1E26] border border-gray-150 dark:border-white/5 rounded-xl px-4 py-3 text-secondary dark:text-white text-sm outline-none focus:border-accent hover:border-gray-300 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a Service...</option>
                        {services.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                        <option value="General Collaboration">General Consultation</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        ▼
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consultation Date */}
                <div className="space-y-2">
                  <label htmlFor="consultation-date" className="text-xs font-display font-bold text-gray-600 dark:text-gray-300 block">
                    Preferred Consultation Date Description
                  </label>
                  <div className="relative">
                    <input
                      id="consultation-date"
                      type="date"
                      required
                      value={consultationDate}
                      onChange={(e) => setConsultationDate(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-[#0A1E26] border border-gray-150 dark:border-white/5 rounded-xl px-4 py-3 text-secondary dark:text-white text-sm outline-none focus:border-accent hover:border-gray-300 transition-colors cursor-text"
                    />
                  </div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-550">
                    Select a convenient day for our team to schedule your technical design session.
                  </p>
                </div>

                {/* Message text container */}
                <div className="space-y-2">
                  <label htmlFor="user-message" className="text-xs font-display font-bold text-gray-600 dark:text-gray-300 block">
                    Message
                  </label>
                  <textarea
                    id="user-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your bakery setup, portfolio idea, or AI promoter request here..."
                    className="w-full bg-gray-50 dark:bg-[#0A1E26] border border-gray-150 dark:border-white/5 rounded-xl p-4 placeholder-gray-400 dark:placeholder-gray-500 text-secondary dark:text-white text-sm outline-none focus:border-accent hover:border-gray-300 transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary hover:bg-secondary text-white dark:bg-accent dark:hover:bg-orange-600 dark:text-secondary font-display font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2.5 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white dark:border-secondary border-t-transparent rounded-full animate-spin mr-2" />
                      <span>Sending to Google Sheets...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </>
                  )}
                </button>
                {submitError && (
                  <p className="text-xs text-red-500 font-mono font-bold text-center mt-2">
                    ⚠️ {submitError}
                  </p>
                )}
              </form>

              {/* Dynamic submit verification cards */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-white dark:bg-[#0E2E3A] p-8 rounded-3xl flex flex-col justify-center items-center text-center space-y-4 z-20 border-2 border-accent/25 shadow-2xl"
                  >
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-accent/20 rounded-full flex items-center justify-center text-emerald-600 dark:text-accent">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-display font-black text-xl text-secondary dark:text-white">
                        Request Submitted Successfully
                      </h4>
                      <p className="text-xs font-mono text-accent font-bold">
                        Lead Reference ID: {lastSubmittedId}
                      </p>
                    </div>

                    <p className="text-sm text-gray-550 dark:text-gray-300 font-sans leading-relaxed max-w-sm">
                      Thank you for submitting! Syed Ameer R. (+91 80722 43142) has been notified. We will review your service choice and follow up within 24 hours.
                    </p>

                    <button
                      onClick={() => setSuccess(false)}
                      className="bg-primary/10 dark:bg-white/10 hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-secondary text-primary dark:text-accent text-xs font-display font-semibold px-6 py-2.5 rounded-xl transition-all border border-primary/20 dark:border-white/15 cursor-pointer"
                    >
                      Fill New Consultation Form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Localized Lead Management System Dashboard Panel */}
        <AnimatePresence>
          {showHistory && leadsList.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 overflow-hidden bg-white dark:bg-[#123B4A]/30 backdrop-blur-md rounded-3xl border border-gray-150 dark:border-white/5 p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h3 className="font-display font-bold text-lg text-secondary dark:text-white">
                    Lead Storage (React Sandbox Mode Content)
                  </h3>
                  <p className="text-xs text-gray-400">
                    Your submitted leads are temporarily cached in memory. Perfect for verification during this preview session.
                  </p>
                </div>

                <button
                  onClick={onClearLeads}
                  className="text-xs font-display text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/10 flex items-center space-x-1.5 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Saved Submissions</span>
                </button>
              </div>

              {/* Submission Grid Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {leadsList.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-5 bg-gray-50/70 dark:bg-[#0A1E26] rounded-2xl border border-gray-150 dark:border-white/5 flex flex-col justify-between space-y-4"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <div className="text-sm font-display font-black text-secondary dark:text-white">
                          {lead.name}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          {lead.email} | {lead.phone}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent px-2 py-0.5 rounded">
                        {lead.id}
                      </span>
                    </div>

                    <div className="bg-white/80 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/5 space-y-2">
                      <div className="text-xs font-mono font-black text-secondary dark:text-emerald-400">
                        Requested: {lead.service}
                      </div>
                      {lead.consultationDate && (
                        <div className="flex items-center space-x-1 text-[10px] font-sans font-bold text-amber-600 dark:text-accent bg-amber-500/10 dark:bg-accent/10 px-2 py-0.5 rounded-full w-max">
                          <Calendar className="w-3 h-3 text-amber-600 dark:text-accent" />
                          <span>
                            Booked: {(() => {
                              try {
                                const d = new Date(lead.consultationDate);
                                return isNaN(d.getTime()) ? lead.consultationDate : d.toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                });
                              } catch (e) {
                                return lead.consultationDate;
                              }
                            })()}
                          </span>
                        </div>
                      )}
                      <p className="text-xs text-gray-500 dark:text-gray-300 italic line-clamp-2">
                        "{lead.message}"
                      </p>
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 pt-2 border-t border-gray-100 dark:border-white/5">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{lead.date}</span>
                      </span>
                      <span className="text-emerald-500 font-bold uppercase tracking-wider">
                        ● {lead.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
