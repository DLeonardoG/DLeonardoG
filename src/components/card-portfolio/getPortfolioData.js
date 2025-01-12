import { ui } from '../../i18n/ui';


export const getPortafolioData = (lang) => {
    return ui[lang]["pages.home.projectsData"].map((item) => {
      return {
        // Se coloca todo el contenido previo del item
        ...item,
        // Se cambian las skills por los iconos correspondientes
        skills: item.skills.map((skill) => ui[lang].skillIcons[skill]),
      };
    });
  };
  