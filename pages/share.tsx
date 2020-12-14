import * as React from 'react';
import { Header } from '../components/Header/header';
import ShareComponent from '../components/Share/share';

export interface ShareProps {
    
}
 
const Share: React.SFC<ShareProps> = () => {
    return ( 
        <main>
            <Header status={'header-sticky'} />
            <ShareComponent />
        </main>
     );
}
 
export default Share;