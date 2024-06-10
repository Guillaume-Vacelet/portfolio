import { ExpandableCard } from "./expandable-card";
import CardToModal from "./card-to-modal";
import SafecheckProject from "./safecheck-project";

export interface Project {
    cardThumbnail: string;
    title: string;
    subtitle: string;
    desc: string;
    images: string[]
}

export default function ProjectsSection() {
    const projects : Project[] = [
        {
            cardThumbnail: './favicon.ico',
            title: 'Safecheck',
            subtitle: 'Counterfeit authenticator app',
            desc: '',
            images: [],
        }
    ]

    return (
        <div id="projects" className="section">
            <h2 className="section-title">Projects</h2>
            <div className="h-full w-full flex flex-row gap-[100px] justify-center items-center">
                {/* <ExpandableCard>
                    <SafecheckProject />
                </ExpandableCard> */}
                <CardToModal />
            </div>
        </div>
    )
}