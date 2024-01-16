import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StudySlider from './AllSliders/StudySlider';
import QuizSlider from './AllSliders/QuizSlider';
import { RxReload } from "react-icons/rx";
import { RiFullscreenFill } from "react-icons/ri";

const TabH = () => {

    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div className='text-center'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Study</Tab>
                    <Tab>Quiz</Tab>
                    <Tab>Test</Tab>
                    <Tab>Game</Tab>
                    <Tab>Others</Tab>
                </TabList>
                <TabPanel><StudySlider></StudySlider></TabPanel>
                <TabPanel><QuizSlider></QuizSlider></TabPanel>
                <TabPanel><StudySlider></StudySlider></TabPanel>
                <TabPanel><StudySlider></StudySlider></TabPanel>
                <TabPanel><StudySlider></StudySlider></TabPanel>
            </Tabs>

            <div className='flex justify-between gap-10 mt-7 px-5'>
                <div>
                <RxReload className='text-blue-700 text-4xl font-bold' />
                </div>
                <div className='flex justify-between w-1/3'>
                <a href="#slide4" className="btn btn-circle btn-lg bg-blue-700 text-white text-2xl">❮</a>
                <h1 className='text-3xl mt-3 font-bold'>01/10</h1>
                <a href="#slide2" className="btn btn-circle btn-lg bg-blue-700 text-white text-2xl">❯</a>
                </div>
                <div>
                <RiFullscreenFill className='text-blue-700 text-4xl font-bold' />
                </div>
            </div>
        </div>
    );
};

export default TabH;