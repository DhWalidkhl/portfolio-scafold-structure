import React from 'react';
import Login from "./Login.jsx";

const ContactInfo = () => {
    return (
        <div>
            <h1 className="text-sky-700 text-center font-semibold text-3xl lg:text-5xl mb-7 underline">Get in Touch</h1>
            <div className="container mx-auto lg:text-left text-center">
                <div className="lg:grid lg:grid-cols-2 gap-10 items-center px-20 justify-center">
                    <div className="space-y-4">
                        <h1 className="lg:text-5xl text-3xl font-bold">Let's Elevate your business together.</h1>
                        <p>ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will
                            acted ished fact that a reader will be distrol acted</p>
                        <Login/>
                    </div>
                    <div className="space-y-2 lg:mt-0 mt-5">
                        <p className="lg:text-lg">
                            If you want to contact via this web application then please login.
                            Otherwise you can contact via information given below.
                        </p>
                        <p className="text-sm lg:text-xl font-semibold text-sky-700">
                            Mobile+WhatsApp: <span className="font-bold text-sky-700">+8801700950650</span>
                        </p>
                        <p className="text-sm lg:text-xl font-semibold text-sky-700">
                            Email: <span className="font-bold  text-sky-700">sm.walid69@yahoo.com</span>
                        </p>
                        <div>
                            <p>Address : 169, Mondirer More, Rayermahal, Sonadanga, Khulna-9000</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;