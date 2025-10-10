    const titles = document.querySelectorAll('.title');

    titles.forEach(title => {
      title.addEventListener('click', () => {
        const section = title.parentElement;
        section.classList.toggle('active');
      });
    });
