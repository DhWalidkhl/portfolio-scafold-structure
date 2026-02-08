import express from "express";
const router = express.Router()
import * as BlogListController from "../src/app/controllers/BlogListController.js"
import * as SkillListController from "../src/app/controllers/SkillListController.js"
import * as UserController from "../src/app/controllers/UserController.js"
import * as ContactMessageController from "../src/app/controllers/ContactMessageController.js"
import * as EducationListController from "../src/app/controllers/EducationListController.js"
import * as CourseListController from "../src/app/controllers/CourseListController.js"
import * as TnTController from "../src/app/controllers/TnTController.js"
import * as TestimonialsController from "../src/app/controllers/TestimonialsController.js"
import * as FAQController from "../src/app/controllers/FAQListControler.js"
import {AdminMiddleware, AuthMiddleware} from "../src/app/middlewares/AuthMiddleware.js";
import {fileUploadController} from "../src/app/controllers/FileUploadController.js";
import * as ProjectListController from "../src/app/controllers/ProjectListController.js";
import {FileUploadHandlerMiddlewar} from "../src/app/middlewares/FileUploadHandlerMiddlewar.js";


// Blog API's
router.get('/ApprovedBlogList', BlogListController.ApprovedBlogList)
router.get('/SeachByKeyword', BlogListController.SeachByKeyword)
router.get('/PendingBlogList', AuthMiddleware, AdminMiddleware, BlogListController.PendingBlogList)
router.get('/ApproveBlogListByUser',AuthMiddleware, BlogListController.ApproveBlogListByUser)
router.get('/PendingBlogListByUser',AuthMiddleware, BlogListController.PendingBlogListByUser)
router.post('/CreateBlog', AuthMiddleware, BlogListController.CreateBlog)
router.post('/ApproveBlog/:BlogID', AuthMiddleware, AdminMiddleware, BlogListController.ApproveBlog)
router.post('/AddLike/:BlogID', AuthMiddleware, BlogListController.AddLike)
router.post('/CreateComment/:BlogID', AuthMiddleware, BlogListController.CreateComment)
router.get('/GetCommentsByBlog/:BlogID', BlogListController.GetCommentsByBlog)
router.get('/CountLike/:BlogID', BlogListController.CountLike)
router.delete('/DeleteBlogByUser/:BlogID', AuthMiddleware, BlogListController.DeleteBlogByUser)
router.delete('/DeleteBlog/:BlogID', AuthMiddleware, AdminMiddleware, BlogListController.DeleteBlog)
router.get('/BlogDetails/:BlogID', BlogListController.BlogDetails)

// Education API's
router.get('/EducationList', EducationListController.EducationList)
router.post('/CreateEducation', AuthMiddleware, AdminMiddleware, EducationListController.CreateEducation)
router.post('/UpdateEducation/:EduID', AuthMiddleware, AdminMiddleware, EducationListController.UpdateEducation)
router.delete('/DeleteEducation/:EduID', AuthMiddleware, AdminMiddleware, EducationListController.DeleteEducation)


// Course API's
router.get('/CourseList', CourseListController.CourseList)
router.post('/CreateCourse', AuthMiddleware, AdminMiddleware, CourseListController.CreateCourse)
router.post('/UpdateCourse/:CourseID', AuthMiddleware, AdminMiddleware, CourseListController.UpdateCourse)
router.delete('/DeleteCourse/:CourseID', AuthMiddleware, AdminMiddleware, CourseListController.DeleteCourse)


// Terms & Condition API's
router.get('/TnTList', TnTController.TnTList)
router.post('/CreateTnT', AuthMiddleware, AdminMiddleware, TnTController.CreateTnT)
router.post('/UpdateTnT/:TnTID', AuthMiddleware, AdminMiddleware, TnTController.UpdateTnT)
router.delete('/DeleteTnT/:TnTID', AuthMiddleware, AdminMiddleware, TnTController.DeleteTnT)

// Skill API's
router.get('/SkillList', SkillListController.SkillList)
router.post('/UploadSkill',AuthMiddleware, AdminMiddleware, SkillListController.UploadSkill)


// Contact Message API's
router.post('/SendMessage',AuthMiddleware, ContactMessageController.SendMessage)
router.get('/MassegeListByUser',AuthMiddleware, ContactMessageController.MassegeListByUser)
router.get('/ContactMessageList',AuthMiddleware, AdminMiddleware, ContactMessageController.ContactMessageList)
router.post('/replymessage/:email',AuthMiddleware, AdminMiddleware, ContactMessageController.ReplyMessage)
router.get('/message-details/:msgID',AuthMiddleware, ContactMessageController.MassegeDetails)


// Project API's
router.post('/UploadProject',AuthMiddleware, AdminMiddleware, ProjectListController.UploadProject)
router.get('/ProjectsList', ProjectListController.ProjectsList)
router.get('/ProjectDetails/:ProjectID', ProjectListController.ProjectDetails)


// Testimonials API's
router.get('/TestimonialsList', TestimonialsController.TestimonialsList)
router.get('/TestimonialsListByUser',AuthMiddleware, TestimonialsController.TestimonialsListByUser)
router.post('/CreateTestimonial',AuthMiddleware, TestimonialsController.CreateTestimonial)
router.post('/UpdateTestimonial/:TestimonialID',AuthMiddleware, TestimonialsController.UpdateTestimonial)
router.delete('/DeleteTestimonial/:TestimonialID', AuthMiddleware, TestimonialsController.DeleteTestimonial)


// User's Route
router.post('/UserRegister', UserController.UserRegister)
router.post('/UserLogin', UserController.UserLogin)
router.post('/ForgetPassword', UserController.ForgetPassword)
router.post('/ResetPassword', UserController.ResetPassword)
router.get('/VerifyOTP/:email/:otp', UserController.VerifyOTP)
router.get('/UserLogout',AuthMiddleware, UserController.UserLogout)
router.get('/UserList', AuthMiddleware, AdminMiddleware, UserController.UserList)
router.get('/UserListByID', AuthMiddleware, UserController.UserListByID)
router.patch('/UpdateUserProfile', AuthMiddleware, UserController.UpdateUserProfile)
router.delete('/DeleteUser/:userID', AuthMiddleware, AdminMiddleware, UserController.DeleteUser)


// FAQ Route
router.get('/FAQList', FAQController.FAQList)
router.get('/FAQDetails/:FAQId',AuthMiddleware, AdminMiddleware, FAQController.FaqDetails)
router.post('/CreateFAQ', AuthMiddleware, AdminMiddleware, FAQController.CreateFAQ)
router.post('/UpdateFAQ/:FAQId', AuthMiddleware, AdminMiddleware, FAQController.UpdateFAQ)
router.delete('/DeleteFAQ/:FAQId', AuthMiddleware, AdminMiddleware, FAQController.DeleteFAQ)


// File Upload API's
router.post('/fileUpload', FileUploadHandlerMiddlewar, fileUploadController)



export default router