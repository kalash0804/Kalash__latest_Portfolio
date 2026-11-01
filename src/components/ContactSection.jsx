import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, FileDown, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';

export const ContactSection = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'QA & Software Testing',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const contactEmail = 'kalashgupta2001@gmail.com';
  const contactPhone = '7067119268';
  const linkedInUrl = 'https://www.linkedin.com/in/kalash-gupta08';
  const gitHubUrl = 'https://github.com/kalash0804';
  const locationText = 'Durg, Chhattisgarh, India';

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    return errs;
  };

  const getEmailPayload = () => {
    const subjectText = `[Portfolio Inquiry] ${formData.category} - ${formData.subject || 'Opportunity / Discussion'}`;
    const bodyText = `Hello Kalash,\n\nI am reaching out regarding your portfolio:\n\nName: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent via Kalash Gupta Portfolio Website`;
    return { subjectText, bodyText };
  };

  const getMailtoUrl = () => {
    const { subjectText, bodyText } = getEmailPayload();
    return `mailto:${contactEmail}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
  };

  const getGmailUrl = () => {
    const { subjectText, bodyText } = getEmailPayload();
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
  };

  const getOutlookUrl = () => {
    const { subjectText, bodyText } = getEmailPayload();
    return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(contactEmail)}&subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
  };

  const triggerLaunch = (target = 'gmail') => {
    if (target === 'outlook') {
      window.open(getOutlookUrl(), '_blank', 'noopener,noreferrer');
    } else if (target === 'default') {
      const mailtoLink = document.createElement('a');
      mailtoLink.href = getMailtoUrl();
      mailtoLink.click();
    } else {
      // Default is Gmail
      window.open(getGmailUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);

      // Default mail is Gmail
      triggerLaunch('gmail');

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#C6FF4D', '#A78BFA', '#74E3A1']
          });
        } catch (e) {
          // graceful fallback
        }
      }, 500);
    }
  };

  const handleDirectWebmail = (provider) => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      triggerLaunch(provider);
      setSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#0B0D0F] relative border-b border-[#2A3036]/60"
      aria-label="Contact Kalash Gupta"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-[#C6FF4D] font-bold tracking-widest uppercase">
            06 / GET IN TOUCH
          </span>
          <span className="h-px flex-1 max-w-xs bg-[#2A3036]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline, Copy & Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F4F5F2] tracking-tight leading-[1.12]">
                Have a product to build or test?
                <br />
                <span className="text-[#C6FF4D]">Let's collaborate.</span>
              </h2>
              <p className="font-body text-base sm:text-lg text-[#A0A7AF] mt-4 leading-relaxed">
                Available for roles in Quality Assurance, UI/UX Design, and Frontend Development.
                Let's discuss how we can build reliable, user-friendly digital experiences.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email with copy button */}
              <div className="p-4 rounded-xl bg-[#121519] border border-[#2A3036] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#191E23] flex items-center justify-center text-[#C6FF4D] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#A0A7AF] uppercase block">Direct Email</span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-[#F4F5F2] hover:text-[#C6FF4D] transition-colors truncate block"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-[#191E23] border border-[#2A3036] text-[#A0A7AF] hover:text-[#F4F5F2] hover:border-[#C6FF4D] transition-colors shrink-0 flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#74E3A1]" />
                      <span className="text-[#74E3A1]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone with copy button */}
              <div className="p-4 rounded-xl bg-[#121519] border border-[#2A3036] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#191E23] flex items-center justify-center text-[#74E3A1] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#A0A7AF] uppercase block">Direct Phone</span>
                    <a
                      href={`tel:+91${contactPhone}`}
                      className="text-[#F4F5F2] hover:text-[#C6FF4D] transition-colors truncate block"
                    >
                      +91 {contactPhone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1.5 rounded-lg bg-[#191E23] border border-[#2A3036] text-[#A0A7AF] hover:text-[#F4F5F2] hover:border-[#C6FF4D] transition-colors shrink-0 flex items-center gap-1.5"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#74E3A1]" />
                      <span className="text-[#74E3A1]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#121519] border border-[#2A3036] hover:border-[#3E4752] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#191E23] flex items-center justify-center text-[#74E3A1]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A0A7AF] uppercase block">LinkedIn Profile</span>
                    <span className="text-[#F4F5F2] group-hover:text-[#C6FF4D] transition-colors">
                      linkedin.com/in/kalash-gupta08
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-[#C6FF4D]">&rarr;</span>
              </a>

              {/* GitHub */}
              <a
                href={gitHubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#121519] border border-[#2A3036] hover:border-[#3E4752] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#191E23] flex items-center justify-center text-[#A78BFA]">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A0A7AF] uppercase block">GitHub Profile</span>
                    <span className="text-[#F4F5F2] group-hover:text-[#C6FF4D] transition-colors">
                      github.com/kalash0804
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-[#C6FF4D]">&rarr;</span>
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#121519] border border-[#2A3036] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#191E23] flex items-center justify-center text-[#FBBF24]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#A0A7AF] uppercase block">Location & Timezone</span>
                  <span className="text-[#F4F5F2]">{locationText} (IST / UTC+05:30)</span>
                </div>
              </div>
            </div>

            {/* Resume Action */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="w-full py-3 rounded-xl bg-[#121519] border border-[#2A3036] hover:border-[#C6FF4D] text-xs font-mono text-[#F4F5F2] transition-colors flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4 text-[#C6FF4D]" />
                <span>View Complete Printable Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121519] border border-[#2A3036] shadow-2xl relative">
              {submitted ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#74E3A1]/10 border border-[#74E3A1]/30 text-[#74E3A1] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-extrabold text-2xl text-[#F4F5F2]">
                      Opening Your Email App...
                    </h3>
                    <p className="font-body text-sm text-[#A0A7AF] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#C6FF4D]">{formData.name}</span>! Your pre-filled message has been generated for <strong className="text-[#F4F5F2]">{contactEmail}</strong>.
                    </p>
                  </div>

                  {/* Summary preview of the prefilled message */}
                  <div className="text-left bg-[#0B0D0F] border border-[#2A3036] rounded-xl p-4 font-mono text-xs text-[#A0A7AF] space-y-1.5 max-w-lg mx-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-[#C6FF4D] font-bold">To:</span>
                      <span className="text-[#F4F5F2]">{contactEmail}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#74E3A1] font-bold">Subject:</span>
                      <span className="text-[#F4F5F2]">{getEmailPayload().subjectText}</span>
                    </div>
                    <div className="pt-2 border-t border-[#2A3036]/60 text-[#A0A7AF] italic line-clamp-3">
                      "{formData.message}"
                    </div>
                  </div>

                  <p className="font-mono text-[11px] text-[#A0A7AF]">
                    If your email client didn't open automatically, choose an option below:
                  </p>

                  <div className="pt-1 flex flex-wrap justify-center gap-2.5">
                    <button
                      onClick={() => triggerLaunch('gmail')}
                      className="px-4 py-2.5 rounded-xl bg-[#C6FF4D] text-[#0B0D0F] font-heading font-bold text-xs flex items-center gap-2 hover:bg-[#b8f53a] transition-colors cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Gmail (Default)</span>
                    </button>
                    <button
                      onClick={() => triggerLaunch('outlook')}
                      className="px-4 py-2.5 rounded-xl bg-[#191E23] text-xs font-mono text-[#F4F5F2] hover:text-[#74E3A1] border border-[#2A3036] hover:border-[#74E3A1] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#74E3A1]" />
                      <span>Open in Outlook (Web)</span>
                    </button>
                    <button
                      onClick={() => triggerLaunch('default')}
                      className="px-4 py-2.5 rounded-xl bg-[#191E23] text-xs font-mono text-[#F4F5F2] hover:text-[#C6FF4D] border border-[#2A3036] hover:border-[#C6FF4D] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#C6FF4D]" />
                      <span>Open Desktop Mail App</span>
                    </button>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          subject: '',
                          category: 'QA & Software Testing',
                          message: ''
                        });
                      }}
                      className="text-xs font-mono text-[#A0A7AF] hover:text-[#F4F5F2] underline underline-offset-4 cursor-pointer"
                    >
                      Send Another Mail
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="flex items-center justify-between border-b border-[#2A3036] pb-3">
                    <span className="font-mono text-xs uppercase font-bold text-[#F4F5F2] flex items-center gap-2">
                      <Send className="w-3.5 h-3.5 text-[#C6FF4D]" />
                      Initiate Direct Communication
                    </span>
                    <span className="font-mono text-[10px] text-[#74E3A1]">
                      READY TO TRANSMIT
                    </span>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-[#A0A7AF] block">
                        Your Name <span className="text-[#C6FF4D]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#0B0D0F] border text-sm text-[#F4F5F2] placeholder-[#A0A7AF]/50 focus:outline-none transition-colors ${
                          errors.name ? 'border-[#EF4444]' : 'border-[#2A3036] focus:border-[#C6FF4D]'
                        }`}
                      />
                      {errors.name && (
                        <span className="font-mono text-[10px] text-[#F87171] block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-[#A0A7AF] block">
                        Your Email <span className="text-[#C6FF4D]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#0B0D0F] border text-sm text-[#F4F5F2] placeholder-[#A0A7AF]/50 focus:outline-none transition-colors ${
                          errors.email ? 'border-[#EF4444]' : 'border-[#2A3036] focus:border-[#C6FF4D]'
                        }`}
                      />
                      {errors.email && (
                        <span className="font-mono text-[10px] text-[#F87171] block">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject and Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-[#A0A7AF] block">
                        Subject Line <span className="text-[#C6FF4D]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Discussion / Opportunity"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#0B0D0F] border text-sm text-[#F4F5F2] placeholder-[#A0A7AF]/50 focus:outline-none transition-colors ${
                          errors.subject ? 'border-[#EF4444]' : 'border-[#2A3036] focus:border-[#C6FF4D]'
                        }`}
                      />
                      {errors.subject && (
                        <span className="font-mono text-[10px] text-[#F87171] block">
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-[#A0A7AF] block">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B0D0F] border border-[#2A3036] text-sm text-[#F4F5F2] focus:outline-none focus:border-[#C6FF4D] transition-colors"
                      >
                        <option value="QA & Software Testing">QA & Software Testing</option>
                        <option value="UI/UX Design (Figma)">UI/UX Design (Figma)</option>
                        <option value="Frontend Development (React / Tailwind)">
                          Frontend Development (React / Tailwind)
                        </option>
                        <option value="ServiceNow Platform Development">
                          ServiceNow Platform Development
                        </option>
                        <option value="Full-time Opportunity">Full-time Opportunity</option>
                        <option value="General Conversation">General Conversation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#A0A7AF] block">
                      Message Details <span className="text-[#C6FF4D]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your application, QA requirements, or collaboration goals..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0B0D0F] border text-sm text-[#F4F5F2] placeholder-[#A0A7AF]/50 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-[#EF4444]' : 'border-[#2A3036] focus:border-[#C6FF4D]'
                      }`}
                    />
                    {errors.message && (
                      <span className="font-mono text-[10px] text-[#F87171] block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#C6FF4D] text-[#0B0D0F] font-heading font-extrabold text-sm tracking-wide hover:bg-[#b8f53a] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#C6FF4D]/15 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Opening Gmail...</span>
                      ) : (
                        <>
                          <span>Send Mail</span>
                          <Send className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 font-mono text-[11px] text-[#A0A7AF]">
                      <span className="text-center sm:text-left">
                        Opens Gmail with your pre-filled message for Kalash.
                      </span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="text-[10px] text-[#A0A7AF]/70">Prefer Outlook or Mail App?</span>
                        <button
                          type="button"
                          onClick={() => handleDirectWebmail('outlook')}
                          className="px-2 py-0.5 rounded bg-[#191E23] border border-[#2A3036] hover:border-[#74E3A1] hover:text-[#74E3A1] text-[11px] transition-colors cursor-pointer"
                        >
                          Outlook
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDirectWebmail('default')}
                          className="px-2 py-0.5 rounded bg-[#191E23] border border-[#2A3036] hover:border-[#C6FF4D] hover:text-[#C6FF4D] text-[11px] transition-colors cursor-pointer"
                        >
                          Mail App
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
