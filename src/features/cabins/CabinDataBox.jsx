import styled from "styled-components";

import { HiOutlineHomeModern } from "react-icons/hi2";

const StyledCabinDataBox = styled.section`
	/* Box */
	background-color: var(--color-grey-0);
	border: 1px solid var(--color-grey-100);
	border-radius: var(--border-radius-md);

	overflow: hidden;
`;

const Header = styled.header`
	background-color: var(--color-brand-500);
	padding: 2rem 4rem;
	color: #e0e7ff;
	font-size: 1.8rem;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: space-between;

	svg {
		height: 3.2rem;
		width: 3.2rem;
	}

	& div:first-child {
		display: flex;
		align-items: center;
		gap: 1.6rem;
		font-weight: 600;
		font-size: 1.8rem;
	}

	& span {
		font-family: "Sono";
		font-size: 2rem;
		margin-left: 4px;
	}
`;

const Section = styled.section`
	padding: 3.2rem 4rem 1.2rem;
`;

const Guest = styled.div`
	display: flex;
	align-items: center;
	gap: 1.2rem;
	margin-bottom: 1.6rem;
	color: var(--color-grey-500);

	& p:first-of-type {
		font-weight: 500;
		color: var(--color-grey-700);
	}
`;

const Discount = styled.div`
	font-family: "Sono";
	font-weight: 500;
	color: var(--color-green-700);
`;

// A purely presentational component
function CabinDataBox({ cabin }) {
	const { name, regularPrice, discount } = cabin;

	return (
		<StyledCabinDataBox>
			<Header>
				<div>
					<HiOutlineHomeModern />
					<p>
						<span>Nomor Cabin: {name}</span>
					</p>
				</div>
			</Header>

			<Section>
				<Guest>
					<span>&bull;</span>
					<p>PRICE: ${regularPrice}</p>
				</Guest>
				<Guest>
					<span>&bull;</span>
					<Discount>DISCOUNT:${discount}</Discount>
				</Guest>
			</Section>
		</StyledCabinDataBox>
	);
}

export default CabinDataBox;
