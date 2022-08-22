class FullMenu{
    constructor(selector) {
        this.menu = document.querySelector(selector)

        document.addEventListener('click', (e) => {
            const target = e.target.closest('[data-menu]')


            if (target) {
                e.preventDefault();
                const event = target.dataset.menu
                
                this[event]()
            }
        })
    }

    open() {
        this.menu.classList.add('open')
        document.body.classList.add('stop-scrolling')
    }

    close() {
        this.menu.classList.remove('open')
        document.body.classList.remove('stop-scrolling')
    }
}

var menu = new FullMenu('#full-menu')

console.log(menu)