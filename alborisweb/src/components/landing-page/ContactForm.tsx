"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { CheckCircle2, Loader2, Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve avere almeno 2 caratteri." }),
  company: z.string().min(2, { message: "Inserisci il nome dell'azienda." }),
  email: z.string().email({ message: "Inserisci un indirizzo email valido." }),
  phone: z.string().optional(),
  requestType: z.string({ required_error: "Seleziona una richiesta." }),
  message: z.string().min(10, { message: "Il messaggio deve avere almeno 10 caratteri." }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      requestType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  }

  return (
    <section id="contatti" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">Contatti</h2>
            <p className="text-zinc-600 mb-10">
              Siamo a tua disposizione per ogni informazione sulle nostre soluzioni di visibilità e sul network Alboris Web.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-zinc-600" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="font-bold text-zinc-900">info@alborisweb.it</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-zinc-600" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Telefono</p>
                  <p className="font-bold text-zinc-900">+39 02 1234567</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-zinc-600" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Area operativa</p>
                  <p className="font-bold text-zinc-900">Nord Italia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            {isSuccess ? (
              <div className="bg-zinc-50 border border-zinc-200 p-12 rounded-2xl text-center h-full flex flex-col items-center justify-center">
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Richiesta inviata!</h3>
                <p className="text-zinc-600 mb-8">
                  Grazie per averci contattato. Il nostro team ti risponderà nel più breve tempo possibile.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                  Invia un'altra richiesta
                </Button>
              </div>
            ) : (
              <div className="bg-zinc-50 border border-zinc-200 p-8 lg:p-12 rounded-2xl shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                              <Input placeholder="Il tuo nome" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Azienda</FormLabel>
                            <FormControl>
                              <Input placeholder="Nome azienda" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="email@esempio.it" {...field} />
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
                            <FormLabel>Telefono (opzionale)</FormLabel>
                            <FormControl>
                              <Input placeholder="+39..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="requestType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Richiesta</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleziona una soluzione" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="base">Presenza Base</SelectItem>
                              <SelectItem value="plus">Visibilità Plus</SelectItem>
                              <SelectItem value="premium">Premium</SelectItem>
                              <SelectItem value="banner">Banner & Spazi</SelectItem>
                              <SelectItem value="info">Informazioni generali</SelectItem>
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
                          <FormLabel>Messaggio</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Come possiamo aiutarti?" 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Invio in corso...
                        </>
                      ) : (
                        "Richiedi informazioni"
                      )}
                    </Button>
                    <p className="text-[10px] text-zinc-400 text-center">
                      Premendo il pulsante dichiari di aver letto e accettato la Privacy Policy.
                    </p>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
