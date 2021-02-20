const element = React.createElement(
	'div',
	{},
	'Hello World',
	React.createElement('h2', { className: 'leela' }, 'Leela Web Dev')
)

const channelName = 'Leela Web Dev'

function getChannelName() {
	if (channelName === 'Leela Web Dev') return <div>{channelName}</div>
	else return <div>Else Part</div>
}

const element2 = (
	<div>
		<div className='leela' tabIndex='1'>
			Hello World with JSx
		</div>
		{getChannelName()}
	</div>
)

ReactDOM.render(element2, document.getElementById('app'))
