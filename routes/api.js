import express from "express";
const router = express.Router()
import * as BlogListController from "../src/app/controllers/BlogListController.js"
import * as SkillListController from "../src/app/controllers/SkillListController.js"
import * as UserController from "../src/app/controllers/UserController.js"
import * as ContactMessageController from "../src/app/controllers/ContactMessageController.js"
import * as EducationListController from "../src/app/controllers/EducationListController.js"
import * as CourseListController from "../src/app/controllers/CourseListController.js"
import * as TestimonialsController from "../src/app/controllers/TestimonialsController.js"
import * as FAQController from "../src/app/controllers/FAQListControler.js"
import {AdminMiddleware, AuthMiddleware} from "../src/app/middlewares/AuthMiddleware.js";
import {fileUploadController} from "../src/app/controllers/FileUploadController.js";
import upload from "../src/app/utilities/FileUploadMiddleware.js";
import {ProjectsList, UploadProject} from "../src/app/controllers/ProjectListController.js";


// Blog API's
router.get('/BlogList', BlogListController.BlogList)
router.get('/BlogListByUser',AuthMiddleware, BlogListController.BlogListByUser)
router.post('/CreateBlog', AuthMiddleware, BlogListController.CreateBlog)
router.delete('/DeleteBlog/:BlogID', AuthMiddleware, AdminMiddleware, BlogListController.DeleteBlog)

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

// Skill API's
router.get('/SkillList', SkillListController.SkillList)
router.post('/UploadSkill',AuthMiddleware, AdminMiddleware, SkillListController.UploadSkill)


// Contact Message API's
router.post('/SendMessage',AuthMiddleware, ContactMessageController.SendMessage)
router.get('/MassegeListByUser',AuthMiddleware, ContactMessageController.MassegeListByUser)
router.get('/ContactMessageList',AuthMiddleware, AdminMiddleware, ContactMessageController.ContactMessageList)


// Project API's
router.post('/UploadProject',AuthMiddleware, AdminMiddleware, UploadProject)
router.get('/ProjectsList', ProjectsList)


// Testimonials API's
router.get('/TestimonialsList', TestimonialsController.TestimonialsList)
router.get('/TestimonialsListByUser',AuthMiddleware, TestimonialsController.TestimonialsListByUser)
router.post('/CreateTestimonial',AuthMiddleware, TestimonialsController.CreateTestimonial)
router.post('/UpdateTestimonial/:TestimonialID',AuthMiddleware, TestimonialsController.UpdateTestimonial)
router.delete('/DeleteTestimonial/:TestimonialID', AuthMiddleware, TestimonialsController.DeleteTestimonial)


// User's Route
router.post('/UserRegister', UserController.UserRegister)
router.post('/UserLogin', UserController.UserLogin)
router.get('/VerifyOTP/:email/:otp', UserController.VerifyOTP)
router.get('/UserLogout',AuthMiddleware, UserController.UserLogout)
router.get('/UserList', AuthMiddleware, AdminMiddleware, UserController.UserList)
router.get('/UserListByID', AuthMiddleware, UserController.UserListByID)
router.patch('/UpdateUserProfile', AuthMiddleware, UserController.UpdateUserProfile)
router.delete('/DeleteUser/:userID', AuthMiddleware, AdminMiddleware, UserController.DeleteUser)


// FAQ Route
router.get('/FAQList', FAQController.FAQList)
router.post('/CreateFAQ', AuthMiddleware, AdminMiddleware, FAQController.CreateFAQ)
router.post('/UpdateFAQ/:FAQId', AuthMiddleware, AdminMiddleware, FAQController.UpdateFAQ)
router.delete('/DeleteFAQ/:FAQId', AuthMiddleware, AdminMiddleware, FAQController.DeleteFAQ)


// File Upload API's
router.post('/fileUpload', upload.single("file"), fileUploadController)



export default router