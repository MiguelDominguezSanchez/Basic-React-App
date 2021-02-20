const element = React.createElement(
	'div',
	{},
	'Hello World',
	React.createElement('h2', { className: 'leela' }, 'Leela Web Dev')
)

ReactDOM.render(element, document.getElementById('app'))
