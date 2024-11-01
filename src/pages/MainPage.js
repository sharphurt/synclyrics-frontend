import {LeadBlock} from "../components/main/LeadBlock";
import './MainPage.sass'
import {ListenAndSingAlongBlock} from "../components/main/ListenAndSingAlongBlock";
import {SharingBlock} from "../components/main/SharingBlock";
import {KaraokeFeatureBlock} from "../components/main/KaraokeFeatureBlock";
import {GetStartedBlock} from "../components/main/GetStartedBlock";
import {Footer} from "../components/main/Footer";
import {ReactLenis} from 'lenis/react'

export const MainPage = () => {
    return <div className="main-page-container">
        <ReactLenis root>
            <LeadBlock/>
            <ListenAndSingAlongBlock/>
            <SharingBlock/>
            <KaraokeFeatureBlock/>
            <GetStartedBlock/>
            <Footer/>
            <svg className="star" width="18000" height="18000" viewBox="0 0 18000 18000" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9000.49 0.779053V9018.53M9000.49 9018.53L10622.2 145.705M9000.49 9018.53L12191.7 575.822M9000.49 9018.53L13658.7 1277.31M9000.49 9018.53L14976 2227.62M9000.49 9018.53L16101.2 3396.21M9000.49 9018.53L16998.2 4745.51M9000.49 9018.53L17638.2 6232.17M9000.49 9018.53L18000.5 7808.39M9000.49 9018.53L17855 11025.7M9000.49 9018.53L17351.8 12563.3M9000.49 9018.53L16580.2 13987M9000.49 9018.53L15565.1 15251M9000.49 9018.53L14338.9 16314.8M9000.49 9018.53L12941.1 17144M9000.49 9018.53L11416.7 17712.1M9000.49 9018.53L9814.61 18000.8M9000.49 9018.53L8186.37 18000.8M9000.49 9018.53L6584.29 17712.1M9000.49 9018.53L5059.87 17144M9000.49 9018.53L3662.11 16314.8M9000.49 9018.53L2435.93 15251M9000.49 9018.53L1420.73 13987M9000.49 9018.53L649.159 12563.3M9000.49 9018.53L146.004 11025.7M9000.49 9018.53L0.490234 7808.39M9000.49 9018.53L362.809 6232.17M9000.49 9018.53L1002.75 4745.51M9000.49 9018.53L1899.74 3396.21M9000.49 9018.53L3024.96 2227.62M9000.49 9018.53L4342.24 1277.31M9000.49 9018.53L5809.24 575.822M9000.49 9018.53L7378.8 145.705M9000.49 9018.53L18000.5 9375.68M9000.49 9018.53L0.490234 9375.68"
                    stroke="url(#paint0_radial_492_162)"/>
                <defs>
                    <radialGradient id="paint0_radial_492_162" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(8860 9000) rotate(-90) scale(1850 1850)">
                        <stop offset="0.05" stopColor="white" stopOpacity="0"/>
                        <stop offset="0.5" stopColor="white" stopOpacity="0.2"/>
                        <stop offset="1" stopColor="white"/>
                    </radialGradient>
                </defs>
            </svg>
        </ReactLenis>
    </div>
}
