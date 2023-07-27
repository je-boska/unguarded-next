export function run1kflowers() {
  // create an array of flower emojis
  const emojis = ['🌸', '🌷', '🌹', '🌻', '🌼'];

  // get the container element
  const container = document.querySelector('.flowers');

  // create and append 1000 span elements to the container
  for (let i = 0; i < 997; i++) {
    const span = document.createElement('span');
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    container.appendChild(span);
  }

  // add a hover event listener to each span element
  const spans = document.querySelectorAll('span');
  spans.forEach((span) => {
    span.addEventListener('mouseover', () => {
      // pick a new random emoji from the array
      const newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      // set the span's text content to the new emoji
      span.textContent = newEmoji;
    });
  });

  // add a touch event listener to each span element
  spans.forEach((span) => {
    let touchStartX;
    let touchStartY;

    span.addEventListener('touchstart', (event) => {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    });

    span.addEventListener('touchmove', (event) => {
      const touchEndX = event.touches[0].clientX;
      const touchEndY = event.touches[0].clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      const angle = Math.atan2(deltaY, deltaX);
      const degrees = (angle * 180) / Math.PI;
      let newEmoji;

      if (degrees > -45 && degrees <= 45) {
        // swipe right
        newEmoji =
          emojis[(emojis.indexOf(span.textContent) + 1) % emojis.length];
      } else if (degrees > 45 && degrees <= 135) {
        // swipe down
        newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      } else if (degrees > 135 || degrees <= -135) {
        // swipe left
        newEmoji =
          emojis[
            (emojis.indexOf(span.textContent) - 1 + emojis.length) %
              emojis.length
          ];
      } else {
        // swipe up
        newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      }

      span.textContent = newEmoji;
    });
  });

  // play the first audio file on page load
  const audio = document.getElementById('audio');
  audio.volume = 0.2;
  audio.play();

  // add a click event listener to the container element
  let isInitialClick = true;
  container.addEventListener('click', () => {
    if (isInitialClick) {
      // play the second audio file
      audio.src = 'audio/11,11.mp3';
      audio.load();
      audio.play();

      // reset all emojis to the first one
      spans.forEach((span) => {
        span.textContent = emojis[0];
      });

      isInitialClick = false;
    } else {
      // get the index of the current emoji in the array
      const currentIndex = emojis.indexOf(spans[0].textContent);
      // get the next emoji in the array
      const nextEmoji = emojis[(currentIndex + 1) % emojis.length];
      // set the text content of all span elements to the next emoji
      spans.forEach((span) => {
        span.textContent = nextEmoji;
      });

      // play the next audio file in the list
      const sources = audio.querySelectorAll('source');
      const currentSourceIndex = Array.from(sources).findIndex(
        (source) => source.src === audio.src
      );
      const nextSourceIndex = (currentSourceIndex + 1) % sources.length;
      audio.src = sources[nextSourceIndex].src;
      audio.load();
      audio.play();
    }
  });
}
