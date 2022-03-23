import React from 'react';
import '../style/project.css'
import Carousel from 'react-bootstrap/Carousel'
import Lembrei from './projects/Lembrei';
import ReceitasShowShow from './projects/ReceitasShowShow';
import StoreManager from './projects/StoreManager';
import Wallet from './projects/Wallet';
import PlayTunes from './projects/PlayTunes';
import BlogsAPI from './projects/BlogsAPI';

export default function Projects() {
  return (
    <div className='carousel-container'>
      <Carousel className='carousel' fade interval={3000}>
        <Carousel.Item className='carousel-card' >
          <ReceitasShowShow />
        </Carousel.Item>
        <Carousel.Item className='carousel-card'>
          <BlogsAPI />
        </Carousel.Item>
        <Carousel.Item className='carousel-card' >
          <StoreManager />
        </Carousel.Item>
        <Carousel.Item className='carousel-card' >
          <Lembrei />
        </Carousel.Item>
        <Carousel.Item className='carousel-card' >
          <PlayTunes />
        </Carousel.Item>
        <Carousel.Item className='carousel-card' >
          <Wallet />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
