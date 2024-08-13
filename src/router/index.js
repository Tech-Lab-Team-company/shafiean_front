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
}
  // end subjects


]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
