import React, {FunctionComponent} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LogInPage from '../screens/LogInPage'
import RegisterPage from '../screens/RegisterPage'

const Stack = createStackNavigator();

const StackNavigator:FunctionComponent = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            {/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣습니다. 이 자체로 이제 페이지 기능을 합니다*/}
            <Stack.Screen name="LogInPage" component={LogInPage} />
            <Stack.Screen name="RegisterPage" component={RegisterPage} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default StackNavigator;