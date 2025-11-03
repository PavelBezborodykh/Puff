"use strict";

const translations = {
  ru: {
    "page.title": "Сопровождение недвижимости в Калининграде",
    "language.switcherLabel": "Язык",
    "theme.toggleLabel": "Переключить тему",
    "nav.toggleLabel": "Открыть меню",
    "nav.home": "Главная",
    "nav.about": "О нас",
    "nav.services": "Услуги",
    "nav.faq": "Вопросы",
    "nav.consultation": "Консультация",
    "contact.phoneLabel": "Телефон",
    "contact.phoneValue": "+7 901 234-56-78",
    "contact.emailLabel": "E-mail",
    "contact.emailValue": "info@kaliningrad-immobilien.de",
    "contact.hoursLabel": "Время работы",
    "contact.hoursValue": "Понедельник – Пятница, 09:00 – 18:00",
    "contact.addressLabel": "Адрес",
    "contact.addressValue": "Калининградская область, РФ",
    "contactInfo.heading": "Свяжитесь с нами напрямую",
    "contactInfo.text": "Расскажите о вашей ситуации — подготовим план действий и смету.",
    "hero.title": "Надёжное сопровождение сделок с недвижимостью в Калининграде",
    "hero.subtitle": "Мы берём на себя все этапы инвестиции — от проверки документов до передачи ключей и послесервисного сопровождения.",
    "hero.point1": "Понятные консультации для клиентов из России, Германии и ЕС",
    "hero.point2": "Юридически выверенные договоры и перевод документации",
    "hero.point3": "Личная поддержка на объекте и дистанционно",
    "hero.button": "Получить консультацию",
    "hero.stat1Value": "125+",
    "hero.stat1Label": "сопровождённых сделок",
    "hero.stat2Value": "12",
    "hero.stat2Label": "лет на рынке",
    "hero.stat3Value": "3",
    "hero.stat3Label": "языка обслуживания",
    "hero.imageAlt": "Современный жилой квартал в Калининграде",
    "about.heading": "О нас",
    "about.paragraph1": "Наша команда сочетает европейский подход к качеству обслуживания и местную экспертизу Калининградского рынка недвижимости.",
    "about.paragraph2": "Мы работаем прозрачно, объясняем каждый шаг понятным языком и всегда держим вас в курсе процесса.",
    "about.listTitle": "Наши преимущества",
    "about.point1": "Многоязычные специалисты с опытом российско-европейских сделок",
    "about.point2": "Прозрачная ценовая модель без скрытых комиссий",
    "about.point3": "Индивидуальная поддержка — по телефону, онлайн или на месте",
    "services.heading": "Наши услуги",
    "services.intro": "Берём на себя полную подготовку и ведение вашей сделки с недвижимостью.",
    "services.contract.title": "Подготовка договоров",
    "services.contract.text": "Составление и проверка договоров купли-продажи и аренды с учётом российского и европейского законодательства.",
    "services.documents.title": "Документальное сопровождение",
    "services.documents.text": "Сбор, апостилирование и перевод всех необходимых документов для органов власти и банков.",
    "services.transaction.title": "Ведение сделки",
    "services.transaction.text": "Координация между продавцом, нотариусом и регистрационными органами до успешного завершения сделки.",
    "faq.heading": "Часто задаваемые вопросы",
    "faq.question1": "Какие документы нужны для покупки недвижимости?",
    "faq.answer1": "Для покупки недвижимости потребуются паспорт, ИНН, выписка из ЕГРН на объект, договор купли-продажи и согласие супруга (если применимо). Мы поможем собрать все необходимые документы.",
    "faq.question2": "Сколько времени занимает сделка?",
    "faq.answer2": "Обычно от подписания договора до регистрации права собственности проходит 2-4 недели. Мы ускоряем процесс, координируя все этапы.",
    "faq.question3": "Работаете ли вы с иностранными клиентами?",
    "faq.answer3": "Да, мы специализируемся на работе с клиентами из Германии и ЕС, предоставляя консультации на русском, немецком и английском языках.",
    "faq.question4": "Как формируется стоимость услуг?",
    "faq.answer4": "Стоимость зависит от типа сделки и объёма работ. Мы предоставляем прозрачную смету без скрытых платежей после первичной консультации.",
    "consult.heading": "Запросить консультацию",
    "consult.description": "Оставьте контакты и краткое описание ситуации. Мы свяжемся с вами в течение рабочего дня и предложим дальнейшие шаги.",
    "consult.form.nameLabel": "Имя",
    "consult.form.namePlaceholder": "Ваше полное имя",
    "consult.form.emailLabel": "E-mail",
    "consult.form.emailPlaceholder": "Ваш e-mail",
    "consult.form.phoneLabel": "Телефон",
    "consult.form.phonePlaceholder": "+7 (___) ___-__-__",
    "consult.form.messageLabel": "Комментарий",
    "consult.form.messagePlaceholder": "Опишите объект или задачу, с которой требуется помощь",
    "consult.form.consent": "Я соглашаюсь на обработку персональных данных для связи со мной.",
    "consult.form.submit": "Отправить заявку",
    "consult.form.success": "Спасибо! Мы свяжемся с вами в ближайшее время.",
    "consult.form.error": "Пожалуйста, исправьте ошибки в форме.",
    "consult.form.error.required": "Это поле обязательно для заполнения",
    "consult.form.error.email": "Укажите корректный e-mail адрес",
    "consult.form.error.phone": "Укажите номер в формате +7 (XXX) XXX-XX-XX",
    "consult.mapTitle": "Офис в Калининграде",
    "footer.rights": "© Сопровождение недвижимости в Калининграде. Все права защищены."
  },
  de: {
    "page.title": "Kaliningrad Immobilienbegleitung",
    "language.switcherLabel": "Sprache",
    "theme.toggleLabel": "Design umschalten",
    "nav.toggleLabel": "Menü öffnen",
    "nav.home": "Start",
    "nav.about": "Über uns",
    "nav.services": "Leistungen",
    "nav.faq": "Fragen",
    "nav.consultation": "Beratung",
    "contact.phoneLabel": "Telefon",
    "contact.phoneValue": "+7 901 234-56-78",
    "contact.emailLabel": "E-Mail",
    "contact.emailValue": "info@kaliningrad-immobilien.de",
    "contact.hoursLabel": "Sprechzeiten",
    "contact.hoursValue": "Montag – Freitag, 09:00 – 18:00 Uhr",
    "contact.addressLabel": "Standort",
    "contact.addressValue": "Kaliningrader Gebiet, Russische Föderation",
    "contactInfo.heading": "Ihr direkter Draht zu uns",
    "contactInfo.text": "Kontaktieren Sie uns für eine erste Einschätzung Ihres Vorhabens.",
    "hero.title": "Verlässliche Immobilienunterstützung im Kaliningrader Gebiet",
    "hero.subtitle": "Wir begleiten Sie durch jeden Schritt Ihrer Immobilieninvestition – vom ersten Vertrag bis zur sicheren Übergabe.",
    "hero.point1": "Verständliche Beratung für deutsche und europäische Klient:innen",
    "hero.point2": "Prüfung und Erstellung rechtssicherer Kaufunterlagen",
    "hero.point3": "Betreuung vor Ort mit lokalen Expert:innen",
    "hero.button": "Beratung anfordern",
    "hero.stat1Value": "125+",
    "hero.stat1Label": "begleitete Transaktionen",
    "hero.stat2Value": "12",
    "hero.stat2Label": "Jahre am Markt",
    "hero.stat3Value": "3",
    "hero.stat3Label": "Service-Sprachen",
    "hero.imageAlt": "Moderne Wohnsiedlung in Kaliningrad",
    "about.heading": "Über uns",
    "about.paragraph1": "Unser spezialisiertes Team verbindet deutsches Serviceverständnis mit lokaler Expertise im Kaliningrader Gebiet.",
    "about.paragraph2": "Wir arbeiten transparent, erklären jeden Schritt verständlich und halten Sie stets auf dem Laufenden.",
    "about.listTitle": "Was uns auszeichnet",
    "about.point1": "Mehrsprachige Fachleute mit Erfahrung in EU-Russland-Transaktionen",
    "about.point2": "Klares Kostenmodell ohne versteckte Gebühren",
    "about.point3": "Persönliche Betreuung – telefonisch, online oder vor Ort",
    "services.heading": "Unsere Leistungen",
    "services.intro": "Wir übernehmen die vollständige Vorbereitung Ihrer Immobilientransaktion.",
    "services.contract.title": "Vertragsvorbereitung",
    "services.contract.text": "Ausarbeitung und Prüfung von Kauf- und Mietverträgen nach deutschen und russischen Standards.",
    "services.documents.title": "Dokumentenservice",
    "services.documents.text": "Beschaffung und Übersetzung aller notwendigen Unterlagen für Behörden und Banken.",
    "services.transaction.title": "Transaktionsbetreuung",
    "services.transaction.text": "Koordination mit Eigentümer:innen, Notar:innen und Behörden bis zum erfolgreichen Abschluss.",
    "faq.heading": "Häufig gestellte Fragen",
    "faq.question1": "Welche Dokumente werden für den Immobilienkauf benötigt?",
    "faq.answer1": "Für den Kauf werden Reisepass, Steuernummer, Grundbuchauszug, Kaufvertrag und ggf. Ehegattenzustimmung benötigt. Wir helfen bei der Beschaffung aller erforderlichen Unterlagen.",
    "faq.question2": "Wie lange dauert eine Transaktion?",
    "faq.answer2": "In der Regel vergehen 2-4 Wochen von der Vertragsunterzeichnung bis zur Eigentumsregistrierung. Wir beschleunigen den Prozess durch Koordination aller Schritte.",
    "faq.question3": "Arbeiten Sie mit ausländischen Kunden?",
    "faq.answer3": "Ja, wir sind auf Kunden aus Deutschland und der EU spezialisiert und bieten Beratung auf Russisch, Deutsch und Englisch.",
    "faq.question4": "Wie werden die Kosten kalkuliert?",
    "faq.answer4": "Die Kosten hängen von Art und Umfang der Transaktion ab. Nach dem Erstgespräch erstellen wir eine transparente Kostenschätzung ohne versteckte Gebühren.",
    "consult.heading": "Beratung anfordern",
    "consult.description": "Senden Sie uns Ihre Kontaktdaten und kurze Angaben zum Objekt. Wir melden uns werktags innerhalb von 24 Stunden.",
    "consult.form.nameLabel": "Name",
    "consult.form.namePlaceholder": "Ihr vollständiger Name",
    "consult.form.emailLabel": "E-Mail",
    "consult.form.emailPlaceholder": "Ihre E-Mail-Adresse",
    "consult.form.phoneLabel": "Telefon",
    "consult.form.phonePlaceholder": "+7 (___) ___-__-__",
    "consult.form.messageLabel": "Nachricht",
    "consult.form.messagePlaceholder": "Beschreiben Sie Ihr Anliegen oder das Objekt.",
    "consult.form.consent": "Ich stimme der Verarbeitung meiner Daten zum Zweck der Kontaktaufnahme zu.",
    "consult.form.submit": "Nachricht senden",
    "consult.form.success": "Vielen Dank! Wir melden uns in Kürze.",
    "consult.form.error": "Bitte füllen Sie alle Pflichtfelder korrekt aus.",
    "consult.form.error.required": "Dieses Feld ist erforderlich",
    "consult.form.error.email": "Bitte geben Sie eine gültige E-Mail-Adresse ein",
    "consult.form.error.phone": "Bitte geben Sie eine Telefonnummer im Format +7 (XXX) XXX-XX-XX ein",
    "consult.mapTitle": "Büro in Kaliningrad",
    "footer.rights": "© Kaliningrad Immobilienbegleitung. Alle Rechte vorbehalten."
  },
  en: {
    "page.title": "Kaliningrad Real Estate Support",
    "language.switcherLabel": "Language",
    "theme.toggleLabel": "Toggle theme",
    "nav.toggleLabel": "Open menu",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.faq": "FAQ",
    "nav.consultation": "Contact",
    "contact.phoneLabel": "Phone",
    "contact.phoneValue": "+7 901 234-56-78",
    "contact.emailLabel": "Email",
    "contact.emailValue": "info@kaliningrad-immobilien.de",
    "contact.hoursLabel": "Office hours",
    "contact.hoursValue": "Monday – Friday, 9:00 – 18:00",
    "contact.addressLabel": "Location",
    "contact.addressValue": "Kaliningrad region, Russian Federation",
    "contactInfo.heading": "Your direct line to us",
    "contactInfo.text": "Get in touch for an initial assessment of your plans.",
    "hero.title": "Reliable real estate assistance in the Kaliningrad region",
    "hero.subtitle": "We accompany you through every step of your property investment – from the first draft to a safe handover.",
    "hero.point1": "Clear guidance for clients from Germany and across the EU",
    "hero.point2": "Drafting and reviewing compliant purchase documentation",
    "hero.point3": "On-site coordination with trusted local specialists",
    "hero.button": "Request consultation",
    "hero.stat1Value": "125+",
    "hero.stat1Label": "transactions completed",
    "hero.stat2Value": "12",
    "hero.stat2Label": "years in business",
    "hero.stat3Value": "3",
    "hero.stat3Label": "service languages",
    "hero.imageAlt": "Modern residential area in Kaliningrad",
    "about.heading": "About us",
    "about.paragraph1": "Our dedicated team combines German-quality service with local expertise in the Kaliningrad region.",
    "about.paragraph2": "We keep the process transparent, explain every step in plain language, and keep you informed.",
    "about.listTitle": "Why clients choose us",
    "about.point1": "Multilingual professionals experienced in EU–Russia transactions",
    "about.point2": "Clear pricing with no hidden fees",
    "about.point3": "Personal support – by phone, online, or on location",
    "services.heading": "What we do",
    "services.intro": "We take care of the complete preparation of your property transaction.",
    "services.contract.title": "Contract preparation",
    "services.contract.text": "Drafting and verifying purchase and rental contracts compliant with German and Russian regulations.",
    "services.documents.title": "Documentation",
    "services.documents.text": "Collecting and translating all required papers for authorities and financial institutions.",
    "services.transaction.title": "Transaction support",
    "services.transaction.text": "Coordinating with owners, notaries, and authorities until the deal is successfully closed.",
    "faq.heading": "Frequently Asked Questions",
    "faq.question1": "What documents are needed to purchase property?",
    "faq.answer1": "You will need a passport, tax ID, property deed extract, purchase agreement, and spouse consent if applicable. We help gather all necessary documentation.",
    "faq.question2": "How long does a transaction take?",
    "faq.answer2": "Typically 2-4 weeks from contract signing to ownership registration. We expedite the process by coordinating all stages.",
    "faq.question3": "Do you work with international clients?",
    "faq.answer3": "Yes, we specialize in serving clients from Germany and the EU, offering consultations in Russian, German, and English.",
    "faq.question4": "How are service costs calculated?",
    "faq.answer4": "Costs depend on transaction type and scope of work. We provide a transparent estimate without hidden fees after the initial consultation.",
    "consult.heading": "Request a consultation",
    "consult.description": "Share your contact details and a short description of the property. We respond within one business day.",
    "consult.form.nameLabel": "Name",
    "consult.form.namePlaceholder": "Your full name",
    "consult.form.emailLabel": "Email",
    "consult.form.emailPlaceholder": "Your email address",
    "consult.form.phoneLabel": "Phone",
    "consult.form.phonePlaceholder": "+7 (___) ___-__-__",
    "consult.form.messageLabel": "Message",
    "consult.form.messagePlaceholder": "Describe your request or property details.",
    "consult.form.consent": "I agree that my data will be used to process this consultation request.",
    "consult.form.submit": "Send message",
    "consult.form.success": "Thank you! We will contact you shortly.",
    "consult.form.error": "Please complete all required fields correctly.",
    "consult.form.error.required": "This field is required",
    "consult.form.error.email": "Please enter a valid email address",
    "consult.form.error.phone": "Please enter a phone number in the format +7 (XXX) XXX-XX-XX",
    "consult.mapTitle": "Office in Kaliningrad",
    "footer.rights": "© Kaliningrad Real Estate Support. All rights reserved."
  }
};

