class TriangleRender {
    constructor(element, triangleLength) {
        this.element = element
        this.triangleLength = triangleLength
        this.myTriangle = new Array(this.triangleLength).fill('*')
        this.myTriangleIndex = 1
        this.myVerticalTriangle = new Array(1).fill('*')
        this.myVerticalTriangleIndex = 1
    }

    #triangleRenderVertically (arr) {
        const p = document.createElement('p')
        p.textContent = arr.join(' ')
        this.element.appendChild(p)

        this.myVerticalTriangleIndex += 1
        this.myVerticalTriangle = new Array(this.myVerticalTriangleIndex).fill('*')
        if(this.myVerticalTriangleIndex - 1 !== this.triangleLength) {
            this.#triangleRenderVertically(this.myVerticalTriangle)
        } else return 
    } 

    #triangleRender (arr) {
        const p = document.createElement('p')
        p.textContent = arr.join(' ')
        this.element.appendChild(p)
        
        this.myTriangle = new Array(this.triangleLength - this.myTriangleIndex).fill('*')
        this.myTriangleIndex += 1
        if(this.myTriangle.length !== 0){
            this.#triangleRender(this.myTriangle)
        } else return
    }

    render (type) {
        this.element.innerHTML = "" // clear previous triangle
        if(type === 'rotate'){
            this.#triangleRender(this.myTriangle)
        }

        if(type === 'vertical') {
            this.#triangleRenderVertically(this.myVerticalTriangle)
        }
    }
}

const mainDiv = document.querySelector('.main-div')
const triangle = document.querySelector('.triangle')
const rotatedTriangle = document.querySelector('.rotated-triangle')
const input = document.querySelector('input')
const errorElement = document.createElement("p")


let checkNumberRegex = /^[0-9]+$/

let inputValue
let button
input.addEventListener('change', (e) => {
    inputValue = input.value
    input.value = ""
    errorElement.innerHTML = ""
    if(checkNumberRegex.test(inputValue)){
        console.log(inputValue)
        const renderTriangle = new TriangleRender(triangle, parseInt(inputValue))
        renderTriangle.render('vertical')
        triangle.style.cursor = "pointer"
        rotatedTriangle.innerHTML = ""
        if (!button) {
            button = document.createElement('button')
            button.className = 'rotationBtn'
            button.innerText = 'Rotate'
            mainDiv.appendChild(button)
            button.addEventListener('click', () => {
                const rotateTriangle = new TriangleRender(rotatedTriangle, parseInt(inputValue))
                rotateTriangle.render('rotate')
            })
        }
    } else {
        errorElement.innerHTML = "enter valid number/text"
        mainDiv.appendChild(errorElement)
    }
})

triangle.addEventListener('click', () => {
    const rotateTriangle = new TriangleRender(rotatedTriangle, parseInt(inputValue))
    rotateTriangle.render('rotate')
})