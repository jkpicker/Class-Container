const filter = document.querySelector('#filter')
const classes = document.querySelectorAll('.class')
const classbox = document.querySelector('.classes')
filter.addEventListener(
	'change',
	e => {
		e.preventDefault()
		if (filter.value === 'all') {
			for (let element of classes) {
				element.classList.remove('hidden')
			}
		}

		if (filter.value === 'linguisticsclass') {
			for (let element of classes) {
				if (element.classList.contains('linguisticsclass')) {
					element.classList.remove('hidden')
				} else {
					element.classList.add('hidden')
				}
			}
		}

		if (filter.value === 'mathclass') {
			for (let element of classes) {
				if (element.classList.contains('mathclass')) {
					element.classList.remove('hidden')
				} else {
					element.classList.add('hidden')
				}
			}
		}

		if (filter.value === 'itclass') {
			for (let element of classes) {
				if (element.classList.contains('itclass')) {
					element.classList.remove('hidden')
				} else {
					element.classList.add('hidden')
				}
			}
		}

		if (filter.value === 'bioclass') {
			for (let element of classes) {
				if (element.classList.contains('bioclass')) {
					element.classList.remove('hidden')
				} else {
					element.classList.add('hidden')
				}
			}
		}

		if (filter.value === 'physicclass') {
			for (let element of classes) {
				if (element.classList.contains('physicclass')) {
					element.classList.remove('hidden')
				} else {
					element.classList.add('hidden')
				}
			}
		}
	},
	100
)

const sortButton = document.querySelector('.SortNum')
let sortervalue = 0

sortButton.addEventListener('click', () => {
	const classesArray = Array.from(document.querySelectorAll('.class'))
	if (sortervalue === 0) {
		classesArray.sort((a, b) => {
			const pupilsA = parseInt(a.dataset.pupils)
			const pupilsB = parseInt(b.dataset.pupils)
			return pupilsA - pupilsB
		})
		sortervalue = 1
	} else if (sortervalue === 1) {
		classesArray.sort((a, b) => {
			const pupilsA = parseInt(a.dataset.pupils)
			const pupilsB = parseInt(b.dataset.pupils)
			return pupilsB - pupilsA
		})
		sortervalue = 0
	}
	const classbox = document.querySelector('.classes')
	classesArray.forEach(classElement => classbox.appendChild(classElement))
})


const subButton = document.querySelector('.sub')
const form = document.querySelector('.form')

form.addEventListener('submit', e => {
	e.preventDefault()
	for (let element of classes) {
		element.classList.remove('hidden')
	}
	const name = document.querySelector('#name').value
	const num = document.querySelector('#num').value
	const focus = document.querySelector('#focus').value
	if (name !== '') {
		for (let element of classes) {
			if (element.dataset.num !== name) {
				element.classList.add('hidden')
			}
		}
	}
	if (num !== '') {
		for (let element of classes) {
			if (parseInt(element.dataset.pupils) < num) {
				element.classList.add('hidden')
			}
		}
	}
	if (focus !== '') {
		for (let element of classes) {
			if (element.dataset.focus !== focus) {
				element.classList.add('hidden')
			}
		}
	}
	form.reset();
})
