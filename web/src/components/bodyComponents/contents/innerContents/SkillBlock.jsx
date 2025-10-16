import {useState, useEffect} from "react";

function SkillBlock({skillObj}) {

    return (
        <>
            <div className="flex flex-wrap gap-3 p-[1rem] items-center rounded-[1rem]"
                style ={{backgroundColor: skillObj.bgColor,
                        boxShadow: "rgba(94, 94, 94, 1) 2px 3px 5px"
                }} 
            >
                <p className="text-lg">{`${skillObj.category}: `}</p>
                {
                    skillObj.techStack.map((skill) => (
                        <img 
                            src={`/techstack-icons/${skill}`} 
                            alt="skill"
                            className="h-12 w-auto"
                        />
                    ))
                }
            </div>
        </>
    );
}

export default SkillBlock;