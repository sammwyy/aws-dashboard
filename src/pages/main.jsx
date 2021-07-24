import { useEffect } from "react"
import { MdHome } from "react-icons/md";

import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { HiCollection } from "react-icons/hi";

import CardDeck from "../components/cards/carddeck";
import CardInfo from "../components/cards/cardinfo";

export default function Main ({ setSidebarContent }) {
    
    /* Sidebar */
    useEffect(() => {
        setSidebarContent([
            { content: "Home", icon: MdHome, url: "/" },
            { content: "API", icon: HiCollection, url: "/" },
            { content: "Credits", icon: AiFillGift, url: "/" },
            { content: "Settings", icon: BsGearFill, url: "/" }
        ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* View content */
    return (
        <div>
            <CardDeck>
                <CardInfo 
                    color="1" 
                    title="Services" 
                    value="4" 
                    url="/" 
                    icon={
                        <img className="filter-invert" src="/services.png" alt="Services icon"/>
                    } 
                />
                <CardInfo 
                    color="2" 
                    title="Invoice" 
                    value="$34.99" 
                    url="/" 
                    icon={
                        <img className="filter-invert" src="/invoice.png" alt="Invoice icon"/>
                    } 
                />
                <CardInfo 
                    color="3" 
                    title="Warnings" 
                    value="12 unread" 
                    url="/" 
                    icon={
                        <img className="filter-invert" src="/warning.png" alt="Warning icon"/>
                    }
                />
                <CardInfo 
                    color="4" 
                    title="Tickets" 
                    value="4 Opened" 
                    url="/" 
                    icon={
                        <img className="filter-invert" src="/support.png" alt="Support icon"/>
                    }
                />
            </CardDeck>

            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam impedit est saepe minus autem obcaecati laboriosam. Fugiat omnis aperiam maiores commodi? Eum, enim magni pariatur quo quod atque illum.</p>
        </div>
    )
}