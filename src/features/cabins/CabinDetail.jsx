import styled from "styled-components";

import CabinDataBox from "./CabinDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useCabins } from "./useCabins";
import Spinner from "../../ui/Spinner";

import Empty from "../../ui/Empty";

import { useParams } from "react-router-dom";

const HeadingGroup = styled.div`
	display: flex;
	gap: 2.4rem;
	align-items: center;
`;

function CabinDetail() {
	const { cabins, isLoading } = useCabins();
	const { cabinId } = useParams();
	const moveBack = useMoveBack();

	// const { id: cabinId } = cabins;

	if (isLoading) return <Spinner />;
	const correspondingCabin = cabins.find(
		(cabin) => cabin.id === parseInt(cabinId)
	);
	if (!cabins) return <Empty resourceName="cabins" />;

	return (
		<>
			<Row type="horizontal">
				<HeadingGroup>
					<Heading as="h1">Cabin #{cabinId}</Heading>
				</HeadingGroup>
				<ButtonText onClick={moveBack}>&larr; Back</ButtonText>
			</Row>

			<CabinDataBox cabin={correspondingCabin} />
		</>
	);
}

export default CabinDetail;
