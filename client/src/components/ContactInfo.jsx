import React from 'react';
import Login from "./Login.jsx";
import LottieFiles from "./LottieFiles.jsx";

const ContactInfo = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-10 items-center px-36 justify-center">
                    <div className="space-y-4">
                        <h2 className="text-sky-500 font-semibold text-2xl">Get in Touch</h2>
                        <h1 className="text-5xl font-bold">Let's Elevate your business together.</h1>
                        <p>ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted ished fact that a reader will be distrol acted</p>
                        <Login/>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-4xl font-semibold mb-5">Welcome</h1>
                        <p>
                            If you want to contact via web application then please login to the web application. Otherwise you can contact via information below.
                        </p>
                        <p className="text-lg font-semibold text-sky-700">
                            Mobile+WhatsApp:<span className="font-bold text-xl text-sky-700">+88 01700 950650</span>
                        </p>
                        <p className="text-lg font-semibold text-sky-700">
                        Email: <span className="font-bold text-xl text-sky-700">sm.walid69@yahoo.com</span>
                        </p>
                        <div>
                            <h1>Address : 169, Mondirer More, Rayermahal, Sonadanga, Khulna-9000</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;