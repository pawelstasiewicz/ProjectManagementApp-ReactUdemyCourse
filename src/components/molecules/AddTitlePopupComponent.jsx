import './AddTitlePopupStyle.css'
import { useState } from 'react';

function AddTitlePopupComponent({ clickExitBtn, onSend}) {
	const [inputValue, setInputValue] = useState('')
    
    function handleClick() {
		clickExitBtn(true);
	}

    function handleInputChange(e){
        setInputValue(e.target.value)
    }

    function submitValue(){
        onSend(inputValue)
        clickExitBtn(true)
    }

	return (
		<div className= 'absolute z-10 top-1/3 left-1/4 -translate-y-1/2 -translate-x-1/2 w-2/4 h-1/3 bg-zinc-400 rounded-3xl animate-slide-in'>
			<h2 className='text-3xl font-bold mt-16 ml-8 text-slate-50 uppercase font-sans'>
				Name of Project:
			</h2>
			<input type='text' value={inputValue} onChange={handleInputChange} className='ml-8  mt-12 w-1/2 h-14' />
			<button className='ml-14 bg-zinc-800 p-5 rounded-lg text-xl  text-slate-500' onClick={submitValue}>
				+ Create Project
			</button>
			<button
				className='absolute top-0 right-0 mt-5 mr-7 uppercase text-slate-50'
				onClick={handleClick}
			>
				X
			</button>
		</div>
	);
}

export default AddTitlePopupComponent;
