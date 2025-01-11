export const languages = {
    en: 'English',
    es: 'Español',
  };
  
  export const defaultLang = 'en';
  
  export const ui = {
    en: {
      menu: [
        {
          name: 'Home',
          url: '/',
        },
        {
          name: 'About me',
          url: '/aboutMe',
        },
        {
          name: 'Projects',
          url: 'https://github.com/DLeonardoG?tab=repositories',
        },
        {
          name: 'Contact',
          url: '/contact',
        },
      ],
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.twitter': 'Twitter',
    },
    es: {
      menu: [
        {
          name: 'Inicio',
          url: '/',
        },
        {
          name: 'Sobre mí',
          url: '/aboutMe',
        },
        {
          name: 'Proyectos',
          url: 'https://github.com/DLeonardoG?tab=repositories',
        },
        {
          name: 'Contacto',
          url: '/contact',
        },
      ],
      'nav.home': 'Inicio',
      'nav.about': 'Sobre mí',
      'nav.twitter': 'Twitter',
    },
  } as const;
  