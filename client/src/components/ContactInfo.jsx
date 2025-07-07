import React from 'react';
import Login from "./Login.jsx";
import LottieFiles from "./LottieFiles.jsx";

const ContactInfo = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex items-center px-36 justify-center lg:flex-row-reverse">
                    <LottieFiles></LottieFiles>
                    <div className="leading-10">
                        <h1 className="text-5xl font-bold mb-5">Welcome</h1>
                        <p>
                            If you want to contact via web application then please login to the web application. Otherwise you can contact via information below.
                        </p>
                        <p>
                            Mobile+WhatsApp: +8801700950650
                        </p>
                        <p>
                            Email: sm.walid69@yahoo.com
                        </p>
                        <div className="flex">
                            <h1>Address :</h1>
                            <p>169, Mondirer More, Rayermahal, Sonadanga, Khulna-9000</p>
                        </div>
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;