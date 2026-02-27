import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Articles() {
  const articles = [
    {
      title: "Il futuro dell'automotive nel Nord Italia",
      excerpt: "Come le PMI della componentistica si stanno adattando all'elettrico.",
      date: "25 Febbraio 2026",
      content: "Il settore automotive nel Nord Italia sta vivendo una fase di profonda trasformazione. Le piccole e medie imprese, cuore pulsante della componentistica, si trovano di fronte alla sfida dell'elettrificazione. Grazie alla flessibilità e all'innovazione tecnologica, molte realtà stanno già riposizionando la propria produzione per servire i nuovi mercati della mobilità sostenibile.",
    },
    {
      title: "Manutenzione industriale: le nuove frontiere",
      excerpt: "La manutenzione predittiva come leva di competitività per le officine.",
      date: "20 Febbraio 2026",
      content: "L'adozione di sensori IoT e algoritmi di intelligenza artificiale sta rivoluzionando il modo in cui le aziende gestiscono i propri asset. La manutenzione non è più un costo necessario, ma un investimento strategico che permette di azzerare i fermi macchina imprevisti e ottimizzare i cicli di vita degli impianti produttivi.",
    },
    {
      title: "Logistica e trasporti: efficienza nel Triveneto",
      excerpt: "Ottimizzazione delle rotte e digitalizzazione per un servizio più rapido.",
      date: "15 Febbraio 2026",
      content: "Il Triveneto si conferma snodo logistico cruciale per l'export italiano. Le aziende del settore stanno investendo massicciamente in software di gestione avanzata e flotte a basso impatto ambientale. La parola d'ordine è integrazione: tra magazzino, trasporti e cliente finale, per una visibilità totale della supply chain.",
    },
    {
      title: "Digitalizzazione delle PMI: guide pratiche",
      excerpt: "I primi passi per portare la tua azienda nel mondo digitale.",
      date: "10 Febbraio 2026",
      content: "Digitale non significa solo social network. Per una PMI, digitalizzarsi significa rivedere i processi interni, adottare strumenti di collaborazione cloud e migliorare la presenza online in contesti verticali e autorevoli. Una guida pratica per chi vuole iniziare questo percorso senza investimenti faraonici.",
    },
  ];

  return (
    <section id="contenuti" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">Contenuti e Guide</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Approfondimenti di settore, case studies e guide pratiche per i professionisti del territorio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer transition-all hover:border-zinc-400 group h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-zinc-500 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center text-sm font-medium text-zinc-900">
                      Leggi di più <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardFooter>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                  <DialogTitle className="text-2xl">{article.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4 text-zinc-600 leading-relaxed">
                  {article.content}
                </div>
                <div className="mt-6 flex justify-end">
                  <Button variant="outline" asChild>
                    <Link href="#contatti">Richiedi approfondimento</Link>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
