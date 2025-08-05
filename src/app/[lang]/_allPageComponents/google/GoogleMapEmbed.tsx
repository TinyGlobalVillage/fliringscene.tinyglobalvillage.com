'use client';

import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  box-shadow: 0 0 15px #00bfff, 0 0 15px #00bfff;
    border-radius: 25px;
  border: 2px solid #00bfff;
  margin: 1rem auto 1.5rem;

@media ${media.laptopL}{
max-width: 750px;
}

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export default function GoogleMapEmbed() {
  return (
    <MapWrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1079.972574785239!2d11.494793172312473!3d64.01700618980672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46729b2443ff205f%3A0xed7b859454fde5df!2sKongens%20Gate%2022%2C%207715%20Steinkjer%2C%20Norway!5e1!3m2!1sen!2sse!4v1753953846554!5m2!1sen!2sse"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </MapWrapper>
  );
}
