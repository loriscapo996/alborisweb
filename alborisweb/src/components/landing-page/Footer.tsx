import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 border-t border-zinc-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.jpg"
                alt="Alboris Web"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-zinc-500 max-w-sm mb-6">
              Il portale di riferimento per le PMI del Nord Italia. Network digitale proprietario per la visibilità aziendale.
            </p>
            <p className="text-xs text-zinc-400 italic">
              Portale informativo e directory di settore. Visibilità promozionale solo su canali proprietari.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Link Rapidi</h4>
            <ul className="space-y-4">
              <li><Link href="#portale" className="text-sm text-zinc-600 hover:text-zinc-900">Portale</Link></li>
              <li><Link href="#directory" className="text-sm text-zinc-600 hover:text-zinc-900">Directory</Link></li>
              <li><Link href="#contenuti" className="text-sm text-zinc-600 hover:text-zinc-900">Contenuti</Link></li>
              <li><Link href="#soluzioni" className="text-sm text-zinc-600 hover:text-zinc-900">Soluzioni</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Legale</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-zinc-600 hover:text-zinc-900">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-zinc-600 hover:text-zinc-900">Cookie Policy</Link></li>
              <li><Link href="#" className="text-sm text-zinc-600 hover:text-zinc-900">Termini e Condizioni</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Alboris Web. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest">Nord Italia Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
