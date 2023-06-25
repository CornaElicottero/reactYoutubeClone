import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {SearchBar} from "../components";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/SearchBar">
                <SearchBar/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
