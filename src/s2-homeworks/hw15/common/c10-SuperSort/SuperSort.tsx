import React from 'react'
import downIconSvg from '../../../../assets/Polygon 5.svg'
import upIconSvg from '../../../../assets/Polygon 4.svg'
import iconSvg from '../../../../assets/Polygon.svg'

// добавить в проект иконки и импортировать
const downIcon = downIconSvg
const upIcon = upIconSvg
const noneIcon = iconSvg

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return sort === ''
        ? down
        : sort === down
            ? up
            : sort === up
                ? '' : down // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />


            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
