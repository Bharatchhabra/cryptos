import React from 'react'
import footer_table from '../../../assets/images/Table.png'
import singlebulb from '../../../assets/images/Nuevo grupo1 2.png'

export const MintFooterTable = () => {
    return (
        <div className="mint_page_footer position-relative">
        <div>
            <img src={singlebulb} className="img-fluid single_bulb"/>
        </div>
        <div className="footer_mint_table">
            <img src={footer_table} className="img-fluid"/>
        </div>
        </div>
    )
}
