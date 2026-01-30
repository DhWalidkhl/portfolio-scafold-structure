import React, {useEffect} from 'react';
import Layout from "../layout/Layout.jsx";
import TnTStore from "../store/TnTStore.js";

const TermsAndConditionPage = () => {
    let {TnTList, TnTListRequest} = TnTStore()
    useEffect(() => {
        (async () => {
            await TnTListRequest()
        })()
    }, []);
	return (
		<Layout>
			<div className="container mx-auto px-20">
				<h1 className="text-center font-bold mt-20 lg:text-4xl text-2xl">Terms and Conditions</h1>

                {
                    TnTList.map((TnT, index) => (
                        <div key={TnT._id} className="py-8">
                            <h1 className="lg:text-2xl text-xl font-semibold mb-2">{index+1}) {TnT['title']}</h1>
                            <p>{TnT['des']}</p>
                        </div>
                    ))
                }
			</div>

		</Layout>
	);
};

export default TermsAndConditionPage;