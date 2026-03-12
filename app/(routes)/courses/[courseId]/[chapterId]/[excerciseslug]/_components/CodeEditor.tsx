import React from 'react'
import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview,
    useSandpack,
} from "@codesandbox/sandpack-react";
import { courseExcercise } from '../page';
import { Button } from '@/components/ui/button';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import axios from 'axios';

type props = {
    excerciseData: courseExcercise | undefined,
    loading: boolean
}

const onCompleteExcercise = () =>{
    const result =  axios.get
}

const CodeEditorChildren = ({onCompleteExcercise}:any) => {
    const { sandpack } = useSandpack();
    return (
        <div className='flex gap-5 right-5 absolute bottom-40 font-game'>
            <Button onClick={() => sandpack.runSandpack()} variant={'pixel'} size={'lg'} className='text-xl'>Run Code</Button>
            <Button onClick={()=>onCompleteExcercise()} variant={'greenPixel'} size={'lg'} className='text-xl'>Mark Completed</Button>
        </div>
    )
};

function CodeEditor({ excerciseData, loading }: props) {
    return (
        <div className='h-full '>


            <SandpackProvider
    files={excerciseData?.excerciseData?.excerciseContent?.starterCode}

                theme="dark"
                template="static"
                style={{ height: "100vh" }}

                options={{
                    autorun: false,
                    autoReload: false
                }}
            >
                <SandpackLayout style={{ height: "100%" }}>

                    {/* ⭐ Wrap your two panels here */}
                    <SplitterLayout percentage secondaryInitialSize={50}>

                        {/* Left Panel */}
                        <div className="relative h-full min-w-0">
                            <SandpackCodeEditor showTabs style={{ height: "100%", width: "100%" }} />
                            <CodeEditorChildren onCompleteExcercise={onCompleteExcercise} />
                        </div>

                        {/* Right Panel FIXED */}
                        <div className="h-full w-full overflow-hidden min-w-0">
                            <SandpackPreview showNavigator showOpenNewtab showOpenInCodeSandbox={false} style={{ height: "100%", width: "100%" }} />
                        </div>

                    </SplitterLayout>


                </SandpackLayout>

            </SandpackProvider>

           
        </div>
    )
}

export default CodeEditor;
