import Typewriter from "typewriter-effect";

import { Projects } from "./storage/projects";

import Background from "./assets/Background.png";
import Avatar from "./assets/Avatar.png";

import Github from "./assets/Github.png";
import Html from "./assets/HTML.png";
import Css from "./assets/CSS.png";
import Javascript from "./assets/JavaScript.png";
import React from "./assets/React.png";
import Nodejs from "./assets/Node.js.png";
import CaretDoubleDown from "./assets/CaretDoubleDown.png";

import Computador from "./assets/Computador.png";
import HardDrives from "./assets/HardDrives.png";
import Infinity from "./assets/infinity.png";

import Linkedin from "./assets/linkedin.png";
import GithubIcons from "./assets/Githubicons.png";
import Email from "./assets/Email.png";
import { Contatos } from "./components/contatos";

export function App() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="relative h-screen bg-cover bg-center">
      <img src={Background} alt="" className="w-full h-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-10">
        <img src={Avatar} alt="" />
        <div className="text-xl text-zinc-500 font-inconsolata font-normal text-center mt-5 lg:mt-10">
          <Typewriter
            options={{
              strings: [
                'Hello World! Meu nome é <span style="color: #649EE3;">Henrique Lala</span> e sou',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
              cursor: "|",
            }}
          />
        </div>
        <p className="mt-3 lg:mt-5 font-asap font-bold text-5xl px-10 text-center">
          Desenvolvedor Fullstack
        </p>
        <p className="text-zinc-400 font-maven text-sm font-normal mt-5 text-center">
          Transformo necessidades em aplicações reais, evolventes e funcionais.
          Desenvolvo sistemas através da <br /> minha paixão pela tecnologia,
          contribuindo com soluções inovadoras e eficazes para desafios
          complexos.
        </p>
        <div className="grid gap-3 mt-8 grid-cols-2 sm:grid-cols-3 lg:flex  lg:mt-16">
          <p className="flex w-32 h-10 bg-gray rounded-full items-center justify-center gap-2 font-maven font-normal text-sm">
            <img src={Github} alt="GitHub" /> GitHub
          </p>
          <p className="flex w-32 h-10 bg-gray rounded-full items-center justify-center gap-2 font-maven font-normal text-sm">
            <img src={Html} alt="HTML" /> HTML
          </p>
          <p className="flex w-32 h-10 bg-gray rounded-full items-center justify-center gap-2 font-maven font-normal text-sm">
            <img src={Css} alt="CSS" /> CSS
          </p>
          <p className="flex w-32 h-10 bg-gray rounded-full items-center justify-center gap-2 font-maven font-normal text-sm">
            <img src={Javascript} alt="JavaScript" /> JavaScript
          </p>
          <p className="flex w-32 h-10 bg-gray rounded-full items-center justify-center gap-2 font-maven font-normal text-sm">
            <img src={React} alt="React" /> React
          </p>
          <p className="flex w-32 h-10 bg-gray rounded-full items-center justify-center gap-2 font-maven font-normal text-sm">
            <img src={Nodejs} alt="Node js" /> Node js
          </p>
        </div>
        <img src={CaretDoubleDown} alt="" className="mt-5 sm:mt-16" />
      </div>
      <div className="flex  justify-center mt-10">
        <div className="">
          <p className="text-blue text-center font-inconsolata font-normal text-xl mb-3">
            Meus Trabalhos
          </p>
          <h1 className="font-asap text-2xl text-center font-bold text-white ">
            Veja os projetos em destaque
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ">
            {Projects.slice(0, 6).map((project, index) => (
              <div
                key={index}
                className={`px-1 mt-3 ${isMobile && index > 2 ? "hidden" : ""}`}
              >
                <button className="grid-cols-1 gap-2">
                  <div className="w-[330px] h-[280px] rounded-xl bg-gray px-4 ">
                    <img
                      src={project.imageSrc}
                      alt=""
                      className="flex  w-[306px] h-[156px] rounded-lg"
                    />
                    <h1 className="font-asap font-bold text-white text-base mt-3">
                      {project.name}
                    </h1>
                    <p className="mt-2 text-zinc-500 font-maven font-normal text-sm">
                      {project.description}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-32 w-full lg:h-[480px] bg-gray100 justify-center px-10">
        <div className="flex-col  mt-24">
          <p className="font-inconsolata font-normal text-xl text-blue text-center">
            Meus serviços
          </p>
          <h1 className="font-asap font-bold text-2xl text-white mt-2 text-center">
            Como posso ajudar o seu negócio
          </h1>

          <div className="flex  justify-center">
            <div className="lg:flex lg:gap-6">
              <div className="w-[280px] h-[155px] border-2 border-gray200 rounded-xl px-5 mt-10 lg:mt-14 ">
                <img src={Computador} alt="" className="mt-5 mb-5" />
                <h1 className="font-asap text-base font-bold mb-2 text-white">
                  Websites e Aplicativos
                </h1>
                <p className="font-asap text-sm  text-zinc-500">
                  Desenvolvimento de interfaces
                </p>
              </div>
              <div className="w-[280px] h-[155px] border-2 border-gray200 rounded-xl px-5 mt-5 lg:mt-14">
                <img src={HardDrives} alt="" className="mt-5 mb-5 w-9 h-8" />
                <h1 className="font-asap text-base font-bold mb-2 text-white">
                  API e banco de dados
                </h1>
                <p className="font-asap text-sm  text-zinc-500">
                  Criação de serviços do sistema
                </p>
              </div>
              <div className="w-[280px] h-[155px] border-2 border-gray200 rounded-xl px-5 mt-5 lg:mt-14 mb-16">
                <img src={Infinity} alt="" className="mt-5 mb-5 w-14 h-8" />
                <h1 className="font-asap text-base font-bold mb-2 text-white">
                  DevOps
                </h1>
                <p className="font-asap text-sm  text-zinc-500">
                  Gestão e infraestrutura da aplicação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-36 px-10">
        <div className="text-center">
          <p className="font-inconsolata font-bold text-blue text-xl mb-2">
            Contatos
          </p>
          <h1 className="font-asap font-bold text-2xl text-white mb-2">
            Gostou do meu trabalho?
          </h1>
          <p className="font-asap text-base text-zinc-500">
            Entre em contato ou acompanhe as minhas redes sociais!
          </p>
        </div>
        <div className="mt-10 mb-20">
          <Contatos
            link="https://www.linkedin.com/in/henriquedev55/"
            image={Linkedin}
            title="Linkedin"
          />
          <Contatos
            link="https://github.com/henrique5842"
            image={GithubIcons}
            title="GitHub"
          />
          <Contatos
            link="https://mail.google.com/mail/?view=cm&fs=1&to=destinatario@example.com"
            image={Email}
            title="Email"
          />
        </div>
        <div className="flex " />
      </div>
    </div>
  );
}
