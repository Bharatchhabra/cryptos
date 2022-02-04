import React from 'react'
import { Container } from 'react-bootstrap'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Newsletter } from '../../components/WelcomeSections/Newsletter'
import { Mint } from './mintsection/Mint'
import { MintContent } from './mintsection/MintContent'
import { MintFooterTable } from './mintsection/MintFooterTable'
import { Restricted } from './restrictedarea/Restricted'

export const Mintpages = () => {
    return (
        <>
        {/* <div className="mintpage"> */}
            <Header />
            <Mint />
            <MintContent />
            <Restricted />
            <Container className="content newsletter_content">
            <Newsletter />
            </Container>
            <MintFooterTable />
            <div className="mint__footer">
            <Footer />
            </div>
        {/* </div> */}
        </>
    )
}
