import React, { useState } from 'react'

import { LookAndFeel, Page, Title, Button } from './App.styles'

type Pages = 'menu' | 'trainer'

const App = () => {
    const [page, setPage] = useState<Pages>('menu')


    return (
        <>
            <LookAndFeel />

            <Page className={page !== 'menu' && 'hidden'}>
                <Title>Nyx - AI Chess Trainer</Title>

                <Button onClick={() => setPage('trainer')}>Train</Button>
                <Button>Settings</Button>
                <Button>Exit</Button>
            </Page>

            <Page className={page !== 'trainer' && 'hidden'}>


            </Page>
        </>)
}

export default App
