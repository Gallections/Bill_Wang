import {useState} from 'react';

function TextareaBox({placeholder, width, minHeight, name,  value, onChange}) {

    const [text, setText] = useState("");

    return (
        <>
            <div className = "mt-[1.2rem] mr-[1rem] rounded-[0.3rem] border-[0.1rem] ml-[1rem] pt-[0.3rem] pr-[0.3rem] pb-[0.3rem] pl-[0.3rem]"
                style = {{
                    width,
                    minHeight
                }}
                >
                <textarea
                    name = {name}
                    value = {value}
                    onChange = {onChange}
                    className = "w-full h-[90%] p-[0.5rem] rounded-[0.3rem]"
                    placeholder = {placeholder}
                    required
                />
                <div className = "mt-[0.2rem] w-full bg-white h-[0.1rem]"></div>
            </div>
        </>
    );
}

export default TextareaBox;