let currentLanguage = "ru";
let scrollPosition = 0;

function initLanguage() {
  const savedLanguage = localStorage.getItem("preferredLanguage");
  const initialLanguage = savedLanguage || "ru";
  updateLanguage(initialLanguage);
}

function updateLanguage(lang) {
  if (!translations[lang]) {
    lang = "ru";
  }
  currentLanguage = lang;
  localStorage.setItem("preferredLanguage", lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateDocumentTitle(lang);
  updateLanguageButtons(lang);
}

function applyTranslations(lang) {
  const dictionary = translations[lang];
  if (!dictionary) {
    return;
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = dictionary[key];
    if (translation) {
      element.textContent = translation;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const attrString = element.dataset.i18nAttr;
    const pairs = attrString.split(";").map((pair) => pair.trim()).filter(Boolean);
    
    pairs.forEach((pair) => {
      const [attrName, key] = pair.split(":").map((s) => s.trim());
      const translation = dictionary[key];
      if (translation && attrName) {
        element.setAttribute(attrName, translation);
      }
    });
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const translation = dictionary[key];
    if (translation) {
      element.setAttribute("aria-label", translation);
    }
  });

  const responseEl = document.querySelector("#form-response");
  if (responseEl && responseEl.dataset.messageType) {
    const responseKey = responseEl.dataset.messageType === "success" ? "consult.form.success" : "consult.form.error";
    const translation = dictionary[responseKey];
    if (translation) {
      responseEl.textContent = translation;
    }
  }
}

function updateDocumentTitle(lang) {
  const dictionary = translations[lang];
  if (dictionary && dictionary["page.title"]) {
    document.title = dictionary["page.title"];
  }
}

function updateLanguageButtons(activeLang) {
  document.querySelectorAll(".language-button").forEach((button) => {
    const isActive = button.dataset.lang === activeLang;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  let theme = savedTheme;
  
  if (!theme) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    theme = prefersDark ? "dark" : "light";
  }
  
  setTheme(theme);
}

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  
  const toggle = document.querySelector("#theme-toggle");
  if (toggle) {
    const iconSpan = toggle.querySelector(".theme-toggle__icon");
    if (iconSpan) {
      iconSpan.textContent = theme === "dark" ? "◑" : "◐";
    }
  }
}

function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

function initMobileMenu() {
  const toggle = document.querySelector("#nav-toggle");
  const menu = document.querySelector("#nav-menu");
  const navLinks = menu ? menu.querySelectorAll("a") : [];

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggleMenu(!isExpanded);
  });

  toggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggleMenu(!isExpanded);
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (toggle.getAttribute("aria-expanded") === "true") {
        toggleMenu(false);
      }
    });
  });

  menu.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleMenu(false);
      toggle.focus();
    }
  });
}

