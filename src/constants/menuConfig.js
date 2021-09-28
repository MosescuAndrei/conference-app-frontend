import React from 'react'
import Home from '@material-ui/icons/Home'
import Settings from '@material-ui/icons/Settings'
import HomeIcon from "@material-ui/icons/Home"
import { Event } from '@material-ui/icons'
import { EventNote } from '@material-ui/icons'

const menuItems = [
  { icon: <Home />, text: 'NavBar.Welcome', path: '/welcome', name: 'Welcome' },
  { icon: <Settings />, text: 'NavBar.Settings', path: '/settings', name: 'Settings' },
  { icon: <HomeIcon />, text: 'NavBar.MyFirstMenu', path: '/helloWorld', name: 'MyFirstMenu' },
  { icon: <Event />, text: 'NavBar.Conference', path: '/conference', name: 'Conference' },
  { icon: <EventNote />, text: 'NavBar.MyConference', path: '/myConference', name: 'MyConference' }
] 

export default menuItems
