import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import AdminDashboardLayout from "../layout/AdminDashboardLayout.jsx";
import userStore from "../store/userStore.js";
import BlogStore from "../store/blogStore.js";
import swal from 'sweetalert';

const WriteBlogPage = () => {
	const {
		FileUploading,
		LoginFormData,
		LoginFormOnChange,
		FileUploadOnChange,
		ImageName,
	} = userStore();
	const { PostBlogRequest, CreatingBlog } = BlogStore();

	const editor = useRef(null);
	const [content, setContent] = useState('');
	const [submitting, setSubmitting] = useState(false);

	const config = useMemo(
		() => ({
			readonly: false,
			placeholder: 'Start typing your blog...',
			height: 600,
			buttons: [
				'source', '|',
				'bold', 'italic', 'underline', 'strikethrough', '|',
				'ul', 'ol', '|',
				'outdent', 'indent', '|',
				'font', 'fontsize', 'brush', 'paragraph', '|',
				'image', 'video', 'table', 'link', '|',
				'align', 'undo', 'redo', '|',
				'hr', 'eraser', 'copyformat', '|',
				'fullsize'
			],
			toolbarAdaptive: false,
			showCharsCounter: true,
			showWordsCounter: true,
			showXPathInStatusbar: false,
			uploader: { insertImageAsBase64URI: true },
		}),
		[]
	);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Basic validation for content
		if (!content || content.trim() === '') {
			swal('Validation Error', 'Please enter blog content.', 'warning');
			return;
		}

		setSubmitting(true);

		try {
			const BlogData = {
				...LoginFormData,
				img: ImageName,
				des: content,
			};

			const success = await PostBlogRequest(BlogData);

			if (success) {
				swal('Good job!', 'Your Blog Created Successfully', 'success');
				// Reset form state
				LoginFormOnChange('title', '');
				LoginFormOnChange('githubLink', '');
				LoginFormOnChange('liveLink', '');
				setContent('');
			} else {
				swal('Oops!', 'Failed to create blog. Please try again.', 'error');
			}
		} catch (error) {
			console.error('Create Blog', error);
			swal('Error', 'Something went wrong! Please try again.', 'error');
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<AdminDashboardLayout>
			<section aria-labelledby="page-title" className="mx-auto p-4">
				<h1 id="page-title" className="text-center text-3xl font-semibold underline mb-8">
					Write a Blog Now
				</h1>

				<form onSubmit={handleSubmit} noValidate>
					<fieldset className="mb-6">
						<legend className="text-lg font-semibold mb-2">Blog Title</legend>
						<label htmlFor="blog-title" className="sr-only">Blog Title</label>
						<input
							id="blog-title"
							name="title"
							type="text"
							value={LoginFormData.title || ''}
							onChange={(e) => LoginFormOnChange('title', e.target.value)}
							className="input w-full"
							placeholder="Type here"
							required
							disabled={submitting || FileUploading || CreatingBlog}
						/>
					</fieldset>

					<fieldset className="mb-6">
						<legend className="text-lg font-semibold mb-2">Blog Body</legend>
						<JoditEditor
							ref={editor}
							value={content}
							config={config}
							tabIndex={1}
							onBlur={(newContent) => setContent(newContent)}
							onChange={(newContent) => setContent(newContent)}
							required
							disabled={submitting || FileUploading || CreatingBlog}
						/>
					</fieldset>

					<div className="lg:flex gap-6 mb-6">
						<fieldset className="w-full">
							<legend className="text-lg font-semibold mb-2">Github Link</legend>
							<label htmlFor="github-link" className="sr-only">Github Link</label>
							<input
								id="github-link"
								name="githubLink"
								type="url"
								value={LoginFormData.githubLink || ''}
								onChange={(e) => LoginFormOnChange('githubLink', e.target.value)}
								className="input w-full"
								placeholder="https://github.com/your-repo"
								required
								disabled={submitting || FileUploading || CreatingBlog}
							/>
						</fieldset>

						<fieldset className="w-full">
							<legend className="text-lg font-semibold mb-2">Live Link</legend>
							<label htmlFor="live-link" className="sr-only">Live Link</label>
							<input
								id="live-link"
								name="liveLink"
								type="url"
								value={LoginFormData.liveLink || ''}
								onChange={(e) => LoginFormOnChange('liveLink', e.target.value)}
								className="input w-full"
								placeholder="https://your-live-site.com"
								required
								disabled={submitting || FileUploading || CreatingBlog}
							/>
						</fieldset>
					</div>

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

					<button
						type="submit"
						disabled={submitting || FileUploading || CreatingBlog}
						aria-busy={submitting || FileUploading || CreatingBlog}
						aria-disabled={submitting || FileUploading || CreatingBlog}
						className="btn btn-soft btn-info mt-5 w-full"
					>
						{(submitting || FileUploading || CreatingBlog) ? 'Loading...' : 'Submit'}
					</button>
				</form>
			</section>
		</AdminDashboardLayout>
	);
};

export default WriteBlogPage;
