/**
 * HomeLink.styles.ts
 *
 * This file contains the style definitions for the Home Link component.
 *
 * @file This file contains the style definitions for the Home Link component.
 * @author [Jose Toro]
 * @date Created on 24-01-2024
 */

import styled from 'styled-components';

/**
 * `Wrapper` is a styled component that defines a container with a grid structure.
 * This grid has two columns: the first one with a fixed size of 32px and the second one that occupies the remaining space.
 * Within this container, images become pointers when hovered over.
 *
 * @example
 * ```typescript
 *     return (
 *         <Wrapper>
 *             <img src="my-image.png" alt="My Image" />
 *             <div>Some content here</div>
 *         </Wrapper>
 *     );
 * ```
 * @returns {JSX.Element} The rendered Footer component.
 * @date Created on 23-01-2024
 */
export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 32px 1fr;

	img {
		&:hover {
			cursor: pointer;
		}
	}
`;
