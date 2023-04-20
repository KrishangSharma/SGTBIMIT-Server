const express = require("express");
const upload = require("../Config/multer.js");
const formidable = require('express-formidable');
const router = express.Router();
const { AdministrationAdd, AdministrationUpdate, AdministrationImageDisplay, AdministrationDelete, SingleAdministrationDisplay, AdministrationDisplay } = require("../Controllers/Administration.js");
const { PlacementIntershipsAdd, PlacementIntershipsSingle, PlacementIntershipsDisplay, PlacementIntershipsDelete, PlacementIntershipsUpdate, PlacementIntershipsImageDisplay } = require("../Controllers/PlacementInternship")
const { TestimonialAdd, singleTestimonialDisplay, TestimonialDisplay, TestimonialUpdate, TestimonialDelete } = require("../Controllers/Testimonials")
const { recruitersAdd, recruitersUpdate, recruiters_Single_Display,recruitersDisplay, recruitersDelete, RecruiterImageDisplay } = require('../Controllers/Recruiters');
const { FacultyAdd, FacultyDelete, FacultyImageDisplay, FacultyDisplay, FacultySingle, FacultyUpdate } = require("../Controllers/Facultys");
const { SocietyAdd, SocietyDelete, SocietyDisplay, SingleSocietyDisplay, SocietyImageDisplay, SocietyUpdate } = require("../Controllers/Society");
const { EResourcesAdd, EResourcesDisplay, EResourcesUpdate, EResourcesSingle, EResourcesDelete } = require("../Controllers/E-Resources");
const { adminRegister, adminLogin, EmailCheck, forgetpassword } = require("../Controllers/Admin.js");
const {QuestionPaperAdd,PaperFilterDisplay,QuestionPaperUpdate,QuestionPaperDisplay,QuestionPaperDisplayAll,QuestionPaperFileDisplay,QuestionPaperDelete,QuestionPaperYearDelete} = require("../Controllers/QuestionPaper.js");
const { CalendarAdd, CalendarDisplay, CalendarDelete, CalendarUpdate, CalendarSingle } = require("../Controllers/Calendar.js");
const { aluminiAddImage, aluminiAddCarouselImage, aluminiUpdateImage, aluminiDisplayImage, aluminiDelete, aluminiDisplayImages, aluminiUpdateImages, aluminiImagesDelete } = require("../Controllers/AluminiGallery.js");
const { NoticeAdd,NoticeDelete,NoticeDataDisplay,NoticeFileDisplay,NoticeUpdata} = require("../Controllers/Notice.js"); 
const {AdmissionRequestDelete,AdmissionRequestDisplay,AdmissionFormFill} = require("../Controllers/Admission.js");

const authchecker = require("../Middlewares/authentication.js");
const { eventAddImage, eventDisplayImage, eventDisplayImages, eventUpdateImage, eventUpdateImages, eventDelete, eventImagesDelete } = require("../Controllers/EventGallery.js");
const {EventAdd} = require('../Controllers/EventController.js');
const {EventHandlerAdd,EventHandlerDisplay} = require("../Controllers/EventHandlerController.js");
const {CollaborationsAdd,CollaborationsDelete,CollaborationsImageDisplay,CollaborationsDisplay} = require("../Controllers/CollaborationsController.js")
//just for checking
// router.get("/", justForchecking);


router.post("/Administration/Administration_Add",authchecker, formidable(), AdministrationAdd);
router.post("/Administration/Administration_Delete/:_id",authchecker, AdministrationDelete);
router.get("/Administration/Administration_Display", AdministrationDisplay);
router.get("/Administration/AdministrationImageDisplay/:_id", AdministrationImageDisplay);
router.get("/Administration/Single_Administration_Display/:_id", SingleAdministrationDisplay);
router.post("/Administration/Administration_Update/:_id", authchecker,formidable(), AdministrationUpdate); 3

