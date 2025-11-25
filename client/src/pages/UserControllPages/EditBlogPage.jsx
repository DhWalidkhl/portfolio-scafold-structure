import React, {useEffect, useMemo, useRef, useState} from 'react';
import AdminDashboardLayout from "../../layout/AdminDashboardLayout.jsx";
import Layout from "../../layout/Layout.jsx";
import Login from "../../components/Login.jsx";
import blogStore from "../../store/blogStore.js";
import { useParams} from "react-router-dom";
import userStore from "../../store/userStore.js";
import JoditEditor from "jodit-react";

const EditBlogPage = () => {
    const {	isLogin, FileUploading,	LoginFormData, LoginFormOnChange, FileUploadOnChange, ImageName	} = userStore();
    const { SingleBlog, BlogDetailsRequest } = blogStore();
    const { BlogID } = useParams();
    const editor = useRef(null);
    const [content, setContent] = useState('');

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
            <label className="block mb-2 font-semibold">
                Edit Blog Title
                <input
                    type="text"
                    value={SingleBlog?.title}
                    onChange={(e) => LoginFormOnChange('title', e.target.value)}
                    className="input input-bordered w-full mt-1"
                />
            </label>

            <img
                src={SingleBlog?.img}
                alt={SingleBlog?.title}
                className="w-64 rounded-md shadow"
            />

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


            <button className="btn btn-outline btn-warning">Update</button>
        </AdminDashboardLayout>
    );
};

export default EditBlogPage;
