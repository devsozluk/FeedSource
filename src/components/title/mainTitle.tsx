import { SubTitle } from "./subtitle";

export const MainTitle = () => {
	return (
		<>
			<h1 className='text-gray-900 text-lg m-0 p-0 font-medium title-font'>Meta Feedback!</h1>
			<SubTitle />
			<div className='i-ph-x absolute right-4 top-4 cursor-pointer' />
			<hr className='border-1 border-dashed mt-2 border-gray-100 mt-4 mb-4' />
		</>
	);
};
