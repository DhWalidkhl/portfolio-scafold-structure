import React, {useEffect, useMemo, useRef, useState} from 'react';
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import Layout from "../../layout/Layout.jsx";
import Login from "../../components/Login.jsx";
import blogStore from "../../store/blogStore.js";
import {useNavigate, useParams} from "react-router-dom";
import userStore from "../../store/userStore.js";
import JoditEditor from "jodit-react";
import swal from "sweetalert";

const EditBlogPage = () => {
    const {	isLogin, FileUploading,	LoginFormData, LoginFormOnChange, FileUploadOnChange, ImageName, imagePublicId	} = userStore();
    const { SingleBlog, BlogDetailsRequest, CreatingBlog, PostBlogRequest } = blogStore();
    const { BlogID } = useParams();
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (SingleBlog?.des) {
            setContent(SingleBlog.des);
        }
    }, [SingleBlog]);

    const config = useMemo(() => ({
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

    const handleUpdateBlog = async (e) =>{
        e.preventDefault();
        try {
            const BlogData = {
                ...LoginFormData,
                img: ImageName,
                imagePublicId: imagePublicId,
                des: content,
            };

            const success = await PostBlogRequest(BlogData);

            if (success) {
                swal('Good job!', 'Your Blog Updated Successfully', 'success');
                navigate('/dashboard/approveblog-list');
            } else {
                swal('Oops!', 'Failed to create blog. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Create Blog', error);
            swal('Error', 'Something went wrong! Please try again.', 'error');
        } finally {
            setSubmitting(false);
        }

    }

    useEffect(() => {
        if (!isLogin()) return;
        BlogDetailsRequest(BlogID);
    }, [BlogID]);

    if (!isLogin()) {
        return (
            <Layout>
                <div className="flex flex-col gap-10 items-center justify-center h-screen">
                    <h1 className="text-4xl font-bold">Please Login to Access the Page</h1>
                    <Login />
                </div>
            </Layout>
        );
    }

    return (
        <AdminDashboardLayout>
            <>
                <form onSubmit={handleUpdateBlog}>
                    <label className="block mb-5 font-semibold">

                        <input
                            type="text"
                            value={SingleBlog?.title}
                            className="input input-bordered w-full mt-1"
                            disabled
                        />
                    </label>
                    <div className="flex gap-8">
                        <img
                            src={SingleBlog?.img}
                            alt={SingleBlog?.title}
                            className="w-64 rounded-md shadow"
                        />

                        <fieldset className="mb-6">
                            <legend className="text-lg font-semibold mb-2">Thumbnail Photo</legend>
                            <label htmlFor="thumbnail-photo" className="sr-only">Thumbnail Photo</label>
                            <input
                                id="thumbnail-photo"
                                type="file"
                                accept="image/*"
                                onChange={FileUploadOnChange}
                                className="file-input w-full"
                                required
                                disabled={submitting || FileUploading || CreatingBlog}
                            />
                        </fieldset>
                    </div>
                    <div>
                        <legend className="text-lg font-semibold mb-2">Edit Blog Body</legend>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            onBlur={newContent => setContent(newContent)}
                            onChange={newContent => setContent(newContent)}
                        />
                    </div>
                    <div className="lg:flex gap-6 mb-6">
                        <fieldset className="w-full">
                            <legend className="text-lg font-semibold mb-2">Edit Github Link</legend>
                            <label htmlFor="github-link" className="sr-only">Edit Github Link</label>
                            <input
                                id="github-link"
                                name="githubLink"
                                type="url"
                                value={SingleBlog?.githubLink}
                                onChange={(e) => LoginFormOnChange('githubLink', e.target.value)}
                                className="input w-full"
                                placeholder="https://github.com/your-repo"
                                required
                            />
                        </fieldset>

                        <fieldset className="w-full">
                            <legend className="text-lg font-semibold mb-2">Edit Live Link</legend>
                            <label htmlFor="live-link" className="sr-only">Edit Live Link</label>
                            <input
                                id="live-link"
                                name="liveLink"
                                type="url"
                                value={SingleBlog?.liveLink}
                                onChange={(e) => LoginFormOnChange('liveLink', e.target.value)}
                                className="input w-full"
                                placeholder="https://your-live-site.com"
                                required
                            />
                        </fieldset>
                    </div>
                    <button className="btn btn-outline btn-warning">Update</button>
                </form>
            </>

        </AdminDashboardLayout>
    );
};

export default EditBlogPage;
