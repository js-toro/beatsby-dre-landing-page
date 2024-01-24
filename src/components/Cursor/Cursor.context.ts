/**
 * Cursor.context.ts
 *
 * This file defines the cursor context for the application.
 *
 * The cursor context is used to share the cursor state among the application's components.
 *
 * @file This file defines the cursor context for the application.
 * @author [Jose Toro]
 * @date Created on 23-01-2023
 */

import { createContext } from "react";

import { CursorContextType } from "./Cursor.types";

/**
 * CursorContext is an instance of React Context with a defined type of CursorContextType.
 * This context is used to share the cursor state across the application's components.
 *
 * @see CursorContextType
 *
 * @example
 * // Using CursorContext in a component
 * import { useContext } from 'react';
 * import { CursorContext } from './Cursor.context';
 *
 * function MyComponent() {
 *   const cursor = useContext(CursorContext);
 *   // ...
 * }
 *
 * @returns {Context} The cursor context
 * @date Created on 23-01-2023
 */
export const CursorContext = createContext<CursorContextType>(
	{} as CursorContextType
);
