import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'

const PageContainer = (props: any) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : ''}
            style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#fff',
            }}
        >
            {props.children}
        </KeyboardAvoidingView>
    )
}

export default PageContainer
