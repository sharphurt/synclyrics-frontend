import './GetStartedBlock.sass'
import {LogoIcon} from "../../icons/LogoIcon";
import {ArrowRightIcon} from "../../icons/ArrowRightIcon";
import {GooglePlayLogo} from "../../icons/GooglePlayLogo";

export const GetStartedBlock = () => {
    return <div className="get-started-block-container">
        <div className="get-started-block-content">
            <span className="block-header">So, let’s get started</span>
            <div className="get-app-cards-container">
                <div className="get-app-card get-app-login-card" onClick={() => window.location.href = '/login'}>
                    <div className="get-started-card-wrapper">
                        <LogoIcon/>
                        <div className="card-text-icon-wrapper">
                            <span>Login to Sinkuro</span>
                            <ArrowRightIcon/>
                        </div>
                    </div>
                </div>
                <div className="get-app-card get-app-google-play-card" onClick={() => window.location.href = 'https://www.google.com/search?q=google+play'}>
                    <div className="get-started-card-wrapper">
                        <GooglePlayLogo/>
                        <div className="card-text-icon-wrapper">
                            <span>Get out mobile app</span>
                            <ArrowRightIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}