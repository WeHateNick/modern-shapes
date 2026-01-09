import './style.css';
import modernShapesLogo from '/images/modern-shapes-logo.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="title">
      <img src="${modernShapesLogo}" class="logo" alt="Modern Shapes" />
      <h2>MOMENTS WITH OTHERS MATTER</h2>
    </div>
    <div class="platforms">
      <div class="platform spotify">
        <h2>Listen on Spotify</h2>
        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/03KcJx1kYvAMtJ6Iism3OL?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="platform apple">
        <h2>Listen on Apple Music</h2>
        <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/moments-with-others-matter/1864091636"></iframe>
      </div>
      <div class="platform amazon">
        <h2>Listen on Amazon Music</h2>
        <iframe id='AmazonMusicEmbedB0GCCZZSPJ' src='https://music.amazon.com/embed/B0GCCZZSPJ/?id=yT4vUQhPJX&marketplaceId=ATVPDKIKX0DER&musicTerritory=US' width='100%' height='352px' frameBorder='0' style='border-radius:20px;max-width:'></iframe>
      </div>
      <div class="platform YouTube Music">
        <h2>Listen on Apple Music</h2>
        <a class="button" href="https://music.youtube.com/channel/UCaqB6IerUHT0sDT-_6HNffg?si=O4eJ2Ci522f2BV_Y" target="_blank">YouTube Music</a>
      </div>
    </div>
  </div>
`;

setupCounter(document.querySelector('#counter'));
