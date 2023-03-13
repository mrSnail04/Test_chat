import React, { useEffect, useState } from 'react';
import { Stub } from './components/Stub';

import { PageIndex } from './pages/index';

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const mql = window.matchMedia('(max-width: 700px)')

        function updateScreenMatch(mq: MediaQueryList) {
            setIsMobile(mq.matches);
        }

        mql.addListener(updateScreenMatch as any);

        return () => mql.removeListener(updateScreenMatch as any);
    }, []);

    if (isMobile) {
        return (
            <div className="App">
                <Stub />
            </div>
        )
    }

    return (
        <div className="App">
            <PageIndex />
        </div>
    );
}

export default App;
