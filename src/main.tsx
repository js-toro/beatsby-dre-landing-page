/**
 * Main entry point of the application.
 *
 * Imports necessary dependencies and registers GSAP plugins.
 * Renders the root component of the application.
 *
 * @file This file defines the entry point of the application.
 * @author [Jose Toro]
 * @date Created on 23-01-2024
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

import { gsap } from 'gsap';
import { ScrollToPlugin, ScrollTrigger, TextPlugin } from 'gsap/all';

import App from './App';

// Registering GSAP plugins needed for scroll and text animations.
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, TextPlugin);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
