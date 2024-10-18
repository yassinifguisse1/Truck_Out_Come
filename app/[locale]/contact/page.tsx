"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GlobeDemo } from "@/app/_components/GlobeDemo"
import { sendEmail } from "@/app/_actions/sendEmail"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react"



export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);


    try {
      const data = new FormData();
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('service', formData.service);
      data.append('message', formData.message);

      const result = await sendEmail(data);


      if (result.status === 'success') {
        toast.success("Message sent successfully!");

        // Clear form fields
        setFormData({
          email: "",
          phone: "",
          service: "",
          message: "",
         
        });
      } else {
        const errorMessages = result.error.map((err: any) => err.message).join(", ");
        toast.error(`Error: ${errorMessages}`);
      }
    } catch (error) {
      toast.error("Error sending message.");
    }finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                Contact Us
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                 
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service interested in</Label>
                  <Select value={formData.service} onValueChange={handleServiceChange}  name="service">
                    <SelectTrigger id="service" name="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-design">Web Design</SelectItem>
                      <SelectItem value="digital-marketing">
                        Digital Marketing
                      </SelectItem>
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <GlobeDemo />
          </div>
        </div>
      </div>
      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}