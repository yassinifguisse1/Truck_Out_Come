"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GlobeDemo } from "@/app/_components/GlobeDemo";
import { sendEmail } from "@/app/_actions/sendEmail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { contactFormSchema } from "@/lib/contactValidation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      phone: "",
      service: "",
      message: ""
    },
  });

  const onSubmit = async (formData: z.infer<typeof contactFormSchema>) => {
    setLoading(true);

    try {
      await sendEmail(formData);  // Send form data directly as an object
      form.reset();  // Clear form fields
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message.');
    } finally {
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
              <Form {...form}>
                <form
                  className="space-y-6"
                  onSubmit={form.handleSubmit(onSubmit)}  // Update form submit handler
                >
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Email..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Phone..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interested In</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="web-design">
                                  Web Design
                                </SelectItem>
                                <SelectItem value="digital-marketing">
                                  Digital Marketing
                                </SelectItem>
                                <SelectItem value="branding">
                                  Branding
                                </SelectItem>
                                <SelectItem value="consulting">
                                  Consulting
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              id="message"
                              placeholder="Tell us about your project..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <GlobeDemo />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
