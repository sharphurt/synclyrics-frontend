import './ListenAndSingAlongBlock.sass'
import {LogoIcon} from "../../icons/LogoIcon";
import {ArrowRightIcon} from "../../icons/ArrowRightIcon";

export const ListenAndSingAlongBlock = () => {
    return <div className="listen-and-sing-along-block-container">
        <div className="listen-and-sing-along-block-content">
            <span className="block-header">Listen and <span className="op-gradient">sing along  </span> </span>
            <div className="step-cards-container">
                <div className="step-card orange-card-content">
                    <div className="blur"></div>
                    <span className="step-number">1</span>
                    <span className="step-card-text"><span className="semibold-text">Login to Sinkuro</span> with you Spotify account
                    </span>
                </div>
                <div className="step-card pink-card-content">
                    <div className="blur"></div>
                    <span className="step-number">2</span>
                    <span className="step-card-text"><span className="semibold-text">Turn on your favorite track</span> and enjoy  the singing experience</span>
                </div>
                <div className="step-card filled-bg-card-content" onClick={() => window.location.href = '/login'}>
                    <div className="filled-bg-card-wrapper">
                        <LogoIcon/>
                        <div className="login-text-wrapper">
                            <span className="step-card-text black-text semibold-text">Login to Sinkuro</span>
                            <ArrowRightIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}