import { Search, BookOpen, FileText, Layout, Zap } from "lucide-react";

export default function PortaleFeatures() {
  const features = [
    {
      title: "Directory aziende",
      description: "Ricerca per categoria e località per trovare i migliori partner nel Nord Italia.",
      icon: Search,
    },
    {
      title: "Guide e approfondimenti",
      description: "Contenuti tecnici e strategici per restare sempre aggiornati sul mercato.",
      icon: BookOpen,
    },
    {
      title: "Articoli informativi",
      description: "Notizie fresche e rilevanti per le PMI e i professionisti del settore.",
      icon: FileText,
    },
    {
      title: "Sezioni tematiche",
      description: "Aree dedicate a specifici mercati verticali per una consultazione mirata.",
      icon: Layout,
    },
    {
      title: "Opportunità e promozioni",
      description: "Spazio riservato alle offerte esclusive del nostro network digitale.",
      icon: Zap,
    },
  ];

  return (
    <section id="portale" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">Cosa trovi sul portale</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Alboris Web è molto più di una directory: è un ecosistema informativo per le imprese.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-8 rounded-2xl bg-zinc-50 border border-zinc-100 transition-shadow hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
              <p className="text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
