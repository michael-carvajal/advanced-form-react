import logo from '../_assets/logo.png'
import { CustomPageNameHook, PageContext } from './Context/PageContext'
const Header = () => {
    const { pageName } = CustomPageNameHook(PageContext);


    return (
        <div className='header'>
            <img src={logo} id="logo"/>
            <div>
                <h1>Survey Tool</h1>
                <p className='pageName'>{pageName}</p>
            </div>
        </div >
    )
}

export default Header
