'use client' // Required for form handling

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { MapPin, Mail, Phone } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
      message: "Please enter a valid email address."
  }),
  phone: z.string().optional(),
  inquiryType: z.enum(["development_investment", "custom_home", "property_inquiry", "general"]),
  message: z.string().min(10, {
      message: "Message must be at least 10 characters."
  }).max(1000, { message: "Message must be less than 1000 characters."}),
})

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "general",
      message: "",
    },
  })

  // TODO: Implement actual form submission logic (e.g., send to API endpoint)
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Simulate API call
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    })
    form.reset(); // Reset form after successful submission
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          We look forward to hearing from you. Please reach out with any inquiries or to discuss your next project in Cabo San Lucas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Send Us a Message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid sm:grid-cols-2 gap-6">
                 <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
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
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="inquiryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reason for Inquiry</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a reason" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="development_investment">Development & Investment</SelectItem>
                          <SelectItem value="custom_home">Custom Home Creation</SelectItem>
                          <SelectItem value="property_inquiry">Property Inquiry</SelectItem>
                          <SelectItem value="general">General Question</SelectItem>
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
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us how we can help..."
                        className="resize-none min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg">Send Message</Button>
            </form>
          </Form>
        </div>

        {/* Contact Details & Map */}
        <div className="space-y-8">
           <div>
                <h2 className="text-2xl md:text-3xl font-serif mb-6">Our Location</h2>
                <div className="space-y-3 text-muted-foreground">
                     <p className="flex items-start">
                        <MapPin className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0"/>
                        <span>123 Luxury Avenue<br/>Cabo San Lucas, BCS, Mexico 23450</span>
                    </p>
                     <p className="flex items-center">
                        <Mail className="w-5 h-5 mr-3 text-primary flex-shrink-0"/>
                        <a href="mailto:info@surfside.re" className="hover:text-primary transition-colors">info@surfside.re</a>
                    </p>
                    <p className="flex items-center">
                        <Phone className="w-5 h-5 mr-3 text-primary flex-shrink-0"/>
                        <a href="tel:+521234567890" className="hover:text-primary transition-colors">+52 (123) 456-7890</a>
                    </p>
                </div>
           </div>

            <div>
                <h3 className="text-xl font-serif mb-4">Find Us Here</h3>
                {/* Placeholder for Map */}
                <div className="aspect-video bg-secondary rounded-lg border flex items-center justify-center text-muted-foreground">
                    [Map Integration Placeholder]
                    {/* Use @vis.gl/react-google-maps or similar library here */}
                </div>
            </div>

             <div>
                 <h3 className="text-xl font-serif mb-4">Business Hours</h3>
                 <p className="text-muted-foreground text-sm">Monday - Friday: 9:00 AM - 5:00 PM (MST)</p>
                 <p className="text-muted-foreground text-sm">Saturday - Sunday: By Appointment</p>
             </div>
        </div>
      </div>
    </div>
  );
}
