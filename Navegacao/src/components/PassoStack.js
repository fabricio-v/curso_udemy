import React from 'react';
import {View, Text, Button} from 'react-native';

export default (props) => {
    return (
        <View style={{flexGrow: 1}}>
            <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                {props.voltar ? (
                    <Button
                        title="Voltar"
                        onPress={() => {
                            props.navigation.goBack();
                        }}
                    />
                ) : (
                    false
                )}

                {props.avancar ? (
                    <Button
                        title="Avançar"
                        onPress={() => {
                            // props.navigation.push()
                            props.navigation.navigate(
                                props.avancar,
                                props.avancarParam || null,
                            );
                        }}
                    />
                ) : (
                    false
                )}
            </View>
            <View style={{flexGrow: 1}}>{props.children}</View>
        </View>
    );
};
