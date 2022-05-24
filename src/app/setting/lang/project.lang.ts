import {ButtonLang} from "./button.lang";
import {ContactConst} from "../constants/contact.const";

export const ProjectLang = {
  data: [
    {
      title: 'Proyecto desarrollado aplicando JavaScript, HTML y CSS puro.',
      detail: 'Calcula el área y perímetro de un Triángulo, Círculo y Cuadrado',
      color: 'bg--accent',
      url: 'https://aaron-delgad.github.io/Curso-Practico-JavaScript/',
      github: 'https://github.com/aaron-delgad/Curso-Practico-JavaScript'
    },
    {
      title: 'Proyecto desarrollado implementando HTML y CSS puro',
      detail: `Solo se ha desarrollado las interfaces gráficas de las diferentes páginas
      que involucra una E-Commerce`,
      color: 'bg--primary-light',
      url: 'https://joyful-sorbet-8bf8d5.netlify.app/',
      github: 'https://github.com/aaron-delgad/E-commerce-Frontends'
    },
    {
      title: 'Implementando una PWA (Progressive Web App)',
      detail: `Se desarrollo en Angular version 13, generando el boton instalar para Desktop, Android e IOS,
      además se configuró el service worker y se implementó la funcionalidad para enviar actualizaciones`,
      color: 'bg--accent-light',
      url: 'https://angular-pwa-f00d0.firebaseapp.com/product',
      github: 'https://github.com/aaron-delgad/My_first_PWA'
    },
  ],
  post: 'Para Desktop, Table y Mobile',
  button: ButtonLang,
  gitHub: ContactConst.data[1],
}