//Placement and Intership Routes 
router.post("/Placement_Intership/PlacementInterships_Add", authchecker,formidable(), PlacementIntershipsAdd);
router.get("/Placement_Intership/PlacementInterships_Display", PlacementIntershipsDisplay);
router.get("/Placement_Intership/PlacementInterships_Single/:_id", PlacementIntershipsSingle);
router.post("/Placement_Intership/PlacementInterships_Delete/:_id", authchecker,authchecker,PlacementIntershipsDelete);
router.get("/Placement_Intership/PlacementInterships_Image_Display/:_id", PlacementIntershipsImageDisplay);
router.post("/Placement_Intership/PlacementInterships_Update/:_id", authchecker,formidable(), PlacementIntershipsUpdate);

//Faculty Routes 
router.post("/Faculty/Faculty_Add",authchecker, formidable(), FacultyAdd);
router.get("/Faculty/Faculty_Display", FacultyDisplay);
router.get("/Faculty/Faculty_Image_Display/:_id", FacultyImageDisplay);
router.get("/Faculty/FacultySingle/:_id", FacultySingle);
router.post("/Faculty/Faculty_Delete/:_id",authchecker, FacultyDelete);
router.post("/Faculty/Faculty_Update/:_id",authchecker, formidable(), FacultyUpdate);


//Testimonial Routes
router.post("/Testimonial/Testimonial_Add",authchecker, TestimonialAdd);
router.get("/Testimonial/Testimonial_Display", TestimonialDisplay);
router.post("/Testimonial/Testimonial_Update/:_id", authchecker,TestimonialUpdate);
router.post("/Testimonial/Testimonial_Delete", authchecker,TestimonialDelete);
router.post("/Testimonial/single_Testimonial_Display", singleTestimonialDisplay)

//Recruiters Routes 
router.post("/Recruiters/recruiters_Add", formidable(), recruitersAdd);
router.post("/Recruiters/recruiters_Update/:_id", authchecker,formidable(), recruitersUpdate);
router.get("/Recruiters/recruiters_Display", recruitersDisplay);
router.get("/Recruiters/recruiters_Single_Display/:_id", recruiters_Single_Display);
router.get("/Recruiters/Recruiter_Image_Display/:_id", RecruiterImageDisplay);
router.post("/Recruiters/recruiters_Delete/:_id",authchecker, recruitersDelete);


//Society Routes
router.post("/Society/Society_Add", authchecker,formidable(), SocietyAdd);
router.post("/Society/Society_Delete/:_id",authchecker, SocietyDelete);
router.get("/Society/Society_Display", SocietyDisplay);
router.get("/Society/Society_Image_Display/:_id", SocietyImageDisplay);
router.get("/Society/Single_Society_Display/:_id", SingleSocietyDisplay);
router.post("/Society/Society_Update/:_id", authchecker,formidable(), SocietyUpdate); 3


//E_Resources Routes
router.post('/E_Resources/EResources_Add', authchecker,EResourcesAdd);
router.get('/E_Resources/EResources_Display', EResourcesDisplay);
router.post('/E_Resources/EResources_Single_Display', EResourcesSingle);
router.post('/E_Resources/EResources_Update/:_id',authchecker, EResourcesUpdate);
router.post("/E_Resources/EResources_Delete/:id",authchecker, EResourcesDelete);

//Calendar Routes
router.post('/Calendar/CalendarAdd',authchecker, CalendarAdd);
router.get('/Calendar/CalendarDisplay', CalendarDisplay);
router.get('/Calendar/CalendarSingle/:id', CalendarSingle);
router.post('/Calendar/CalendarUpdate/:_id', authchecker,CalendarUpdate);
router.post("/Calendar/CalendarDelete/:id", authchecker,CalendarDelete);


//Admin Routes
router.post("/Admin/Register", adminRegister);
router.post("/Admin/Login", adminLogin);
router.post("/Admin/EmailCheck/:email", EmailCheck);
router.post("/Admin/forgetpassword/:email", forgetpassword);


