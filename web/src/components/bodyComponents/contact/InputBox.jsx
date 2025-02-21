import {useState, useEffect} from 'react';

function InputBox({placeholder, width, height, name, value, onChange}) {

    return (
        <>
            <div className = "mt-[1.2rem] mr-[1rem] border-[0.1rem] rounded-[0.3rem] ml-[1rem] pt-[0.3rem] pr-[0.3rem] pb-[0.3rem] pl-[0.3rem]"
                style = {{
                    width,   // note that width and height are passed in as strings, so they work directly
                    height
                }}>
                <input
                    name = {name}
                    type= "text"
                    value = {value}
                    onChange = {onChange}
                    className = "w-[100%] h-[85%] p-[0.5rem] rounded-[0.2rem] outline-none placeholder-gray-400"
                    placeholder= {placeholder} // note placeholder requires {} because we passed in with {} in its parent component
                    required
                />
                <div className = "decoration-line mt-[0.2rem] w-full bg-blue-900 h-[0.1rem]">
                </div>
            </div>
        </>
    )
}

export default InputBox;