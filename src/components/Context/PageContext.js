import { createContext, useContext, useState } from 'react';

export const PageContext = createContext();
export default function PageProvider(props) {
    const [pageName, setPageName] = useState('Home');

    return (
        <PageContext.Provider
            value={{
                pageName,
                setPageName
            }}
        >
            {props.children}
        </PageContext.Provider>
    )
}
console.log(PageContext);
export const CustomPageNameHook = () => useContext(PageContext)
