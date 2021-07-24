import { useEffect } from "react"
import { MdHome } from "react-icons/md";

import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { HiCollection } from "react-icons/hi";

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
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam impedit est saepe minus autem obcaecati laboriosam. Fugiat omnis aperiam maiores commodi? Eum, enim magni pariatur quo quod atque illum.</p>
        </div>
    )
}