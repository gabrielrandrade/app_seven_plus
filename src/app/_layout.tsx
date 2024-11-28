import { Stack } from "expo-router";

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name="newUser" options={{title: "Novo Usuario"}}></Stack.Screen>
        </Stack>
    )
}