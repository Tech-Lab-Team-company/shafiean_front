import { createRouter, createWebHistory } from 'vue-router'
import registerLogin from '@/components/register/login.vue'
import HomeView from '../views/dashboard/dashboard.vue'
import GroupsIndex from '@/views/dashboard/groups/index.vue'
import GroupAdd from '@/views/dashboard/groups/add.vue'
import editgroup from '@/views/dashboard/groups/edit.vue'
import LessonsIndex from '@/views/dashboard/lessons/index.vue'
import addlessons from '@/views/dashboard/lessons/add.vue'
import detailslessons from '@/views/dashboard/lessons/details.vue'
import editlessons from '@/views/dashboard/lessons/edit.vue'
import addLessons from '@/views/dashboard/lessons/addLessons.vue'



import stepsIndex from '@/views/dashboard/steps/index.vue'
import addSteps from '@/views/dashboard/steps/add.vue'
import editSteps from '@/views/dashboard/steps/edit.vue'
import subjectsindex from '@/views/dashboard/subjects/index.vue'
import addSubject from '@/views/dashboard/subjects/add.vue'
import editSubject from '@/views/dashboard/subjects/edit.vue'
import ExamsIndex from '@/views/dashboard/exams/index.vue'
import addExam from '@/views/dashboard/exams/add.vue'
import questionsIndex from '@/views/dashboard/questions/index.vue'
import quesexamIndex from '@/views/dashboard/questions/index.vue'
// import addQues from '@/views/dashboard/quesexam/add.vue'
import examdetailsIndex from '@/views/dashboard/examdetails/index.vue'

import AddQuestion from '@/views/dashboard/questions/add.vue'
import AssignmentIndex from '@/views/dashboard/Assignment/index.vue'
import addAssignment from '@/views/dashboard/Assignment/add.vue'
import QuestionbankIndex from '@/views/dashboard/Questionbank/index.vue'
import questionbankedit from '@/views/dashboard/Questionbank/edit.vue'
import addnewQuestion from '@/views/dashboard/Questionbank/add.vue'
import studentsIndex from '@/views/dashboard/students/index.vue'
import addStudent from '@/views/dashboard/students/add.vue'
import detailsStudent from '@/views/dashboard/students/details.vue'
import mangestudentIndex from '@/views/dashboard/mangestudent/index.vue'
import teachersIndex from '@/views/dashboard/teachers/index.vue'
import addTeachers from '@/views/dashboard/teachers/add.vue'
import detailsTeachers from '@/views/dashboard/teachers/details.vue'
import parentsIndex from '@/views/dashboard/parents/index.vue'
import moderatotsIndex from '@/views/dashboard/moderatots/index.vue'
import addSupervisor from '@/views/dashboard/moderatots/add.vue'
import manageIndex from '@/views/dashboard/manage/index.vue'
import addManage from '@/views/dashboard/manage/add.vue'
import jobsIndex from '@/views/dashboard/jobs/index.vue'
import addJobs from '@/views/dashboard/jobs/add.vue'
import permations from '@/views/dashboard/permations/index.vue'
import addpermations from '@/views/dashboard/permations/add.vue'
import sliders from '@/views/dashboard/sliders/index.vue'
import addslider from '@/views/dashboard/sliders/add.vue'
import whoarewe from '@/views/dashboard/whoarewe/index.vue'
import success from '@/views/dashboard/success/index.vue'
import addsuccess from '@/views/dashboard/success/add.vue'
import servicesIndex from '@/views/dashboard/services/index.vue'
import addservices from '@/views/dashboard/services/add.vue'
import teacherappIndex from '@/views/dashboard/teacherapp/index.vue'
import studentappIndex from '@/views/dashboard/studentapp/index.vue'
import guardianappIndex from '@/views/dashboard/guardianapp/index.vue'
import viewblogIndex from '@/views/dashboard/viewblog/index.vue'
import addviewblog from '@/views/dashboard/viewblog/add.vue'
import sectionsIndex from '@/views/dashboard/sections/index.vue'
import addsections from '@/views/dashboard/sections/add.vue'
import hashtagsIndex from '@/views/dashboard/hashtags/index.vue'
import addhashtags from '@/views/dashboard/hashtags/add.vue'
// bjhgjkk
import reportsIndex from '@/views/dashboard/reports/index.vue'
import reportsachivment from '@/views/dashboard/reports/reportsAchivment/achivment.vue'
import examreportIndex from '@/views/dashboard/examreport/index.vue'
import attendance from '@/views/dashboard/reports/attendance.vue'
import archivesIndex from '@/views/dashboard/archives/index.vue'
import detailsarchives from '@/views/dashboard/archives/details.vue'
import editarchives from '@/views/dashboard/archives/edits.vue'
import detailsGroup from '@/views/dashboard/archives/detailsGroup.vue'
import editGroups from '@/views/dashboard/archives/editGroups.vue'
import competitionReportsIndex from '@/views/dashboard/competitionReports/index.vue'
import resultcompetitionReports from '@/views/dashboard/competitionReports/result.vue'
import BehavioralReportsIndex from '@/views/dashboard/BehavioralReports/index.vue'
import AcademicReportsIndex from '@/views/dashboard/AcademicReports/index.vue'
import missedReportsIndex from '@/views/dashboard/MissedReports/index.vue'
import detailedReportsIndex from '@/views/dashboard/detailedReports/index.vue'
import associationReportsIndex from '@/views/dashboard/associationReports/index.vue'



