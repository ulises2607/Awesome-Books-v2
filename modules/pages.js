export const pages = (sect, pgL) => {
  sect.forEach((section, index) => {
    if (index !== 0) {
      section.style.display = 'none';
    }
  });

  // Add a click event to each page link
  pgL.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      // Show the corresponding section and hide the others
      sect.forEach((section, sectionIndex) => {
        if (sectionIndex === index) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
};

export default pages;