function toggleMenu(open) {
  const toggle = document.querySelector("#nav-toggle");
  const menu = document.querySelector("#nav-menu");
  const nav = document.querySelector("#main-nav");

  if (!toggle || !menu || !nav) {
    return;
  }

  if (open) {
    scrollPosition = window.pageYOffset;
    nav.classList.add("nav--open");
    toggle.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    trapFocus(menu);
  } else {
    nav.classList.remove("nav--open");
    toggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    window.scrollTo(0, scrollPosition);
  }
}

function trapFocus(container) {
  const focusableElements = container.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length === 0) {
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e) => {
    if (e.key !== "Tab") {
      return;
    }

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };

  container.addEventListener("keydown", handleTabKey);
  firstElement.focus();
}

function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-item__question");
    const answer = item.querySelector(".faq-item__answer");

    if (!button || !answer) {
      return;
    }

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      
      if (!isExpanded) {
        faqItems.forEach((otherItem) => {
          const otherButton = otherItem.querySelector(".faq-item__question");
          const otherAnswer = otherItem.querySelector(".faq-item__answer");
          if (otherButton && otherAnswer && otherItem !== item) {
            otherButton.setAttribute("aria-expanded", "false");
            otherAnswer.style.maxHeight = "0";
            otherItem.classList.remove("faq-item--open");
          }
        });
      }

      toggleFAQItem(item, button, answer, !isExpanded);
    });
  });
}

