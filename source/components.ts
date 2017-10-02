import AppComponent from './components/app.component';
import HeaderComponent from './components/header.component';
import MainSidebarComponent from './components/main-sidebar.component';
import ControlSidebarComponent from './components/control-sidebar.component';
// pages
import HomeComponent from './components/home.component';
import TeamComponent from './components/team.component';

// module
let mod = angular.module('components', []);

mod.component('app', AppComponent.Factory());
mod.component('header', HeaderComponent.Factory());
mod.component('mainSidebar', MainSidebarComponent.Factory());
mod.component('controlSidebar', ControlSidebarComponent.Factory());
// pages
mod.component('home', HomeComponent.Factory());
mod.component('team', TeamComponent.Factory());

export default mod;