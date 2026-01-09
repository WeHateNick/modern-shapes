import './style.css';
import modernShapesLogo from '/images/modern-shapes-logo.svg';
import coverArt from '/images/cover-art--dark-bg.svg';
import spotifyIcon from '/images/spotify-icon.svg';
import appleMusicIcon from '/images/apple-icon.svg';
import amazonMusicIcon from '/images/amazon-music-icon.png';
import youtubeMusicIcon from '/images/youtube-music-icon.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="title">
      <img src="${modernShapesLogo}" class="logo" alt="Modern Shapes" />
      <h2>MOMENTS WITH OTHERS MATTER</h2>
      <a href="https://open.spotify.com/album/03KcJx1kYvAMtJ6Iism3OL?si=fdZTJSRTTUWuqpyRiIft3w" target="_blank" alt="Modern Shapes album on Spotify">
        <img src="${coverArt}" class="cover-art" alt="Modern Shapes" />
      </a>
    </div>
    <div class="platforms">
      <div class="platform spotify">
        <h2>Listen on Spotify</h2>
        <a class="button spotify" href="https://open.spotify.com/album/03KcJx1kYvAMtJ6Iism3OL?si=fdZTJSRTTUWuqpyRiIft3w" target="_blank">
          <div class="icon-separator">
            <span>MOMENTS WITH OTHERS MATTER</span>
            <img class="icon" src="${spotifyIcon}" alt="Spotify Logo" />
          </div>
        </a>
      </div>
      <div class="platform apple">
        <h2>Listen on Apple Music</h2>
        <a class="button apple" href="https://music.apple.com/us/album/moments-with-others-matter/1864091636" target="_blank">
          <div class="icon-separator">
            <span>MOMENTS WITH OTHERS MATTER</span>
            <img class="icon" src="${appleMusicIcon}" alt="Apple Music Logo" />
          </div>
        </a>
      </div>
      <div class="platform amazon">
        <h2>Listen on Amazon Music</h2>
        <a class="button amazon" href="https://music.amazon.com/albums/B0GCCZZSPJ?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_hgfb1IAgMtZ5mfQxU76mhiX55" target="_blank">
          <div class="icon-separator">
            <span>MOMENTS WITH OTHERS MATTER</span>
            <img class="icon" src="${amazonMusicIcon}" alt="Amazon Music Logo" />
          </div>
        </a>
      </div>
      <div class="platform YouTube Music">
        <h2>Listen on YouTube Music</h2>
        <a class="button apple" href="https://music.youtube.com/playlist?list=OLAK5uy_ntruUhVlHjor2lzPXJbhIgqIrjDv6BDTs&si=UARYG-j0mdIdgvqy" target="_blank">
          <div class="icon-separator">
            <span>MOMENTS WITH OTHERS MATTER</span>
            <img class="icon" src="${youtubeMusicIcon}" alt="YouTube Music Logo" />
          </div>
        </a>
      </div>
      <div class="platform YouTube Music">
        <h2>Follow on Instagram</h2>
        <a class="button" href="https://www.instagram.com/modernshapes_/" target="_blank">
          <div class="icon-separator">
            <span>Modern Shapes on Instagram</span>
          </div>
        </a>
      </div>
    </div>
  </div>
`;

setupCounter(document.querySelector('#counter'));