function toggleFAQItem(item, button, answer, open) {
  if (open) {
    button.setAttribute("aria-expanded", "true");
    answer.style.maxHeight = answer.scrollHeight + "px";
    item.classList.add("faq-item--open");
  } else {
    button.setAttribute("aria-expanded", "false");
    answer.style.maxHeight = "0";
    item.classList.remove("faq-item--open");
  }
}

function initPhoneMask() {
  const phoneInput = document.querySelector("#phone");
  if (!phoneInput) {
    return;
  }

  phoneInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    
    if (!value.startsWith("7") && value.length > 0) {
      if (value.startsWith("8")) {
        value = "7" + value.slice(1);
      } else if (value.length >= 10) {
        value = "7" + value;
      }
    }

    let formatted = "";
    
    if (value.length > 0) {
      formatted = "+7";
      if (value.length > 1) {
        formatted += " (" + value.substring(1, 4);
        if (value.length >= 4) {
          formatted += ")";
        }
        if (value.length >= 5) {
          formatted += " " + value.substring(4, 7);
        }
        if (value.length >= 8) {
          formatted += "-" + value.substring(7, 9);
        }
        if (value.length >= 10) {
          formatted += "-" + value.substring(9, 11);
        }
      }
    }

    e.target.value = formatted;
  });

  phoneInput.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && phoneInput.value === "+7") {
      e.preventDefault();
      phoneInput.value = "";
    }
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length === 11 && cleaned.startsWith("7");
}

