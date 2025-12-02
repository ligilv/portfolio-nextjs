import { hyperspeedPresets } from "../hyperspeedPreset"
import Hyperspeed from "../Hyperspeed"
import TextType from '../../../../components/TextType';


export const Home = () => {
    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <Hyperspeed
                effectOptions={hyperspeedPresets.six as any}
            />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10,
                pointerEvents: 'none'
            }}>

                <TextType
                    text={["Welcome", "stranger", "Stay tuned..."]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-6xl font-bold text-white"
                />
                <h1 style={{ color: 'white', fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
                    <p style={{ color: 'white', fontSize: '1.5rem' }}>
                        liiigi
                    </p>
                </h1>
            </div>
        </div>)
}