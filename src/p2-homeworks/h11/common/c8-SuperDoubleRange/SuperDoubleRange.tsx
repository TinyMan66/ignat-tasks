import React from 'react'
import {Box, Slider} from '@mui/material';
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    function valuetext(value: number) {
        return `${value}`;
    }

    const handleChange = (event: Event, newValue: number | number[]) => {

        onChangeRange && onChangeRange(newValue as [number, number]);
    };

    return (
        <Box sx={{ width: 150, paddingLeft: 5}}>
            <Slider
                className={s.doubleSlider}
                getAriaLabel={() => 'SuperDoubleRange'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>

    )
}

export default SuperDoubleRange
