import { ShieldCheck, Target, Users, Map } from "lucide-react";

export default function ForCompanies() {
  const benefits = [
    {
      title: "Visibilità verticale",
      description: "Presenza in un contesto focalizzato esclusivamente sul mondo business e industriale.",
      icon: Target,
    },
    {
      title: "Presenza geolocalizzata",
      description: "Fatti trovare dai clienti che operano nel tuo stesso territorio (Nord Italia).",
      icon: Map,
    },
    {
      title: "Utenti qualificati",
      description: "Il nostro traffico è composto da professionisti e decisori aziendali già interessati.",
      icon: Users,
    },
    {
      title: "Contesto autorevole",
      description: "Associa il tuo brand a guide tecniche e articoli informativi di alto livello.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Per le Aziende</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Alboris Web non è un'agenzia esterna, ma il vostro partner diretto per la visibilità digitale nel Nord Italia. 
              Offriamo uno spazio esclusivo dove le eccellenze del territorio possono incontrarsi e farsi conoscere.
            </p>
            
            <div className="bg-white/10 border border-white/20 p-6 rounded-xl mb-8">
              <p className="text-xl font-semibold text-white italic">
                "Non vendiamo marketing esterno. Offriamo visibilità qualificata all'interno del nostro portale."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <benefit.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-zinc-500">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="w-full aspect-square bg-gradient-to-br from-blue-600 to-indigo-900 rounded-3xl rotate-3 flex items-center justify-center p-12">
               <div className="text-center">
                  <span className="text-6xl font-black opacity-20 block mb-4">ALBORIS</span>
                  <p className="text-2xl font-light tracking-widest text-white/80">NETWORK DIGITALE</p>
               </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
