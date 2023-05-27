
export const isValidEmail = (email: string) => {
    // Basic email validation regex

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return emailRegex.test(email);
  };