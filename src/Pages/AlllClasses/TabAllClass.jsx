import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllCard from './AllCard';


const TabAllClass = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('/class.json')
            .then((res) => res.json())
            .then((data) => setClasses(data));
    }, []);


    const English = classes.filter(classs => classs.language === 'English')
    const Spanish = classes.filter(classs => classs.language === 'Spanish')
    const French = classes.filter(classs => classs.language === 'French')
    const German = classes.filter(classs => classs.language === 'German')
    const Italian = classes.filter(classs => classs.language === 'Italian')
    const Chinese = classes.filter(classs => classs.language === 'Chinese')
    const Japanese = classes.filter(classs => classs.language === 'Japanese')
    const Russian = classes.filter(classs => classs.language === 'Russian')
    const Arabic = classes.filter(classs => classs.language === 'Arabic')
    const Korean = classes.filter(classs => classs.language === 'Korean')
    return (
        <div className='text-center'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab >English</Tab>
                    <Tab>Spanish</Tab>
                    <Tab>French</Tab>
                    <Tab>German</Tab>
                    <Tab>Italian</Tab>
                    <Tab>Chinese</Tab>
                    <Tab>Japanese</Tab>
                    <Tab>Russian</Tab>
                    <Tab>Arabic</Tab>
                    <Tab>Korean</Tab>
                </TabList>
                <TabPanel>
                    {
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
                            {English.map((classs) => (
                                <AllCard key={classs.id} classs={classs} />
                            ))}
                        </div>
                    }
                </TabPanel>

                <TabPanel>
                    {
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
                            {Spanish.map((classs) => (
                                <AllCard key={classs.id} classs={classs} />
                            ))}
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
                            {French.map((classs) => (
                                <AllCard key={classs.id} classs={classs} />
                            ))}
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
                            {German.map((classs) => (
                                <AllCard key={classs.id} classs={classs} />
                            ))}
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
                            {Italian.map((classs) => (
                                <AllCard key={classs.id} classs={classs} />
                            ))}
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
                            {Chinese.map((classs) => (
                                <AllCard key={classs.id} classs={classs} />
                            ))}
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
                            {Japanese.map((classs) => (
                                <AllCard key={classs.id} classs={classs} />
                            ))}
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
                            {Russian.map((classs) => (
                                <AllCard key={classs.id} classs={classs} />
                            ))}
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
                            {Arabic.map((classs) => (
                                <AllCard key={classs.id} classs={classs} />
                            ))}
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
                            {Korean.map((classs) => (
                                <AllCard key={classs.id} classs={classs} />
                            ))}
                        </div>
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabAllClass;