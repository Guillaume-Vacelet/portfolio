import { Project } from "./projects"
import "/public/static/css/safecheck-project.scss";

export default function SafecheckProject() {


    return (
        <div className="container">
            <div className="header">
                <h2 className="title animated">Safecheck</h2>
            </div>
            {/* <h3 className="size-[32px] font-normal"></h3>
            <div className="flex p-[8px] rounded-full bg-black text-white hidden">react-native</div>
            <p className="size-[16px] font-normal"></p> */}
            <div className="imgContainer">
                <img src="/static/images/safecheck/mobile-screens.png"/>
            </div>
        </div>
    )
}