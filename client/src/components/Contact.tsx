import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';
import { apiRequest } from '@/lib/queryClient';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  petName: z.string().min(1, { message: 'Please enter your pet\'s name' }),
  breed: z.string().min(1, { message: 'Please enter your pet\'s breed' }),
  service: z.string().min(1, { message: 'Please select a service' }),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      petName: '',
      breed: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Ready to schedule an appointment or have questions? Reach out to us today!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="petName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pet's Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="breed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pet's Breed</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bath">Bath & Brush</SelectItem>
                          <SelectItem value="full-groom">Full Grooming</SelectItem>
                          <SelectItem value="nail-trim">Nail Trimming</SelectItem>
                          <SelectItem value="face-trim">Face Trim</SelectItem>
                          <SelectItem value="deshedding">De-shedding Treatment</SelectItem>
                          <SelectItem value="spa">Deluxe Spa Package</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-4 rounded-md transition-all"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <div className="lg:w-1/2">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-secondary text-xl mr-4 mt-1">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold">Serving Area</h4>
                    <p className="text-gray-600">
                      Dallas-Fort Worth Metroplex<br />
                      Mobile Services - We Come To You!
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary text-xl mr-4 mt-1">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:+12145771010" className="hover:text-primary">(214) 577-1010</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary text-xl mr-4 mt-1">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@fancydogtx.com" className="hover:text-primary">info@fancydogtx.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary text-xl mr-4 mt-1">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="font-bold">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-bold mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-secondary text-2xl" aria-label="Facebook">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-primary hover:text-secondary text-2xl" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-primary hover:text-secondary text-2xl" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-primary hover:text-secondary text-2xl" aria-label="Yelp">
                    <FaYelp />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="h-80 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429593.2770419584!2d-97.48243908394653!3d32.8208570915469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6e122dc807ad%3A0xa4af8bf8dd69acbd!2sDallas-Fort%20Worth%20Metroplex%2C%20TX!5e0!3m2!1sen!2sus!4v1684345776359!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Fancy Dog TX Service Area"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
