import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useEffect} from "react";


type SuperDoubleRangePropsType = {
    onChangeRange: (value: number | number[]) => void
    value: Array<number>
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
    }
) => {
    // сделать самому, можно подключать библиотеки


    const [doubleValue, setDoubleValue] = React.useState<number[]>([]);

    useEffect(() => {
        setDoubleValue(value)
    }, [value])


    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange(newValue)
        setDoubleValue(newValue as number[]);
    };

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                value={doubleValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </Box>
    )
}


export default SuperDoubleRange
