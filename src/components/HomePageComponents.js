import React from 'react'
import { Container } from 'react-bootstrap'
import { Header } from './header/Header'
import { Sections } from './WelcomeSections/Sections'
import { RoadMapContent } from './roadmap/RoadMapContent'
import { Tablegallery } from './gallery/Tablegallery'
import { GirlGallery } from './gallery/GirlGallery'
import { Distribution } from './distribution/Distribution'
import { Footer } from './footer/Footer'
import { Carousel } from './header/Carousel'

export const HomePageComponents = () => {
    return (
        <div className="homepage">
          <Header />
          <Carousel />
          <Sections />
          <RoadMapContent />
          <Tablegallery />
          <GirlGallery />
          <Distribution />
          <Footer />
        </div>
    )
}