function showFieldError(fieldName, errorKey) {
  const field = document.querySelector(`#${fieldName}`);
  const errorEl = document.querySelector(`#error-${fieldName}`);
  const dictionary = translations[currentLanguage];
  
  if (field) {
    field.classList.add("error");
    field.setAttribute("aria-invalid", "true");
  }
  
  if (errorEl && dictionary && dictionary[errorKey]) {
    errorEl.textContent = dictionary[errorKey];
    errorEl.style.display = "block";
  }
}

function clearFieldError(fieldName) {
  const field = document.querySelector(`#${fieldName}`);
  const errorEl = document.querySelector(`#error-${fieldName}`);
  
  if (field) {
    field.classList.remove("error");
    field.setAttribute("aria-invalid", "false");
  }
  
  if (errorEl) {
    errorEl.textContent = "";
    errorEl.style.display = "none";
  }
}

function initForm() {
  const form = document.querySelector("#consultation-form");
  const responseEl = document.querySelector("#form-response");
  
  if (!form || !responseEl) {
    return;
  }

  const fields = ["name", "email", "phone", "message"];

  fields.forEach((fieldName) => {
    const field = document.querySelector(`#${fieldName}`);
    if (field) {
      field.addEventListener("input", () => {
        clearFieldError(fieldName);
        if (responseEl.dataset.messageType === "error") {
          responseEl.textContent = "";
          responseEl.classList.remove("error");
          delete responseEl.dataset.messageType;
        }
      });
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    fields.forEach((fieldName) => clearFieldError(fieldName));

    let hasErrors = false;

    const nameField = document.querySelector("#name");
    const emailField = document.querySelector("#email");
    const phoneField = document.querySelector("#phone");
    const messageField = document.querySelector("#message");
    const consentField = document.querySelector("#consent");

    if (!nameField || !nameField.value.trim()) {
      showFieldError("name", "consult.form.error.required");
      hasErrors = true;
    }

    if (!emailField || !emailField.value.trim()) {
      showFieldError("email", "consult.form.error.required");
      hasErrors = true;
    } else if (!validateEmail(emailField.value.trim())) {
      showFieldError("email", "consult.form.error.email");
      hasErrors = true;
    }

    if (!phoneField || !phoneField.value.trim()) {
      showFieldError("phone", "consult.form.error.required");
      hasErrors = true;
    } else if (!validatePhone(phoneField.value)) {
      showFieldError("phone", "consult.form.error.phone");
      hasErrors = true;
    }

    if (!messageField || !messageField.value.trim()) {
      showFieldError("message", "consult.form.error.required");
      hasErrors = true;
    }

    if (!consentField || !consentField.checked) {
      hasErrors = true;
    }

    if (hasErrors) {
      const dictionary = translations[currentLanguage];
      responseEl.textContent = dictionary["consult.form.error"] || "";
      responseEl.classList.add("error");
      responseEl.classList.remove("success");
      responseEl.dataset.messageType = "error";
      return;
    }

    const formData = {
      name: nameField.value.trim(),
      email: emailField.value.trim(),
      phone: phoneField.value.trim(),
      message: messageField.value.trim(),
      consent: consentField.checked
    };

    console.log("Form submitted successfully:", formData);

    const dictionary = translations[currentLanguage];
    responseEl.textContent = dictionary["consult.form.success"] || "";
    responseEl.classList.add("success");
    responseEl.classList.remove("error");
    responseEl.dataset.messageType = "success";

    form.reset();
    fields.forEach((fieldName) => clearFieldError(fieldName));
  });
}

function initLazyLoad() {
  const lazyMedia = document.querySelectorAll(".lazy-media");

  if (!lazyMedia.length) {
    return;
  }

  if ("IntersectionObserver" in window) {
    const mediaObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const media = entry.target;
          media.classList.add("lazy-media--loaded");
          observer.unobserve(media);
        }
      });
    }, {
      rootMargin: "50px"
    });

    lazyMedia.forEach((media) => {
      mediaObserver.observe(media);
    });
  } else {
    lazyMedia.forEach((media) => {
      media.classList.add("lazy-media--loaded");
    });
  }
}

function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  
  if (!counters.length || !("IntersectionObserver" in window)) {
    return;
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        animateCounter(entry.target);
        entry.target.dataset.counted = "true";
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

function animateCounter(element) {
  const target = parseInt(element.dataset.counter, 10);
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current).toString();
      requestAnimationFrame(updateCounter);
    } else {
      const dictionary = translations[currentLanguage];
      const key = element.dataset.i18n;
      const finalText = dictionary && dictionary[key] ? dictionary[key] : element.dataset.counter;
      element.textContent = finalText;
    }
  };

  requestAnimationFrame(updateCounter);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (href === "#" || !href) {
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        if (window.location.hash !== href) {
          history.pushState(null, "", href);
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initTheme();
  initMobileMenu();
  initFAQ();
  initPhoneMask();
  initForm();
  initLazyLoad();
  initCounters();
  initSmoothScroll();

  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLang = button.dataset.lang;
      updateLanguage(selectedLang);
    });
  });

  const themeToggle = document.querySelector("#theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});
