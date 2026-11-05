import { View, Text, Platform, type DimensionValue } from 'react-native'

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
                // ponytail: vh is valid on web, RN's types just don't know it
                height: (Platform.OS === 'web' ? '100vh' : '100%') as DimensionValue,
            }
        }>
            <Text style={{ color: 'white' }}>This is web</Text>
        </View>
    )
}

export default page