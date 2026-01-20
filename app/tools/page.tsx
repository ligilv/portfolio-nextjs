import { View, Text, Platform } from 'react-native'

type Props = {}

const page = (props: Props) => {
    console.log('Platform', Platform)
    return (
        <View style={
            {
                backgroundColor: 'red',
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: Platform.OS === 'web' ? '100vh' : '100%',
            }
        }>
            <Text style={{ color: 'white' }}>This is web</Text>
        </View>
    )
}

export default page