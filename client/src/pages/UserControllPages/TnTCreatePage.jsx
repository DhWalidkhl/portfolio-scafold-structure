import React, {useMemo, useRef, useState} from 'react';
import userStore from "../../store/userStore.js";
import swal from "sweetalert";
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import JoditEditor from "jodit-react";
import Layout from "../../layout/Layout.jsx";
import Login from "../../components/Login.jsx";
import TnTStore from "../../store/TnTStore.js";

const TnTCreatePage = () => {
    const {	isLogin, FileUploading,	LoginFormData, LoginFormOnChange} = userStore();
    const { PostTnTRequest, CreatingTnT } = TnTStore();
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const config = useMemo(() => ({
            placeholder: 'Start typing your Terms & Condition...',
            height: 400,
            enter: 'BR',
            useTabForNext: true,
            cleanHTML: {
                removeEmptyElements: false,
                fillEmptyParagraph: false
            },
            removeEmptyBlocks: false,
            defaultLineHeight: '',
        }),
        []
    );
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!content) {
            swal('Validation Error', 'Please enter TnT content.', 'warning');
            return;
        }

        setSubmitting(true);

        try {
            const reqBody = {
                title: LoginFormData.title,
                des: content
            };

            const success = await PostTnTRequest(reqBody);

            if (success) {
                swal('Good job!', 'Your TnT Created Successfully', 'success');
                // Reset form state
                LoginFormOnChange('title', '');
                setContent('');
            } else {
                swal('Oops!', 'Failed to create TnT. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Create TnT', error);
            swal('Error', 'Something went wrong! Please try again.', 'error');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            {
                isLogin() ? (<AdminDashboardLayout>
                    <section aria-labelledby="page-title" className="mx-auto p-4">
                        <h1 id="page-title" className="text-center text-3xl font-semibold underline mb-8">
                            Write a new Terms & Condition Now
                        </h1>

                        <form onSubmit={handleSubmit} noValidate>
                            <fieldset className="mb-6">
                                <legend className="text-lg font-semibold mb-2">Terms & Conditon Title</legend>
                                <label htmlFor="blog-title" className="sr-only">Terms & Conditon Title</label>
                                <input
                                    id="TnT-title"
                                    name="title"
                                    type="text"
                                    value={LoginFormData.title || ''}
                                    onChange={(e) => LoginFormOnChange('title', e.target.value)}
                                    className="input w-full"
                                    placeholder="Type here"
                                    required
                                    disabled={submitting || FileUploading || CreatingTnT}
                                />
                            </fieldset>
                            <div>
                                <legend className="text-lg font-semibold mb-2">Terms & Conditon Body</legend>
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    config={config}
                                    onBlur={newContent => setContent(newContent)}
                                    onChange={newContent => setContent(newContent)}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting || FileUploading || CreatingTnT}
                                aria-busy={submitting || FileUploading || CreatingTnT}
                                aria-disabled={submitting || FileUploading || CreatingTnT}
                                className="btn btn-soft btn-info mt-5 w-full"
                            >
                                {(submitting || FileUploading || CreatingTnT) ? 'Loading...' : 'Submit'}
                            </button>
                        </form>
                    </section>
                </AdminDashboardLayout>) : (
                    <Layout>
                        <div className="flex flex-col gap-10 items-center justify-center h-screen">
                            <h1 className="text-4xl font-bold">Please Login to Access the Page</h1>
                            <Login></Login>
                        </div>
                    </Layout>
                )
            }
        </>
    );
}

export default TnTCreatePage;