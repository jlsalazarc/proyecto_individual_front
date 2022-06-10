import { Header } from '../../components/user/header';
import { Body } from '../../components/user/body';
import './index.css'

export function Index(){
    return (
        <div className = "index" >
            <header className="header">
                <Header/>
            </header>
            <div className = "body">
                <Body/>
            </div>
        </div>

    );
}