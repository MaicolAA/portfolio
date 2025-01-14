type Translations = {
    [key: string]: {
        [lang: string]: string;
    };
};

const translations: Translations = {
    headerTitle: {
        en: "Maicol Alvarez",
        es: "Maicol Álvarez",
    },
    navAbout: {
        en: "About Me",
        es: "Sobre mí",
    },
    navProjects: {
        en: "Projects",
        es: "Proyectos",
    },
    navContact: {
        en: "Contact",
        es: "Contacto",
    },
    heroTitle: {
        en: "Hi, I'm Maicol Alvarez",
        es: "Hola, soy Maicol Álvarez",
    },
    heroDescription: {
        en: "I'm a software engineer and designer passionate about creating beautiful and functional user interfaces. My goal is to take my creativity and skills to the next level by building impactful web applications.",
        es: "Soy un ingeniero de software y diseñador apasionado por crear interfaces de usuario hermosas y funcionales. Mi objetivo es llevar mi creatividad y habilidades al siguiente nivel construyendo aplicaciones web de impacto.",
    },
    heroButton: {
        en: "View My Projects",
        es: "Ver mis proyectos",
    },
    aboutTitle: {
        en: "About Me",
        es: "Sobre mí",
    },
    aboutDescription: {
        en: "I have experience in frontend and backend development, as well as UI/UX design. My stack includes React, Next.js, Tailwind CSS, Node.js, and more.",
        es: "Tengo experiencia en desarrollo frontend y backend, así como en diseño UI/UX. Mi stack incluye React, Next.js, Tailwind CSS, Node.js y más.",
    },
    contactTitle: {
        en: "Contact",
        es: "Contacto",
    },
    contactDescription: {
        en: "If you'd like to collaborate on a project or just say hi, feel free to contact me.",
        es: "Si quieres colaborar en un proyecto o simplemente saludar, no dudes en contactarme.",
    },
    contactButton: {
        en: "Send a Message",
        es: "Enviar un mensaje",
    },
    footer: {
        en: "All rights reserved.",
        es: "Todos los derechos reservados.",
    },
};

export default translations;
