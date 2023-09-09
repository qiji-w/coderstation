import React from 'react';

function PageFooter(props) {
	return (
		<>
			<p className='links'>
				<span className='linkItem'>友情链接：</span>
				<a
					href='https://www.baidu.com/'
					target='_blank'
					rel='noreferrer'
					className='linkItem'>
					百度-百度
				</a>
				<a
					href='https://www.baidu.com/'
					target='_blank'
					rel='noreferrer'
					className='linkItem'>
					王炳琦的博客
				</a>
				<a
					href='https://www.baidu.com/'
					target='_blank'
					rel='noreferrer'
					className='linkItem'>
					Mr.Wang
				</a>
				<a
					href='https://www.baidu.com/'
					target='_blank'
					rel='noreferrer'
					className='linkItem'>
					王炳琦的技术专栏
				</a>
			</p>
			<p>© 2022 - Coder Station</p>
			<p>Powered by Create React App</p>
		</>
	);
}

export default PageFooter;
