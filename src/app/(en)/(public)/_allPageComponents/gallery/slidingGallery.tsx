'use client';

import Card from '../cards/Card';
import {slidingGallery, Slide} from '../../gallery/data/slidingGallery';
import ScrollWrap from './ScrollWrap'
import { useState, MouseEvent } from 'react';


export default function SlidingGallery(){
	const {title, intro, slides} = slidingGallery;
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    function openViewer(idx: number) {
    setOpenIdx(idx);
  }

	return (
	<section>
	<h2>{title}</h2>
	{intro && <p>{intro}</p>}

	<ScrollWrap>
{slides.map((slide: Slide, idx: number) => (
  <Card
    key={idx}
    title={slide.title}                 // ← pass only CardProps here
    shadow="pink"
    className="gallery-card"
    onClick={(e) => {
      e.stopPropagation();
      openViewer(idx);
    }}
  >
    <img
      src={slide.src}                    // ← image as child, not prop
      alt={slide.alt}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '4px',
      }}
    />
  </Card>
))}
	</ScrollWrap>
	</section>
	); 
}


