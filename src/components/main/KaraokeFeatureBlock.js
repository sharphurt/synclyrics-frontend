import './KaraokeFeatureBlock.sass'
import {PointerIcon} from "../../icons/PointerIcon";
import {AudioIcon} from "../../icons/AudioIcon";

export const KaraokeFeatureBlock = () => {
    return <div className="karaoke-feature-block-container">
        <div className="karaoke-feature-block-content">
            <span className="block-header"><span className="by-gradient">Get karaoke</span> to the tracks you listening to</span>
            <div className="karaoke-cards-container">
                <div className="karaoke-card karaoke-card-blue">
                    <div className="karaoke-card-header">
                        <div className="karaoke-card-icon-container">
                            <PointerIcon/>
                        </div>
                        <span>Sing karaoke the way you like it</span>
                    </div>
                    <span className="karaoke-card-text">Choose versions with or without vocals,<br/> full or shortened versions and more</span>
                </div>
                <div className="karaoke-card karaoke-card-yellow">
                    <div className="karaoke-card-header">
                        <div className="karaoke-card-icon-container">
                            <AudioIcon/>
                        </div>
                        <span>Get a real-time assessment</span>
                    </div>
                    <span className="karaoke-card-text">Sing as accurately as possible,<br/>and AI-based algorithms will rate your skill</span>
                </div>
            </div>
            <span className="karaoke-disclaimer">Please, note that karaoke may not be available for some tracks.<br/>Karaoke provided by Karaoke Mugen. <a href="/legal">See more</a></span>
        </div>
    </div>
}