declare module 'react-native' {
    export * from 'react-native-web';
    export { default } from 'react-native-web';
}

// Ensure TypeScript knows about the types
declare module 'react-native-web' {
    export * from '@types/react-native';
}