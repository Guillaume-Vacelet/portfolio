'use client'
import SocialLinkIconButton from "./social-link-icon-button";
import AnchorLink from "react-anchor-link-smooth-scroll"

export default function HomeSection() {
    return (
        <div id="home" className="section">
            <div className="h-full flex flex-row">
                <div className="h-full flex flex-1 flex-col items-center justify-center gap-10 ">
                    <div className="flex flex-col items-start">
                        <p className="text-base pl-[8px]">Hi, my name is</p>
                        <h1 className="text-7xl">Guillaume Vacelet</h1>
                        <h2 className="text-3xl pl-[8px]">I'm a French fullstack developer</h2>
                    </div>
                </div>
                <div className="h-full flex flex-1 flex-row items-center justify-center gap-10">
                    <img className="h-[300px] w-[300px] rounded-full bg-white" src="/static/images/me.jpeg"/>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                            <SocialLinkIconButton
                                link="https://github.com"
                                icon="/static/images/github.svg"
                            />
                            <SocialLinkIconButton
                                link="https://www.linkedin.com/in/guillaume-vacelet"
                                icon="/static/images/linkedin.svg"
                            />
                        </div>
                        <SocialLinkIconButton
                            label="Download my resume"
                            link="/static/coffee-notice.pdf"
                            icon="/static/images/arrow-down-circle.svg"
                            hoverIcon="/static/images/arrow-down-circle-fill.svg"
                        />
                    </div>
                    
                </div>
            </div>

            <div className="w-full flex items-center justify-center">
                <AnchorLink href='#projects' className="cursor-pointer">
                    <img src="/static/images/chevron-down.svg" className=""/>
                </AnchorLink>
            </div>
        </div>
    )
}