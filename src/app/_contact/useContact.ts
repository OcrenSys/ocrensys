const useContact = () => {
  const containerTitle = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      duration: 2,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const containerTitleItem = {
    initial: {
      x: -400,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  const containerForm = {
    initial: {
      x: 400,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return {
    containerForm,
    containerTitle,
    containerTitleItem,
  };
};

export default useContact;
