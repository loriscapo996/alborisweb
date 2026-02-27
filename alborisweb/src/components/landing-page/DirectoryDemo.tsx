import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Filter } from "lucide-react";
import Link from "next/link";

export default function DirectoryDemo() {
  const companies = [
    { name: "Meccanica Nord Srl", category: "Automotive", location: "Milano", badge: "Premium" },
    { name: "EcoLogistica Srl", category: "Trasporti", location: "Bergamo", badge: "Plus" },
    { name: "VetroTech Snc", category: "Edilizia", location: "Venezia", badge: "Base" },
    { name: "Precisione Inox", category: "Metalmeccanica", location: "Torino", badge: "Premium" },
    { name: "Digital Services SPA", category: "Servizi", location: "Verona", badge: "Plus" },
    { name: "Arredi Italiani", category: "Produzione", location: "Treviso", badge: "Base" },
    { name: "Solution Impianti", category: "Elettronica", location: "Brescia", badge: "Premium" },
    { name: "Green Pharma", category: "Chimica", location: "Padova", badge: "Plus" },
    { name: "Logistica Veloce", category: "Trasporti", location: "Genova", badge: "Base" },
  ];

  return (
    <section id="directory" className="py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">Directory Aziende</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Trova le aziende leader nel Nord Italia divise per categoria e area geografica.
          </p>
        </div>

        {/* Search & Filter Mockup UI */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input className="pl-10 h-12" placeholder="Cerca attività o servizio..." readOnly />
          </div>
          <div className="relative w-full sm:w-48">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input className="pl-10 h-12" placeholder="Città..." readOnly />
          </div>
          <Button variant="outline" className="h-12 flex gap-2">
            <Filter className="h-4 w-4" />
            Filtri
          </Button>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {companies.map((company, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <Badge 
                  variant={
                    company.badge === "Premium" ? "default" : 
                    company.badge === "Plus" ? "secondary" : "outline"
                  }
                  className={company.badge === "Premium" ? "bg-amber-500 hover:bg-amber-600 border-none" : ""}
                >
                  {company.badge}
                </Badge>
                <MapPin className="h-4 w-4 text-zinc-400" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">{company.name}</h3>
              <p className="text-sm text-zinc-500 mb-4">{company.category} • {company.location}</p>
              <Button variant="ghost" className="w-full justify-center text-zinc-900 border border-zinc-200 hover:bg-zinc-50" asChild>
                <Link href="#contatti">Contatta</Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-zinc-400 italic">
          Esempio di visualizzazione directory. Inserimento aziende su richiesta.
        </p>
      </div>
    </section>
  );
}
