import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/dashboard/dashboard.vue'
import GroupsIndex from '@/views/dashboard/groups/index.vue'
import GroupAdd from '@/views/dashboard/groups/add.vue'
import LessonsIndex from '@/views/dashboard/lessons/index.vue'
import addlessons from '@/views/dashboard/lessons/addlessons.vue'
import stepsIndex from '@/views/dashboard/steps/index.vue'
import addSteps from '@/views/dashboard/steps/addSteps.vue'
import subjectsindex from '@/views/dashboard/subjects/index.vue'
import addSubject from '@/views/dashboard/subjects/addSubject.vue'
import ExamsIndex from '@/views/dashboard/exams/index.vue'
import addExam from '@/views/dashboard/exams/addExam.vue'
import questionsIndex from '@/views/dashboard/questions/index.vue'
import AddQuestion from '@/views/dashboard/questions/addQuestion.vue'
import AssignmentIndex from '@/views/dashboard/Assignment/index.vue'
import addAssignment from '@/views/dashboard/Assignment/addAssignment.vue'
import QuestionbankIndex from '@/views/dashboard/Questionbank/index.vue'
import addnewQuestion from '@/views/dashboard/Questionbank/addnewQuestion.vue'





import archivesIndex from '@/views/dashboard/archives/index.vue'

const routes = [
  {
    path: '/',
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
  // end addLessons

  // start grade edu
  {
    path: '/steps',
    name: 'steps/index',
    component: stepsIndex
  },
  {
    path: '/addSteps',
    name: 'addSteps',
    component: addSteps
  }

  // end grade edu

  // start subjects 
,{
path: '/subjects',
name: 'subjects/index',
component: subjectsindex
},
{
  path: '/addSubject',
  name: 'addSubject',
  component: addSubject
},
// end subjects 

// start Exams 
{
 path:'/exams',
 name : 'examsIndex',
 component: ExamsIndex
},
{
  path: '/addExam',
  name : 'addExam',
  component : addExam
},


// end Exmas 

// start Questions
{
  path:'/questions',
  name:'questionsIndex',
  component : questionsIndex
},
{
  path : '/addQuestion',
  name : 'addQuestion',
component : AddQuestion 

},

// end Question

// start Assignment-details
{
  path: '/Assignment',
  name : 'AssignmentIndex',
  component : AssignmentIndex

},
{
  path : '/addAssignment',
  name : 'addAssignment',
  component : addAssignment
},
// end Assignment-details

// start Questionbank
{
  path : '/Questionbank',
name : 'QuestionbankIndex',
component : QuestionbankIndex
},
{
  path : '/addnewQuestion',
name : 'addnewQuestion',
component : addnewQuestion
}
// end Questionbank




































































,{
  path: '/archives',
  name : 'archivesIndex',
  component : archivesIndex
}










]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
