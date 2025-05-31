
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
      duration: 5000,
    });

    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden dark:bg-neo-dark-bg">
      {/* Background elements */}
      <div className="absolute w-96 h-96 bg-neo-yellow/10 dark:bg-neo-dark-yellow/10 rounded-full blur-xl top-20 -right-20"></div>
      <div className="absolute w-80 h-80 bg-neo-red/10 dark:bg-neo-dark-red/10 rounded-full blur-xl bottom-20 -left-20"></div>

      {/* Neo-brutalist decorative elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-neo-blue/10 dark:bg-neo-dark-blue/10 border-2 border-neo-black/20 dark:border-neo-dark-border/20 transform -rotate-12"></div>
      <div className="absolute top-1/2 left-5 w-20 h-20 bg-neo-yellow/10 dark:bg-neo-dark-yellow/10 border-2 border-neo-black/20 dark:border-neo-dark-border/20 transform rotate-45"></div>
      <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-neo-red/10 dark:bg-neo-dark-red/10 border-2 border-neo-black/20 dark:border-neo-dark-border/20 rounded-full"></div>

      <div className="container-xl relative z-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-block bg-neo-yellow dark:bg-neo-dark-yellow px-4 py-1 border-4 border-neo-black dark:border-neo-dark-border transform -rotate-1 mb-4">
            <h2 className="font-display font-bold text-2xl text-neo-black dark:text-neo-dark-blue-deep">GET IN TOUCH</h2>
          </div>
          <h3 className="main-heading mb-6">Let's <span className="text-neo-red dark:text-neo-dark-red">Connect</span></h3>
          <p className="text-xl max-w-2xl dark:text-gray-300">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Info - Made responsive */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="neo-box p-4 md:p-8 h-full overflow-hidden">
              <h4 className="text-xl md:text-2xl font-display font-bold mb-4 md:mb-6 dark:text-white">Contact Information</h4>

              <div className="space-y-4 md:space-y-8">
                <motion.div
                  className="flex items-start gap-2 md:gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="p-2 md:p-3 bg-neo-blue dark:bg-neo-dark-blue border-2 md:border-4 border-neo-black dark:border-neo-dark-border flex-shrink-0">
                    <Mail className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-display font-bold dark:text-white text-sm md:text-base">Email</h5>
                    <a href="mailto:dhritiman16chhaya@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-neo-red dark:hover:text-neo-dark-red transition-colors text-xs md:text-sm truncate block">
                      dhritiman16chhaya@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-2 md:gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="p-2 md:p-3 bg-neo-red dark:bg-neo-dark-red border-2 md:border-4 border-neo-black dark:border-neo-dark-border flex-shrink-0">
                    <Phone className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold dark:text-white text-sm md:text-base">Phone</h5>
                    <a href="tel:+919933586072" className="text-gray-700 dark:text-gray-300 hover:text-neo-red dark:hover:text-neo-dark-red transition-colors text-xs md:text-sm">
                      +919933586072
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-2 md:gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="p-2 md:p-3 bg-neo-yellow dark:bg-neo-dark-yellow border-2 md:border-4 border-neo-black dark:border-neo-dark-border flex-shrink-0">
                    <MessageSquare className="h-4 w-4 md:h-6 md:w-6 text-neo-black dark:text-neo-dark-blue-deep" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold dark:text-white text-sm md:text-base">Social Media</h5>
                    <div className="flex gap-2 md:gap-4 mt-2 flex-wrap">
                      <a
                        href="https://x.com/Itz_Dhriti_007?t=ZNFjquDfVJX26Wem378TkQ&s=09"
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border-2 md:border-4 border-neo-black dark:border-neo-dark-border bg-white dark:bg-neo-dark-box hover:bg-neo-blue dark:hover:bg-neo-dark-blue hover:text-white transition-colors"
                        aria-label="Twitter"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </a>
                      <a
                        href="https://www.instagram.com/bat_sign_on?igsh=MTZxNXMxY2lndDQ4dg=="
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border-2 md:border-4 border-neo-black dark:border-neo-dark-border bg-white dark:bg-neo-dark-box hover:bg-neo-red dark:hover:bg-neo-dark-red hover:text-white transition-colors"
                        aria-label="Instagram"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/dhritiman-bhattacharjee-b399a5292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border-2 md:border-4 border-neo-black dark:border-neo-dark-border bg-white dark:bg-neo-dark-box hover:bg-neo-blue dark:hover:bg-neo-dark-blue hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="neo-box p-4 md:p-8">
              <h4 className="text-xl md:text-2xl font-display font-bold mb-4 md:mb-6 dark:text-white">
                Send Me a Message
              </h4>

              <form
                action="https://formspree.io/f/xanoqzby"
                method="POST"
                className="space-y-4 md:space-y-6"
              >
                {/* Optional: Disable captcha and redirect to thank-you page */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://https://dhriti-designer-portfolio.vercel.app//thanks" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-display font-bold dark:text-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="border-2 md:border-4 border-neo-black dark:border-neo-dark-border p-2 md:p-3 h-auto focus:ring-neo-blue dark:focus:ring-neo-dark-blue rounded-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-display font-bold dark:text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="border-2 md:border-4 border-neo-black dark:border-neo-dark-border p-2 md:p-3 h-auto focus:ring-neo-blue dark:focus:ring-neo-dark-blue rounded-md"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-display font-bold dark:text-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    required
                    className="border-2 md:border-4 border-neo-black dark:border-neo-dark-border p-2 md:p-3 h-auto focus:ring-neo-blue dark:focus:ring-neo-dark-blue rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-display font-bold dark:text-white">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    required
                    rows={5}
                    className="w-full border-2 md:border-4 border-neo-black dark:border-neo-dark-border p-2 md:p-3 focus:ring-neo-blue dark:focus:ring-neo-dark-blue dark:bg-neo-dark-box dark:text-white rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="neo-button flex items-center gap-2 group"
                >
                  Send Message <Send className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
