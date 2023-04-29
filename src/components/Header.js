import { useContext } from 'react';
import logo from '../_assets/logo.png'
import { CustomPageNameHook, PageContext } from './Context/PageContext'
// console.log(pageName);
console.log(PageContext);
// const {pageName} = useContext(PageContext)
const Header = () => {
    const { pageName } = CustomPageNameHook(PageContext);


    return (
        <>
            <img src={logo} />
            <div>
                <h1>Survey Tool</h1>
                <p className='pageName'>{pageName}</p>
            </div>
        </>
    )
}

export default Header