import electronicIndex from '@/views/dashboard/electronic/index.vue'
import addelectronic from '@/views/dashboard/electronic/add.vue'
import contestsIndex from '@/views/dashboard/contests/index.vue'
import addcontests from '@/views/dashboard/contests/add.vue'
import generalsettingIndex from '@/views/dashboard/generalsetting/index.vue'
import ComplaintsIndex from '@/views/dashboard/Complaints/index.vue'




const routes = [
  {
    path: '/',
    name: 'register-login',
    component: registerLogin
  },
  {
    path: '/HomeView',
    name: 'home',
    component: HomeView
  },

  // Start route Groups
  {
    path: '/groups',
    name: 'GroupsIndex',
    component: GroupsIndex
  },
  {
    path: '/group/add',
    name: 'GroupsAdd',
    component: GroupAdd
  },

  {
    path : '/editgroup',
    name : 'editgroup',
    component : editgroup
  },
  // End route Groups

  // Start route Lessons
  {
    path: '/lessons',
    name: 'LessonsIndex',
    component: LessonsIndex
  },
  // End route Lessons

  // start addLessons 
  {
    path: '/addLessons',
    name: 'addLessons',
    component: addlessons
  },
  {

    path : '/detailslessons',
    name : 'detailslessons',
    component : detailslessons
  },
  {

    path : '/editLessons',
    name : 'editLessons',
    component : editlessons
  },
  {

    path : '/addLessons',
    name : 'addLessons',
    component : addLessons
  },
  // end addLessons

  // start grade edu
  {
    path: '/steps',
    name: 'stepsIndex',
    component: stepsIndex
  },
  {
    path: '/addSteps',
    name: 'addSteps',
    component: addSteps
  },
  {
  
    path : '/editSteps',
    name : 'editSteps',
    component : editSteps
  
  
  }

  // end grade edu

  // start subjects 
  , {
    path: '/subjects',
    name: 'subjects/index',
    component: subjectsindex
  },
  {
    path: '/addSubject',
    name: 'addSubject',
    component: addSubject
  },
  {
    path: '/editSubject',
    name: 'editSubject',
    component: editSubject
  },
  // end subjects 

  // start Exams 
  {
    path: '/exams',
    name: 'examsIndex',
    component: ExamsIndex
  },
  {
    path: '/addExam',
    name: 'addExam',
    component: addExam
  },


  // end Exmas 

  // start Questions
  {
    path: '/questions',
    name: 'questionsIndex',
    component: questionsIndex
  },
  {
    path: '/addQuestion',
    name: 'addQuestion',
    component: AddQuestion

  },
//   {

// path:'/addQues'
// ,name:'addQues'
// ,component: addQues

//   },

  // end Question

  // start Assignment-details
  {
    path: '/Assignment',
    name: 'AssignmentIndex',
    component: AssignmentIndex

  },
  {
    path: '/addAssignment',
    name: 'addAssignment',
    component: addAssignment
  },
  // end Assignment-details

  // start Questionbank
  {
    path: '/Questionbank',
    name: 'QuestionbankIndex',
    component: QuestionbankIndex
  },
  {
    path: '/addnewQuestion',
    name: 'addnewQuestion',
    component: addnewQuestion
  },
  {
    path: '/questionbankedit',
    name: 'questionbankedit',
    component: questionbankedit
  },
  // end Questionbank

  // start students
  {
    path: '/students',
    name: 'studentsIndex',
    component: studentsIndex
  }, {
    path: '/addStudent',
    name: 'addStudent',
    component: addStudent
  },
  {
    path: '/detailsStudent',
    name: 'detailsStudent',
    component: detailsStudent
  },

  // end students

  // start mangestudent
  {

    path: '/mangestudent',
    name: 'mangestudent',
    component: mangestudentIndex

  },

  // end mangestudent

  // start teachers 
  {
    path: '/teachers',
    name: 'teachersIndex',
    component: teachersIndex

  },
  {
    path: '/addTeachers',
    name: 'addTeachers',
    component: addTeachers
  },
  // end teachers 


  // start parents
  {
    path: '/parents',
    name: 'parents-index',
    component: parentsIndex
  },



  // end parents

  // start moderators
  {
    path: '/moderatots',
    name: 'moderatots-index',
    component: moderatotsIndex
  },
  {
    path: '/addSupervisor',
    name: 'addSupervisor',
    component: addSupervisor
  },
  // end moderators


  // start manage 
  {
    path: '/manage',
    name: 'manage-index',
    component: manageIndex
  },
  {
    path: '/addManage',
    name: 'addManage',
    component: addManage
  },

  // end manage 

  // start jobs

  {
    path: '/jobs',
    name: 'jobsIndex',
    component: jobsIndex
  },
  {
    path: '/addJobs',
    name: 'addJobs',
    component: addJobs
  },

  // end jobs

  // start permations
  {
    path: '/permations',
    name: 'permations-index',
    component: permations
  },
  {
    path: '/permations-add',
    name: 'permations-add',
    component: addpermations
  }




  // end permations

  // start sliders
  , {
    path: '/sliders',
    name: 'sliders-index',
    component: sliders

  },
  {
    path: '/addslider',
    name: 'add-slider',
    component: addslider
  }
  // end sliders

  // who are we 
  , {
    path: '/whoarewe',
    name: 'whoarewe-index',
    component: whoarewe
  }

  // end who are we

  , {
    path: '/success',
    name: 'success-index',
    component: success
  },
  {
    path: '/addsuccess',
    name: 'addsuccess',
    component: addsuccess
  },


  {
    path: '/services',
    name: 'services-index',
    component: servicesIndex
  },
  {
    path: '/addservices',
    name: 'addservices',
    component: addservices
  },
  {
    path: '/teacherapp',
    name: 'teacherapp',
    component: teacherappIndex
  },

  {
    path: '/detailsTeachers',
    name: 'detailsTeachers',
    component: detailsTeachers
  },

  // ================

  {
    path: '/studentapp',
    name: 'studentapp',
    component: studentappIndex
  },

  // ==================

  {
    path: '/guardianapp',
    name: 'guardianapp',
    component: guardianappIndex
  },

  // ==================

  {

    path: '/viewblog',
    name: 'viewblog-index',
    component: viewblogIndex

  },
  {
    path: '/addviewblog',
    name: 'addviewblog',
    component: addviewblog


  },

  // =================

  {
    path: '/sections',
    name: 'sections-index',
    component: sectionsIndex
  },
  {
    path: '/addsections',
    name: 'addsections',
    component: addsections
  },

  // =========================

  {
    path: '/hashtags',
    name: 'hashtags-index',
    component: hashtagsIndex
  },
  {
    path: '/addhashtags',
    name: 'addhashtags',
    component: addhashtags
  },

  // ========quesExam=======
  {
    path: '/quesexam',
    name: 'quesexam-index',
    component: quesexamIndex
  },
  // ======detils question=============

  {

    path: '/examdetails',
    name: 'examdetails-index',
    component: examdetailsIndex

  }












































































  , {

    path: '/electronic',
    name: 'electronic-index',
    component: electronicIndex
  },
  {
    path: '/addelectronic',
    name: 'addelectronic',
    component: addelectronic

  },
  // ===========contests=============
  {

    path: '/contests',
    name: 'contestsIndex',
    component: contestsIndex

  },
  {

    path: '/addcontests',
    name: 'addcontests',
    component: addcontests


  }




  // =========Arcjives===========

  , {
    path: '/archives',
    name: 'archivesIndex',
    component: archivesIndex
  },
  {
    path: '/detailsarchives',
    name: 'detailsarchives',
    component: detailsarchives
  },
  {

    path: '/editarchives',
    name: 'editarchives',
    component: editarchives


  },

  // ====archives group=====


  {

    path: '/detailsGroup',
    name: 'detailsGroup',
    component: detailsGroup
  },
  {

    path: '/editGroups',
    name: 'editGroups',
    component: editGroups
  }

  // ==========================


  , {
    path: '/generalsetting',
    name: 'generalsetting-index',
    component: generalsettingIndex
  },


  // ===============
  {
    path: '/Complaints',
    name: 'ComplaintsIndex',
    component: ComplaintsIndex
  }

  // =======reports==============
  , {
    path: '/reports',
    name: 'reports-index',
    component: reportsIndex
  },

  {
    path: '/reportsachivment',
    name: 'reports-achivment',
    component: reportsachivment
  },
  {
    path: '/attendance',
    name: 'attendance',
    component: attendance
  },
  {
    path: '/examreport'
    , name: 'examreport-index'
    , component: examreportIndex
  },
  {
    path: '/competitionReportsIndex',
    name: 'competitionReports-index',
    component: competitionReportsIndex

  },
  {

    path: '/resultcompetitionReports',
    name: 'result-competitionReports',
    component: resultcompetitionReports


  },
  // ==========================
  {
    path: '/BehavioralReportsIndex',
    name: 'BehavioralReportsIndex',
    component: BehavioralReportsIndex
  }

  // ===============================

  , {

    path: '/AcademicReportsIndex',
    name: 'AcademicReportsIndex',
    component: AcademicReportsIndex

  },
  // =======================
  {

    path: '/missedReportsIndex',
    name: 'missedReportsIndex',
    component: missedReportsIndex
  },

  {
    path :'/detailedReportsIndex' ,
    name : 'detailedReportsIndex' ,
    component : detailedReportsIndex
  },
  {
    path: '/associationReportsIndex',
    name: 'associationReportsIndex',
    component: associationReportsIndex
  }






]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
