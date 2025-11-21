import { hyperspeedPresets } from "../hyperspeedPreset"
import Hyperspeed from "../Hyperspeed"

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
                <h1 style={{ color: 'white', fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
                    Welcome
                    <p style={{ color: 'white', fontSize: '1.5rem' }}>
                        stranger
                    </p>
                </h1>
                <p style={{ color: 'white', fontSize: '1.5rem' }}>
                    Stay tuned!!!
                </p>
            </div>
        </div>)
}