import {useState, useEffect} from 'react'
import Gallery from './Gallery'

function TimelineContainer({tc}) {
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [showDescriptions, setShowDescriptions] = useState(false);

    const handlePrev = ()=> {
        setGalleryIndex((prev)=> 
            prev > 0? prev - 1 : prev
        );
    };

    const handleNext = () => {
        setGalleryIndex((prev)=> 
            prev < tc.gallery.length - 1? prev + 1: prev
        );
    };

    return (
        <>  
            <h3 className="mb-[2rem] ml-[2rem] font-bold italic text-start w-[100%] text-[1rem] md:text-[1.2rem]">{tc.time}</h3>
            <div className={`flex flex-col`} style={{ color: tc.colorTheme }}>
                
                <div
                    className="bg-[#6562C0] flex flex-col p-[2rem] md:p-[3rem] bg-cover bg-center rounded-[1rem]"
                    style={{ backgroundImage: `url(/icons/${tc.backgroundImage})`,
                            boxShadow: "rgba(111, 111, 111, 0.35) 0px 10px 30px" }}
                >
                    <div className="grid grid-cols-1 grid-rows-[1fr_1fr_1fr] md:grid-cols-[3fr_1fr] md:grid-rows-[1fr_50px]">
                        <h3 className="m-0 p-0 mt-2 md:mt-0 font-bold md:row-start-1 md:col-start-1 text-[1.5rem] md:text-[2rem] lg:text-[3vw]">{tc.company}</h3>
                        <p className="italic text-[1.2rem] md:text-[1.5rem] lg:text-[2vw] font-bold md:row-start-2 md:col-start-1">{tc.role}</p>
                        
                        {tc.companyIcon != "" && (
                            <a href={tc.link} target="_blank">
                                <img src={`/companies/${tc.companyIcon}`} alt="Company Icon" className="max-h-24 row-start-1 justify-self-start md:justify-self-end rounded md:row-span-2 md:col-start-2" />
                            </a>)}
                    </div>
                    <button
                        className="mb-2 text-sm text-[#FF9204] underline self-start cursor-pointer"
                        onClick={() => setShowDescriptions((prev) => !prev)}
                    >
                        {showDescriptions ? "Hide Details" : "Show Details"}
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            showDescriptions ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                        } flex flex-col gap-3 mb-[1rem]`}
                    >
                        {
                            tc.descriptions.map((d)=> (
                                <div className="flex items-center gap-6" key={d}>
                                    <img className="w-7 h-7 md:w-10 md:h-10" 
                                        src={`/icons/${tc.descriptionIcon}`} 
                                        alt="description-icon" 
                                        />
                                    <p style ={{textShadow: "2px 4px 3px rgba(0,0,0,0.3)"}}>{d}</p>
                                </div>
                            ))
                        }
                    </div>
                    
                    <div className="flex items-center flex-wrap gap-[5%]" >
                        {tc.gallery.length > 0 && (
                            <div className="w-[100%] md:w-[60%] flex items-center">
                                {galleryIndex > 0 && (<img className="opacity-[0.5] w-8 h-8 cursor-pointer hover:opacity-100" 
                                src="/icons/arrow.svg" 
                                alt="left arrow" 
                                onClick = {e=> {e.preventDefault(); handlePrev();}}/>)}
                                <Gallery obj={tc.gallery[galleryIndex]} />
                                {galleryIndex < tc.gallery.length - 1 && (<img className="cursor-pointer opacity-[0.5] w-8 h-8 rotate-180 hover:opacity-100" 
                                    src="/icons/arrow.svg" 
                                    alt="right arrow" 
                                    onClick={e => {e.preventDefault(); handleNext();}} />)}
                            </div>
                        )}
                        <div className="flex flex-wrap justify-center items-center gap-[1rem] w-[100%] md:w-[35%] mt-[2rem] md:mt-0">
                            {tc.techstack.map((tech)=> (
                                <img className="h-12 w-auto"
                                    src={`/techstack-icons/${tech}`} 
                                    alt="techstack icon" key={tech} 
                                    />
                            ))}
                        </div>
                    </div>
                
                </div>
                <div className="mb-[2rem] w-[13%] relative h-[5rem] border-r-[10px] border-r-[#28026e]">
                    <div className="w-7 h-7 absolute right-[-19.5px] bottom-[-18px] rounded-[50%] bg-[#FF9204]"
                        style ={{boxShadow: "rgba(241, 100, 0, 1) 0px 5px 15px;"}}></div>
                </div>
            </div>
        </>
    )
}
export default TimelineContainer