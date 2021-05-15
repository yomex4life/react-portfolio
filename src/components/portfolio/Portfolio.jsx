import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { useState } from 'react'

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const listmenu = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "branding",
            title: "Branding"
        },
        {
            id: "design",
            title: "Design"
        }
    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {listmenu.map((item)=>(
                    <PortfolioList title={item.title} key={item.id} active={selected ===item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1620938730536-bb55b81ab053?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1611095966422-50a79dd5313b?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1621034894753-846674a2ca33?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1621045246196-4c7ce9092d3a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNTB8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
