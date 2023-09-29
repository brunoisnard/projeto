
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { useState, useEffect } from 'react';



export function ComponenteTest({nome}){
    
    const [data,setData]=useState(0);

useEffect(()=>{

    alert('Concluido com sucesso')
   
},[data])
    
    
    return (

<View>
<Text>{nome} {data}</Text>
<Button onPress={()=>setData(data + 1)} title='Clique aqui'/>
<Button onPress={()=>setData(0)} title='delete'/>
</View>
);


    }



