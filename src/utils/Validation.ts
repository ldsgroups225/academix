export const validateEmail = (email: string): string | undefined => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return "L'email est requis";
  }
  if (!emailRegex.test(email)) {
    return "L'email n'est pas valide";
  }
  return undefined;
};

export const validatePassword = (password: string): string | undefined => {
  if (!password) {
    return "Le mot de passe est requis";
  }
  if (password.length < 8) {
    return "Le mot de passe doit contenir au moins 8 caractères";
  }
  if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    return "Le mot de passe doit contenir au moins un chiffre et une lettre";
  }
  return undefined;
};

export const validatePhoneNumber = (
  phoneNumber: string
): string | undefined => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  if (!phoneNumber) {
    return "Le numéro de téléphone est requis";
  }
  if (!phoneRegex.test(phoneNumber)) {
    return "Le numéro de téléphone n'est pas valide";
  }
  return undefined;
};

export const validateName = (name: string): string | undefined => {
  if (!name) {
    return "Le nom est requis";
  }
  if (name.length < 2) {
    return "Le nom doit contenir au moins 2 caractères";
  }
  return undefined;
};

export const validateSchoolLevel = (level: string): string | undefined => {
  const validLevels = [
    "6ème",
    "5ème",
    "4ème",
    "3ème",
    "Seconde",
    "Première",
    "Terminale",
  ];
  if (!level) {
    return "Le niveau scolaire est requis";
  }
  if (!validLevels.includes(level)) {
    return "Le niveau scolaire n'est pas valide";
  }
  return undefined;
};

export const validateSmsCode = (code: string): string | undefined => {
  if (!code) {
    return "Le code SMS est requis";
  }
  if (code.length !== 6 || !/^\d+$/.test(code)) {
    return "Le code SMS doit contenir 6 chiffres";
  }
  return undefined;
};
