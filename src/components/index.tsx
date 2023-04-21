import "@/styles/main.css";
import { MainTitle } from "./title/mainTitle";

function App() {
	return (
		<>
			<div className='font-sans w-full h-screen space-y-2 flex flex-col items-center justify-center bg-gray-200'>
				<div className='text-3xl font-semibold'>Inited FeedSource</div>
				<div className='text-lg font-normal text-zinc-500'>Open Source Feedback React Package</div>
			</div>
			<div className='absolute top-0 left-0 m-2'>
				{/* button */}
				<button className='border-0 bg-blue-400 text-white p-2 cursor-pointer rounded-md'>FeedBack</button>
				<div className='relative bg-white p-4 rounded-md w-96'>
					<MainTitle />
					<div className='bg-gray-100 mt-2 rounded-md p-4 border-1 border-gray-200'>
						<div className='flex flex-1 gap-2 items-center justify-between'>
							<div className='rounded-full w-12 h-12 bg-gray-200'></div>
							<div className='rounded-full w-12 h-12 bg-gray-200'></div>
							<div className='rounded-full w-12 h-12 bg-gray-200'></div>
							<div className='rounded-full w-12 h-12 bg-gray-200'></div>
							<div className='rounded-full w-12 h-12 bg-gray-200'></div>
						</div>
						<input type='range' className='w-full mt-4' />
					</div>
					<div className='mt-6'>
						<span className='text-sm text-gray-500'>Tell Us About Your Experience</span>
						<div
							className='border-1 border-blue-200 bg-white rounded-md h-44 p-2'
							contentEditable='true'
						></div>
					</div>
					<div className='mt-4 flex gap-2'>
						<button className='bg-white border-1 border-gray-200 p-2 w-1/3 rounded-md'>Dismiss</button>
						<button className='bg-blue-600 text-white p-2 flex-3 w-2/3 rounded-md'>Send FeedBack</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
