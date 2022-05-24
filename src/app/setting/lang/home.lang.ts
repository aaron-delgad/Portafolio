import {ContactConst} from "../constants/contact.const";

export const homeLang = {
  name: 'Raul Aaron Delgado Esparraga',
  subTitle: 'Frontend Developer Web - Movil (Angular and IONIC)',
  image: {url: './assets/image/perfil.jpg', alt: 'login.png'},

  InfoContact: [
    {
      title: '¿Quién Soy?',
      detail: `Peruano, originario de la Región Amazonas, Provincia de Utcubamba, Distrito de Cajaruro.
      Soy un profesional estusiasta y con capacidad de autogestión, creativo, con habilidades en diseño visual,
      me gusta trabajar en equipo con eficiencia y rapidez.`,
      children: []
    },
    {
      title: 'Información de Contacto',
      detail: '',
      children: ContactConst.medioContact,
    },
    {
      title: 'Habilidades Técnicas',
      detail: '',
      children: [
        {label: '', value: 'JavaScript'},
        {label: '', value: 'TypeScript'},
        {label: '', value: 'HTML'},
        {label: '', value: 'CSS'},
        {label: '', value: 'Angular'},
        {label: '', value: 'Git'},
        {label: '', value: 'GitHub'},
        {label: '', value: 'gitLab'},
        {label: '', value: 'Botstrap'},
        {label: '', value: 'Angular Material'},
        {label: '', value: 'Jira'},
        {label: '', value: 'IONIC'},
        {label: '', value: 'Pruebas'},
        {label: '', value: 'Sonarqube'},
        {label: '', value: 'Husky'},
      ]
    },
    {
      title: 'Formación Académica',
      detail: '',
      children: [
        {label: 'Bachiller', value: ', en Ingeniería de Sistemas y Telemática'},
        {label: 'Título', value: ', en Ingeniería de Sistemas y Telemática'}
      ]
    }
  ]


}
