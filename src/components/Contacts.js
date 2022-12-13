import React from "react";
import { EnvelopeIcon } from '@heroicons/react/24/outline'



function Contacts() {
    return (
        <div className="container-contacts">
        <div className="container-square-border">         
                <h6 className="contacts-title font-roboto-bold">
                    Get in touch!
                </h6>
                <div className="wrapper-button"> 
                    <EnvelopeIcon className="contacts-button"/>
            </div>
         </div>   
    </div>
    );
}

export default Contacts;
