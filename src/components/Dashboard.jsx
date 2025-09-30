// src/components/Dashboard.tsx

import React from 'react'; // We don't need useState or useEffect anymore
import { Link } from 'react-router-dom';
import { FolderKanban, User as UserIcon, Database, Calendar, Clapperboard, LogOut } from 'lucide-react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const NavCard = ({ to, icon: Icon, title, description }) => (
  <Link to={to} className="group block bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
    <Icon className="w-8 h-8 mb-4 text-blue-600" />
    <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </Link>
);

// Notice we now receive "user" as an argument here
export default function Dashboard({ user }) {
  const handleSignOut = () => {
    signOut(auth);
  };

  // We no longer need the isLoading or !user checks here, because App.tsx handles it.
  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full mx-auto p-8 relative">
        <div className="absolute top-4 right-4 flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm text-gray-500">Welcome back</p>
            <p className="font-medium text-gray-900">{user.email}</p>
          </div>
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm">{user.email.charAt(0).toUpperCase()}</span>
          </div>
          <button onClick={handleSignOut} title="Sign Out" className="p-2 text-gray-400 hover:text-gray-600">
            <LogOut className="w-4 h-4" />
          </button>
        </div>

        <div className="text-center mb-16">
          <Clapperboard className="w-16 h-16 mx-auto mb-6 text-blue-600" />
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">Agenda</h1>
          <p className="text-lg text-gray-600">Your complete independent film production suite.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <NavCard to="/projects" icon={FolderKanban} title="Projects" description="Access and manage all your film projects." />
          <NavCard to="/profile" icon={UserIcon} title="My Profile" description="Manage your company settings and preferences." />
          <NavCard to="/database" icon={Database} title="Global Database" description="Your industry contacts, crew, cast, and vendors." />
          <NavCard to="/calendar" icon={Calendar} title="Global Calendar" description="Master calendar view of all schedules." />
        </div>
      </div>
    </div>
  );
}