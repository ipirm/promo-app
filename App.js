import React, {useState} from 'react'
import {AppNavigation} from "./src/navigation/AppNavigation"
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import {Provider} from 'react-redux'
import store from './src/store'

async function loadApplication() {
    await Font.loadAsync({
        'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
}

export default function App() {
    const [isReady, setIsReady] = useState(false);
    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadApplication}
                onError={(err) => console.log(err)}
                onFinish={() => setIsReady(true)}
            />
        )
    }
    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    )
}

