function showDiv(divId) {
    const divs = document.querySelectorAll('.container');
    divs.forEach((div) => {
      if (div.id === divId) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    });
  }
  