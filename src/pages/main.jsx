import { useEffect } from "react"
import { MdHome } from "react-icons/md";

import { AiFillGift } from "react-icons/ai";
import { BsGearFill, BsCardText } from "react-icons/bs";
import { HiCollection } from "react-icons/hi";

import CardDeck from "../components/cards/carddeck";
import CardInfo from "../components/cards/cardinfo";
import CardLink from "../components/cards/cardlink";

export default function Main ({ setSidebarContent }) {
    
    /* Sidebar */
    useEffect(() => {
        setSidebarContent([
            { section: "Quick links" },
            { content: "Home", icon: MdHome, url: "/" },
            { content: "API", icon: HiCollection, url: "/" },
            { content: "Credits", icon: AiFillGift, url: "/" },
            { content: "Settings", icon: BsGearFill, url: "/" },
            { content: "Submit Feedback", icon: BsCardText, url: "/" },

            { section: "Explore AWS" },
            {
                url: "/",
                content: 
                    <div>
                        <b>Amazon Redshift</b>
                        <p>Fast, simple, cost-effective data warehouse that can extend queries to your data lake.</p>
                    </div>,
            },
            {
                url: "/",
                content: 
                    <div>
                        <b>Run Serverless Containers with AWS Fargate</b>
                        <p>AWS Fargate runs and scales your containers without having to manage servers or clusters.</p>
                    </div>,
            },
            {
                url: "/",
                content: 
                    <div>
                        <b>Scalable, Durable, Secure Backup & Restore with Amazon S3</b>
                        <p>Discover how customers are building backup & restore solutions on AWS that save money.</p>
                    </div>,
            },

            {
                url: "/",
                content: 
                    <div>
                        <b>AWS Marketplace</b>
                        <p>Find, buy, and deploy popular software products that run on AWS.</p>
                    </div>,
            }
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

            <CardDeck title="Build a solution" description="Get started with simple wizards and automated workflows.">
                <CardLink
                    title="Launch a virtual machine"
                    description="With EC2"
                    time="2-3 minutes"
                    url="/"
                    icon={
                        <img src="/ec2.png" alt="Support icon"/>
                    }
                />
                <CardLink
                    title="Build a web app"
                    description="With Elastic Beanstalk"
                    time="6 minutes"
                    url="/"
                    icon={
                        <img src="/ebs.png" alt="Support icon"/>
                    }
                />
                <CardLink
                    title="Build using virtual servers"
                    description="With Lightsail"
                    time="1-2 minutes"
                    url="/"
                    icon={
                        <img src="/lightsail.png" alt="Support icon"/>
                    }
                />
                <CardLink
                    title="Connect an IoT device"
                    description="With AWS IoT"
                    time="5 minutes"
                    url="/"
                    icon={
                        <img src="/iot.png" alt="Support icon"/>
                    }
                />
                <CardLink
                    title="Start a development project"
                    description="With CodeStar"
                    time="5 minutes"
                    url="/"
                    icon={
                        <img src="/codestar.png" alt="Support icon"/>
                    }
                />
                <CardLink
                    title="Register a domain"
                    description="With Route 53"
                    time="5 minutes"
                    url="/"
                    icon={
                        <img src="/route53.png" alt="Support icon"/>
                    }
                />
            </CardDeck>
        
            <CardDeck title="Learn to build" description="Learn to deploy your solutions through step-by-step guides, labs and videos.">
                <CardLink
                    title="Websites and Web Apps"
                    description="3 videos, 3 tutorials, 3 labs"
                    time="5 minutes"
                    url="/"
                    icon={
                        <img src="/webapp.png" alt="Support icon"/>
                    }
                />
                <CardLink
                    title="Storage"
                    description="3 videos, 3 tutorials, 3 labs"
                    time="5 minutes"
                    url="/"
                    icon={
                        <img src="/storage.png" alt="Support icon"/>
                    }
                />
                <CardLink
                    title="Databases"
                    description="3 videos, 3 tutorials, 3 labs"
                    time="5 minutes"
                    url="/"
                    icon={
                        <img src="/database.png" alt="Support icon"/>
                    }
                />
                <CardLink
                    title="DevOps"
                    description="3 videos, 3 tutorials, 3 labs"
                    time="5 minutes"
                    url="/"
                    icon={
                        <img src="/devops.png" alt="Support icon"/>
                    }
                />
                <CardLink
                    title="Machine Learning"
                    description="3 videos, 3 tutorials, 3 labs"
                    time="5 minutes"
                    url="/"
                    icon={
                        <img src="/machinelearning.png" alt="Support icon"/>
                    }
                />
                <CardLink
                    title="Big Data"
                    description="3 videos, 1 lab"
                    time="5 minutes"
                    url="/"
                    icon={
                        <img src="/bigdata.png" alt="Support icon"/>
                    }
                />
            </CardDeck>
        </div>
    )
}