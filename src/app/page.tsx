import Image from "next/image";
import logo from "./assets/logo.svg";
import womanImg from "./assets/woman.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto text-center mb-24">
        <nav className="flex justify-between py-4 items-center">
          <Image src={logo} alt="Logo Livro SaaS" />
          <div className="flex items-center gap-4">
            <Button variant="link">Funcionamento</Button>
            <Button variant="link">Preço</Button>
            <Button variant="outline">Login</Button>
          </div>
        </nav>
          <h1 className="text-6xl font-bold mt-16">Simplifique os seus estudos</h1>
          <p className="text-lg mt-4 text-gray-500 max-w-3xl mx-auto">Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.</p>
          <form className="mt-16">
            <div className="flex justify-center gap-2">
              <Input placeholder="Coloque o seu email" type="text" className="max-w-sm bg-white border border-gray-300 h-10" />
              <Button className="h-10">Assine Agora</Button>
            </div>
            <p className="text-xs mt-5 text-muted-foreground">Comece sua assinatura agora mesmo. Cancele quando quiser. </p>
          </form>
      </section>
      <section className="bg-white mx-auto text-center py-16">
        <h2 className="text-4xl font-bold">Como funciona?</h2>
        <div className="flex justify-evenly m-3 items-center">
          <Image src={womanImg} alt="Woman holding boxes" width={392} height={392} />
          <ul className="text-gray-500 flex flex-col gap-4 text-lg">
            <li>Acesso a 1 ebook por mês</li>
            <li>Curadoria especial</li>
            <li>Cancele quando quiser</li>
          </ul>
        </div>
      </section>
      <section className="mx-auto text-center my-22">
        <h2 className="font-bold text-4xl">Preço simples e transparente</h2>
        <p className="text-md mt-8 text-gray-500 max-w-3xl mx-auto">Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. E por menos de um café por dia. </p>
        <div className="bg-white rounded-3xl max-w-md mx-auto mt-16 p-10 flex flex-col gap-4 text-left border border-gray-300">
          <h3 className="text-2xl font-semibold">Plano Pro Premium VIP</h3>
          <p className="text-sm text-gray-500">Tudo que você precisa para seus estudos</p>
          <div className="flex items-baseline mt-8">
            <p className="font-semibold text-4xl">R$29</p>
            <span className="text-xl text-gray-500">/mês</span>
          </div>
          <ul className="flex flex-col gap-4 mt-4 text-sm text-gray-500">
            <li>1 ebook por mês</li>
            <li>Curadoria especial</li>
            <li>Acesso ilimitado</li>
            <li>Cancele a qualquer momento</li>
          </ul>
          <Button className="h-10 mt-10">Assine Agora</Button>
        </div>
      </section>
      <section className="bg-white mx-auto text-center py-22">
        <h2 className="text-4xl font-bold">Pronto Para Mudar Sua Vida?</h2>
        <p className="text-lg text-gray-500 my-6">Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos</p>
        <Button className="h-10 mt-6 w-sm">Assine Agora</Button>
        <p className="text-xs text-muted-foreground mt-5">Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
        <footer className="flex justify-center flex-col items-center mt-42">
        <Image src={logo} alt="Logo Livro SaaS" className="h-auto block" />
        <p>© 2024 LivroSaaS. Todos os direitos reservados.</p>
      </footer>
      </section>
    </main>
  );
}
