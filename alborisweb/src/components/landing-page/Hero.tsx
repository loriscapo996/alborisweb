import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-zinc-50 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6">
            Il portale di riferimento per il Nord Italia per le PMI
          </h1>
          <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
            Informazione, aziende, servizi e opportunità in un unico network digitale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" asChild className="h-14 px-8 text-lg">
              <Link href="#directory">Cerca tra le aziende</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg">
              <Link href="#soluzioni">Promuovi la tua attività</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
    </section>
  );
}
