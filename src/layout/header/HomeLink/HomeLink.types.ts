/**
 * HomeLink.types.ts
 *
 * This file contains the type definitions for the Home Link component.
 *
 * @file This file contains the type definitions for the Home Link component.
 * @author [Jose Toro]
 * @date Created on 24-01-2024
 */

/**
 * Define una interfaz para las propiedades del componente HomeLink.
 *
 * @property {Function} scrollToSection - Una función que se utiliza para desplazarse a una sección específica de la página. Esta función toma un string como parámetro que representa el nombre de la sección a la que se debe desplazar.
 *
 * @date Creado el 24-01-2024
 */
export interface HomeLinkProps {
	scrollToSection: (section: string) => void;
}
