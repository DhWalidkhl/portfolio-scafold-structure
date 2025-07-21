import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import AdminDashboardLayout from "../layout/AdminDashboardLayout.jsx";
import userStore from "../store/userStore.js";

const WriteBlogPage = () => {
	let {FileUploading,LoginFormData, LoginFormOnChange, FileUploadOnChange, ImageName,UserSignUpRequest} = userStore()
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = useMemo(
		() => ({
			readonly: false,
			placeholder: 'Start typing your blog...',
			height: 600, // optional fixed height
			buttons: [
				'source', '|',
				'bold', 'italic', 'underline', 'strikethrough', '|',
				'ul', 'ol', '|',
				'outdent', 'indent', '|',
				'font', 'fontsize', 'brush', 'paragraph', '|',
				'image', 'video', 'table', 'link', '|',
				'align', 'undo', 'redo', '|',
				'hr', 'eraser', 'copyformat', '|',
				'fullsize' // this is the fullscreen button
			],
			toolbarAdaptive: false,
			showCharsCounter: true,
			showWordsCounter: true,
			showXPathInStatusbar: false,
			uploader: { insertImageAsBase64URI: true }
		}),
		[]
	);


	return (
		<AdminDashboardLayout>
			<div>
				<h1 className="text-center lg:text-3xl font-semibold underline">Write a Blog Now</h1>
				<form>
					<legend className="fieldset-legend">Blog Title</legend>
					<input type="text" className="input w-full mb-5" placeholder="Type here" required/>
					<legend className="fieldset-legend">Blog Body</legend>
					<JoditEditor
						ref={editor}
						value={content}
						config={config}
						tabIndex={1}
						onBlur={newContent => setContent(newContent)}
						required

					/>
					<div className="col-span-full sm:col-span-3">
						<legend className="fieldset-legend text-sm">Thumbnail Photo</legend>
						<input onChange={FileUploadOnChange} type="file" className="file-input w-full" required/>
						<label className="label text-sm">Max size 2MB</label>
					</div>
					<button disabled={FileUploading} className="btn btn-soft btn-info mt-5 w-full">{ FileUploading ? "Loading" : "Submit"}</button>
				</form>
			</div>
		</AdminDashboardLayout>
	);
};

export default WriteBlogPage;