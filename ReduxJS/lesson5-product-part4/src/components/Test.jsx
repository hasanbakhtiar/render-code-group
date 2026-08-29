import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

export default function Test() {

    useEffect(() => {
        async function getData() {
            const { data } = await supabase.from('products').select()
            console.log(data);
        }

        getData()
    }, [])

    return (
        <></>
    )
}