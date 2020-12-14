import * as React from 'react';
import ContactComponent from '../components/Contact/contact';
import { Header } from '../components/Header/header';

export interface ContactProps {
    any?
}
 
const Contact: React.SFC<ContactProps> = () => {
    return ( 
        <main>
            <Header status={'header-sticky'} />
            <ContactComponent />
        </main>
    );
}
 
export default Contact;