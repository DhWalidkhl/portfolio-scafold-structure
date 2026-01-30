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
				<h1 className="font-bold mt-20 mb-5 lg:text-4xl text-2xl">Terms and Conditions</h1>
                <hr className="border-t border-gray-400" />

                {
                    TnTList.map((TnT) => (
                        <div key={TnT._id} className="py-8">
                            <h1 className="lg:text-2xl text-xl font-semibold mb-2">{TnT['title']}</h1>
                            <p dangerouslySetInnerHTML={{__html: TnT.des}}></p>
                        </div>
                    ))
                }
			</div>

		</Layout>
	);
};

export default TermsAndConditionPage;