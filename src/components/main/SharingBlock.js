import './SharingBlock.sass'

export const SharingBlock = () => {
    return <div className="sharing-block-container">
        <div className="sharing-block-content">
            <span className="block-header">Sing along <span className="wb-gradient">with your friends</span></span>
            <div className="image-container">
                <img src={require('../../static/image/phone.png')} width={783} height={1090}/>
                <span className="feature-text-wrapper">
                    <span className="semibold-text">Share the join code </span>so your friends can see the synced lyrics of the track you're currently playing
                </span>
                <span className="feature-text-wrapper">
                    Have a party with your<br/> favorite music!
                </span>
            </div>
        </div>
    </div>
}