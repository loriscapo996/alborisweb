import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Presenza Base",
      price: "200",
      features: [
        "Inserimento in directory",
        "Nome e contatti",
        "Categoria e località",
        "Presenza nei risultati interni",
        "Scheda essenziale",
      ],
      cta: "Seleziona Base",
      highlight: false,
    },
    {
      name: "Visibilità Plus",
      price: "490",
      features: [
        "Tutto il piano Base",
        "Descrizione personalizzata",
        "Logo aziendale",
        "Galleria (5 immagini)",
        "Link sito web (opzionale)",
        "Modulo contatto diretto",
      ],
      cta: "Seleziona Plus",
      highlight: false,
    },
    {
      name: "Premium",
      price: "799",
      features: [
        "Tutto il piano Plus",
        "Posizionamento prioritario",
        "Badge Premium distintivo",
        "Evidenza homepage a rotazione",
        "Inserimento in articoli tematici",
        "1 contenuto dedicato",
        "Presenza in newsletter",
      ],
      cta: "Seleziona Premium",
      highlight: true,
    },
    {
      name: "Banner & Spazi",
      price: "da 350",
      features: [
        "Banner in homepage",
        "Banner nelle categorie",
        "Evidenza temporanea",
        "Sponsorizzazione contenuti",
      ],
      cta: "Richiedi preventivo",
      highlight: false,
    },
  ];

  return (
    <section id="soluzioni" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">Soluzioni di Visibilità</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Scegli il livello di presenza più adatto alle esigenze della tua azienda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col p-8 rounded-2xl border ${
                plan.highlight
                  ? "border-zinc-900 bg-zinc-900 text-white shadow-xl scale-105"
                  : "border-zinc-200 bg-zinc-50 text-zinc-900"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold">€{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? "text-zinc-400" : "text-zinc-500"}`}>
                  + IVA / anno
                </span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex gap-3 text-sm">
                    <Check className={`h-4 w-4 shrink-0 ${plan.highlight ? "text-blue-400" : "text-zinc-600"}`} />
                    <span className={plan.highlight ? "text-zinc-300" : "text-zinc-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlight ? "default" : "outline"}
                className={`w-full ${plan.highlight ? "bg-white text-zinc-900 hover:bg-zinc-100" : ""}`}
                asChild
              >
                <Link href="#contatti">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-100 p-6 rounded-xl flex gap-4 items-start">
          <Info className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
          <p className="text-blue-800 font-medium">
            Tutti gli spazi promozionali sono pubblicati esclusivamente sui nostri canali digitali proprietari. 
            Non gestiamo campagne su piattaforme esterne o social network di terzi.
          </p>
        </div>
      </div>
    </section>
  );
}