//Protect router auth 
router.get("/admin-auth",authchecker,(req,res) =>{
    res.status(200).send({ok : true});
})


//Question Paper Route
router.post("/QuestionPaper/Add",formidable({multiples : true}),authchecker,QuestionPaperAdd );
router.get("/QuestionPaper/Display/:course/:Year/:Semester",QuestionPaperDisplay)
router.get("/QuestionPaper/Display/:_id/:Index",QuestionPaperFileDisplay)
router.get("/QuestionPaper/Paper_Delete/:_id/:Index",authchecker,QuestionPaperDelete)
router.get("/QuestionPaper/Year_Delete/:_id",authchecker,QuestionPaperYearDelete)
router.get("/QuestionPaper/Question_Paper_Display_All",QuestionPaperDisplayAll)
router.get("/QuestionPaper/Filter_Data/:course",PaperFilterDisplay)
router.post("/QuestionPaper/Question_Paper_Update/:_id",authchecker,formidable({multiples : true}),QuestionPaperUpdate)

//Alumini gallery
router.post("/Alumini/gallery/aluminiAddImage",formidable({multiples : true}), aluminiAddImage);
router.get("/Alumini/gallery/aluminiDisplayImage", aluminiDisplayImage);
router.post("/Alumini/gallery/aluminiDisplayImages/:id/:Index", aluminiDisplayImages);
router.post("/Alumini/gallery/aluminiUpdateImage/:_id", formidable(), aluminiUpdateImage);
router.post("/Alumini/gallery/aluminiUpdateImages/:id", formidable({multiples : true}), aluminiUpdateImages);
router.delete("/Alumini/gallery/aluminiDelete/:id", aluminiDelete);
router.delete("/Alumini/gallery/aluminiImagesDelete/:_id/:Index", aluminiImagesDelete);


//Event gallery
router.post("/Event/gallery/eventAddImage",formidable({multiples : true}), eventAddImage);
router.get("/Event/gallery/eventDisplayImage", eventDisplayImage);
router.get("/Event/gallery/eventDisplayImages/:id/:Index", eventDisplayImages);
router.put("/Event/gallery/eventUpdateImage/:_id", formidable(), eventUpdateImage);
router.put("/Event/gallery/eventUpdateImages/:id", formidable({multiples : true}), eventUpdateImages);
router.delete("/Event/gallery/eventDelete/:id", eventDelete);
router.delete("/Event/gallery/eventImagesDelete/:_id/:Index", eventImagesDelete);


//Notice Routes//
router.post("/Notice/Notice_Add",authchecker,formidable(),NoticeAdd);
router.get("/Notice/Notice_Delete/:_id",authchecker,NoticeDelete);
router.get("/Notice/Notice_Data_Display",NoticeDataDisplay);
router.get("/Notice/Notice_File_Display/:_id",NoticeFileDisplay);
router.post("/Notice/Notice_Update/:_id",authchecker,formidable(),NoticeUpdata);

//Admission Routes//
router.post("/Admission/Request",authchecker,AdmissionFormFill);
router.get("/Admission/RequestDelete",authchecker,AdmissionRequestDelete);
router.get("/Admission/RequestDisplay",AdmissionRequestDisplay)

//Event Routes//
router.post("/Event/Event_Add",formidable({multiples : true}),EventAdd);

//EventHandler Routes//
router.post("/Eventhandler/EventHandler_Add",formidable({multiples : true}),EventHandlerAdd);
router.post("/Eventhandler/EventHandler_Display",EventHandlerDisplay);

//Collaborations Routes
router.post("/Collaborations/Collaborations_Add",formidable(),CollaborationsAdd)
router.get("/Collaborations/Collaborations_Delete/:_id",CollaborationsDelete);
router.get("/Collaborations/Collaborations_Image_Display/:_id",CollaborationsImageDisplay);
router.get("/Collaborations/Collaborations_Display",CollaborationsDisplay);


module.exports = router;    