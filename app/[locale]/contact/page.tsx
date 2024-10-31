"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/_actions/sendEmail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useState } from "react";
import { contactFormSchema } from "@/lib/contactValidation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import EarthCanvas from "@/app/_components/canvas/EarthCanvas";
import StarsCanvas from "@/app/_components/canvas/StarsCanvas";
import ContactInfo from "@/app/_components/contact/ContactInfo";
import { useTranslations } from "next-intl";
export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const tContact = useTranslations("Contact");
  const tForm = useTranslations("Form");
  const tPlaceHolder = useTranslations("PlaceHolder");

  const firstLine = tContact("firstLine");
  const secondLine = tContact("secondLine");
  const thirdLine = tContact("thirdLine");
  const lastLine = tContact("lastLine");

  const tranName = tForm("Name");
  const tranEmail = tForm("Email");
  const tranCompany = tForm("Company");
  const tranPhone = tForm("Phone");
  const tranService = tForm("Service Interested In");
  const tranAmount = tForm("Amount");
  const tranMessage = tForm("Message");
  const tranButton = tForm("sendButton");
  const tranSending = tForm("sengingButton");

  const NameHolder = tPlaceHolder("Name");
  const EmailHolder = tPlaceHolder("Email");
  const CompanyHolder = tPlaceHolder("Company");
  const PhoneHolder = tPlaceHolder("Phone");
  const ServiceHolder = tPlaceHolder("Servece");
  const MessageHolder = tPlaceHolder("Message");
  const AmountHolder = tPlaceHolder("Amount");


  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name:"",
      email: "",
      company:"",
      phone: "",
      service: "",
      spending:"",
      message: "",
    },
  });

  

  const onSubmit = async (formData: z.infer<typeof contactFormSchema>) => {
    setLoading(true);

    try {
      await sendEmail(formData); // Send form data directly as an object
      form.reset(); // Clear form fields
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#050816] relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-10 container mx-auto">
        {/* Form  */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full dark:bg-background bg-slate-100 rounded-2xl  overflow-hidden relative z-[2] "
        >
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-center font-mono mb-8">
              {firstLine}
            </h2>
            <h2 className="text-md md:text-lg text-center font-mono pb-8">
              {lastLine}
            </h2>

            <h2 className="text-md md:text-lg text-center font-mono pb-8">
              {secondLine}
            </h2>
            
            <p className="text-sm md:text-md text-muted-foreground text-center font-mono  pb-8">
              {thirdLine}
            </p>
            <ContactInfo />
            <Form {...form}>
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)} // Update form submit handler
              >

              <div className="space-y-2 ">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{tranName}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={NameHolder}
                            {...field}
                            className="dark:bg-violet-950 bg-slate-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="space-y-2 ">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{tranEmail}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={EmailHolder}
                            {...field}
                            className="dark:bg-violet-950 bg-slate-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-2 ">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{tranCompany}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={CompanyHolder}
                            {...field}
                            className="dark:bg-violet-950 bg-slate-300"
                          />
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
                        <FormLabel>{tranPhone}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={PhoneHolder}
                            {...field}
                            className="dark:bg-violet-950 bg-slate-300"
                          />
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
                        <FormLabel>{tranService}</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="dark:bg-violet-950 bg-slate-300">
                              <SelectValue placeholder={ServiceHolder} />
                            </SelectTrigger>
                            <SelectContent className="dark:bg-violet-950">
                              <SelectItem value="web-design">
                                Web Design
                              </SelectItem>
                              <SelectItem value="digital-marketing">
                                Digital Marketing
                              </SelectItem>
                              <SelectItem value="branding">Branding</SelectItem>
                              <SelectItem value="consulting">
                                Consulting
                              </SelectItem>
                              <SelectItem value="Ad-creation-and-managment">
                                Ad creation and managment 
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="space-y-2 ">
                  <FormField
                    control={form.control}
                    name="spending"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{tranAmount}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={AmountHolder}
                            {...field}
                            className="dark:bg-violet-950 bg-slate-300"
                          />
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
                        <FormLabel>{tranMessage}</FormLabel>
                        <FormControl>
                          <Textarea
                            id="message"
                            placeholder={MessageHolder}
                            {...field}
                            className="dark:bg-violet-950 bg-slate-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>




                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? `${tranSending} ` : `${tranButton}`}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>

        {/* Earth Canva */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full lg:w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg relative z-[2] "
        >
          <EarthCanvas />
        </motion.div>

        {/* Stars */}
      </div>
      <div className="absolute inset-0 w-full h-full">
        <StarsCanvas />
      </div>
      <ToastContainer />
    </div>
  );
}
