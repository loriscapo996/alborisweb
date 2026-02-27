export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Scegli la soluzione",
      description: "Individua il pacchetto di visibilità più adatto alle tue esigenze e obiettivi commerciali.",
    },
    {
      number: "02",
      title: "Invia i dati attività",
      description: "Trasmettici le informazioni, il logo e i contenuti necessari per la creazione della tua scheda.",
    },
    {
      number: "03",
      title: "Pubblicazione scheda",
      description: "Il nostro team verificherà e pubblicherà la tua presenza professionale all'interno del portale.",
    },
    {
      number: "04",
      title: "Attivazione visibilità",
      description: "La tua azienda entra nel network e inizia a beneficiare del posizionamento e del traffico qualificato.",
    },
  ];

  return (
    <section id="come-funziona" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">Come funziona</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Un processo semplice e trasparente per portare la tua azienda nel nostro network digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-zinc-200 -z-0" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 text-center group">
              <div className="w-16 h-16 bg-white border-4 border-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm transition-all group-hover:scale-110 group-hover:border-zinc-900">
                <span className="text-xl font-black text-zinc-900">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{step.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
