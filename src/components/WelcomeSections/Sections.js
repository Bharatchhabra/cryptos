import React from 'react'
import { Container } from 'react-bootstrap'
import Counter from '../WelcomeSections/Counter'
import { WelcomeSection } from '../WelcomeSections/WelcomeSection'
import { SectionBox } from '../WelcomeSections/SectionBox'
import { Sectionsec } from '../WelcomeSections/SectionSec'
import { Sectionthird } from '../WelcomeSections/SectionThird'
import { Newsletter } from './Newsletter'

export const Sections = () => {
    return (
        <div>
            <Container className="content pt-5">
            <Counter />
            <WelcomeSection />
            <SectionBox />
            <Sectionsec />
            <Sectionthird />
            <Newsletter />
            </Container>
        </div>
    )
}
